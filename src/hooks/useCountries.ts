import Country from "@reiz-countries/types/country";
import { useState } from "react";

export default function useCountries(initialData: Country[]) {
  const [countries] = useState<Country[]>(initialData);
  return { countries };
}
