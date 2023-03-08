import Country from "@reiz-countries/types/country";
import useCountries from "@reiz-countries/hooks/useCountries";
import CountryListItem from "@reiz-countries/components/home/CountryList/CountryListItem";
import CountryListPages from "@reiz-countries/components/home/CountryList/CountryListPages";
import CountryListSort from "@reiz-countries/components/home/CountryList/CountryListSort";
import FilterBadge from "@reiz-countries/components/common/FilterBadge";

type Props = {
  countries: Country[];
};

export default function CountryList(props: Props) {
  const { countries, page, maxPage, setPage, ascending, setAscending } =
    useCountries(props.countries);

  return (
    <>
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <FilterBadge onToggle={() => {}}>
            Less Than Lithuania&apos;s Area
          </FilterBadge>
          <FilterBadge onToggle={() => {}}>
            Countries in Oceania
          </FilterBadge>
        </div>
        <CountryListSort ascending={ascending} onToggle={setAscending} />
      </div>
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
