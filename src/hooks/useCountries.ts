import useSWR from "swr";
import fetcher from "@reiz-countries/utils/fetcher";
import Country from "@reiz-countries/types/country";

export default function useCountries() {
  const url = `${process.env.NEXT_PUBLIC_COUNTRIES_API_URL}/all?fields=name,region,area`;
  const { data, error, isLoading } = useSWR<Country[]>(url, fetcher);
  return {
    countries: data,
    error: error,
    isLoading: isLoading,
  };
}
