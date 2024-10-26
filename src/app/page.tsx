import TourDetails from "./components/Tour Details";
import FavouritePlaces from "./components/Favourite Places";
import PlateformOverview from "./components/Plateform Overview";

export default function Home() {
  return (
    <section>
      <div className="max-w-full h-screen bg-[url('/Images/heroes.png')] bg-cover bg-center flex flex-col items-center justify-center"></div>
      <TourDetails />
      <FavouritePlaces />
      <PlateformOverview />
    </section>
  );
}
