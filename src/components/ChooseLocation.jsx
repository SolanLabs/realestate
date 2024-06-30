import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const ChooseLocation = () => {
  const locations = [
    { name: "Tokyo", image: "/path-to-tokyo-image.jpg" },
    { name: "Yokohama", image: "/path-to-yokohama-image.jpg" },
    { name: "Chiba", image: "/path-to-chiba-image.jpg" },
    { name: "Gunma", image: "/path-to-gunma-image.jpg" },
    { name: "Saitama", image: "/path-to-saitama-image.jpg" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Choose your location</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {locations.map((location, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-xl font-bold text-white">{location.name}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Show all
        </button>
      </div>
    </section>
  );
};

export default ChooseLocation;

