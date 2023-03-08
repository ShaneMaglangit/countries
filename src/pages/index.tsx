import useCountries from "@reiz-countries/hooks/useCountries";
import CountryList from "@reiz-countries/components/CountryList";
import Country from "@reiz-countries/types/country";

type PageProps = {
  countries: Country[];
};

export default function Home(props: PageProps) {
  const { countries, page, maxPage, setPage } = useCountries(props.countries);
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
      <CountryList.Pages
        pages={maxPage}
        currentPage={page}
        onPageChange={setPage}
      />
    </main>
  );
}

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_COUNTRIES_API_URL}/all?fields=name,region,area`;
  const data = await fetch(url);
  const countries = await data.json();
  return {
    props: {
      countries,
    },
  };
}
