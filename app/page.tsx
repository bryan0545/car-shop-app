import { SearchBar, CustoFilter, Hero,CardCar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = allCars.length < 1 || !Array.isArray(allCars) || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container"></div>
        </div>

        {!isDataEmpty ? 
        <section>
          <div className="home__cars-wrapper">
            {allCars.map((car) => (
              <CardCar car ={car}/>
            ))}
          </div>
        </section> : 
        <div className="home__error-container">
          <h2 className="text-black text-xl">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
        }
      </div>
    </main>
  );
}
