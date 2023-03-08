import Country from "@reiz-countries/types/country";
import { useMemo, useState } from "react";

const PAGE_SIZE = 24;

export default function useCountries(initialData: Country[]) {
  const [page, setPage] = useState(0);
  const [ascending, setAscending] = useState(true);
  const [countries] = useState<Country[]>(initialData);

  const filteredCountries = useMemo(() => {
    return countries
      .sort((a, b) => {
        const res = a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        return res * (ascending ? 1 : -1);
      })
      .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  }, [page, ascending, countries]);

  return {
    countries: filteredCountries,
    maxPage: Math.ceil(countries.length / PAGE_SIZE),
    page: page,
    setPage: setPage,
    ascending: ascending,
    setAscending: setAscending,
  };
}
