import TourDetails from "../../components/Tour Details";
import FavouritePlaces from "../../components/Favourite Places";
import PlateformOverview from "../../components/Plateform Overview";

export default function Home() {
  return (
    <section>
      <div className="max-w-full h-screen bg-[url('/Images/hero.jpg')] bg-cover bg-center md:py-60 py-52 md:px-32 px-4 space-y-8">
        <h1 className="text-[#FDE02F] md:text-7xl text-5xl ">
          𝓕𝓲𝓷𝓭 𝔂𝓸𝓾𝓻 𝓝𝓮𝔁𝓽 𝓽𝓸𝓾𝓻!
        </h1>
        <h1 className="text-white text-2xl">Where would you like to go?</h1>
      </div>
      <TourDetails />
      <FavouritePlaces />
      <PlateformOverview />
    </section>
  );
}
