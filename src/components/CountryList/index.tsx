import Country from "@reiz-countries/types/country";
import useCountries from "@reiz-countries/hooks/useCountries";
import CountryListItem from "@reiz-countries/components/CountryList/CountryListItem";
import CountryListPages from "@reiz-countries/components/CountryList/CountryListPages";
import React from "react";

type Props = {
  countries: Country[];
};

export default function CountryList(props: Props) {
  const { countries, page, maxPage, setPage } = useCountries(props.countries);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries?.map((country) => (
          <CountryListItem key={country.name} country={country} />
        ))}
      </div>
      <CountryListPages
        pages={maxPage}
        currentPage={page}
        onPageChange={setPage}
      />
    </>
  );
}
