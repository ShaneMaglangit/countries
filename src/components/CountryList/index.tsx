import CountryListComponent from "@reiz-countries/components/CountryList/CountryList";
import CountryListItem from "@reiz-countries/components/CountryList/CountryListItem";
import CountryListPages from "@reiz-countries/components/CountryList/CountryListPages";

const CountryList = Object.assign(CountryListComponent, {
  Item: CountryListItem,
  Pages: CountryListPages,
});

export default CountryList;
