import useCountries from "@reiz-countries/hooks/useCountries";
import CountryList from "@reiz-countries/components/CountryList";

export default function Home() {
  const { countries } = useCountries();
  return (
    <main className="container mx-auto flex flex-col gap-4 p-8">
      <div>
        <h1 className="text-3xl font-bold">Reiz Countries</h1>
        <p className="text-gray-600">
          Visualized representation of country names, regions, and area sizes.
        </p>
      </div>
      <CountryList>
        {countries?.map((country) => (
          <CountryList.Item key={country.name} country={country} />
        ))}
      </CountryList>
    </main>
  );
}
