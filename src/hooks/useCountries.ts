import Country from "@reiz-countries/types/country";
import { useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 24;

type Filters = {
  ascending: boolean;
  region?: string;
  area?: {
    country: string;
    isGreaterThan: boolean;
  };
};

export default function useCountries(initialData: Country[]) {
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(
    Math.ceil(initialData.length / PAGE_SIZE)
  );
  const [countries] = useState<Country[]>(initialData);
  const [filters, setFilters] = useState<Filters>({ ascending: true });

  const filteredCountries = useMemo(() => {
    // Apply filters
    let processedCountries = countries;
    processedCountries = filterByRegion(processedCountries, filters.region);
    processedCountries = filterByArea(processedCountries, filters.area);
    processedCountries = sortCountries(processedCountries, filters.ascending);

    // Update maxPage
    setMaxPage(Math.ceil(processedCountries.length / PAGE_SIZE));

    // Apply pagination
    return processedCountries.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  }, [page, filters, countries]);

  useEffect(() => {
    setPage(0);
  }, [filters]);

  const setAscending = (ascending: boolean) => {
    setFilters({ ...filters, ascending });
  };

  const filterRegion = (region?: string) => {
    setFilters({ ...filters, region });
  };

  const filterArea = (
    areaFilter: { country: string; isGreaterThan: boolean } | undefined
  ) => {
    setFilters({ ...filters, area: areaFilter });
  };

  return {
    countries: filteredCountries,
    maxPage: maxPage,
    page: page,
    setPage: setPage,
    ascending: filters.ascending,
    setAscending: setAscending,
    filterRegion: filterRegion,
    filterArea: filterArea,
  };
}

function sortCountries(countries: Country[], ascending: boolean) {
  return countries.sort((a, b) => {
    const res = a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    return res * (ascending ? 1 : -1);
  });
}

function filterByRegion(countries: Country[], region?: string) {
  if (!region) return countries;
  return countries.filter((country) => country.region === region);
}

function filterByArea(
  countries: Country[],
  areaFilter: { country: string; isGreaterThan: boolean } | undefined
) {
  if (!areaFilter) return countries;
  const selectedCountry = countries.find(
    (country) => country.name === areaFilter!.country
  );
  if (!selectedCountry) return [];
  return countries.filter(
    (country) =>
      country.area > selectedCountry.area === areaFilter!.isGreaterThan
  );
}
