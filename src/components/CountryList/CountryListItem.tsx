import Country from "@reiz-countries/types/country";
import RegionIcon from "@reiz-countries/assets/region.svg";
import AreaIcon from "@reiz-countries/assets/area.svg";

type Props = {
  country: Country;
};

export default function CountryListItem({ country }: Props) {
  return (
    <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <h4 className="mb-1 truncate text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {country.name}
      </h4>
      <p className="flex items-center gap-1 text-sm">
        <RegionIcon />
        <span className="font-medium">Region:</span> {country.region}
      </p>
      <p className="flex items-center gap-1 text-sm">
        <AreaIcon />
        <span className="font-medium">Area:</span> {country.area}
      </p>
    </div>
  );
}
