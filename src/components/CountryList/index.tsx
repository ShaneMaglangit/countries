import CountryListComponent from "@reiz-countries/components/CountryList/CountryList";
import CountryListItem from "@reiz-countries/components/CountryList/CountryListItem";

const CountryList = Object.assign(CountryListComponent, {
  Item: CountryListItem,
});

export default CountryList;
