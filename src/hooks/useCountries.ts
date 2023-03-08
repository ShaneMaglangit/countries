import Country from "@reiz-countries/types/country";
import { useState } from "react";

const PAGE_SIZE = 24;

export default function useCountries(initialData: Country[]) {
  const [page, setPage] = useState(0);
  const [countries] = useState<Country[]>(initialData);
  const filteredCountries = countries.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE
  );
  return {
    countries: filteredCountries,
    page: page,
    setPage: (page: number) => setPage(page),
    maxPage: Math.ceil(countries.length / PAGE_SIZE),
  };
}
