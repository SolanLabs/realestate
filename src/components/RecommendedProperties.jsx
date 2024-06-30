import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
const RecommendedProperties = () => {
  const properties = [
    {
      price: "$3,450",
      image: "/path-to-house1-image.jpg",
      featured: true,
      forRent: true,
    },
    {
      price: "$4,300",
      image: "/path-to-house2-image.jpg",
      featured: true,
      forRent: true,
    },
    {
      price: "$2,250",
      image: "/path-to-house3-image.jpg",
      featured: true,
      forRent: true,
    },
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-teal-100 px-2 py-1 rounded-full text-teal-500 text-sm inline-block mb-2">
            Featured
          </span>
          <br />
          Recommended <span className="text-yellow-500">properties</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Donec
          adipiscing tristique risus nec feugiat. Vitae congue eu consequat ac.
        </p>
        <div className="inline-flex mb-8">
          <button className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-md mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg
              className="inline w-5 h-5 mr-1 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 6H21M8 6H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V6H8zM16 10v4m-4-4v4"
              />
            </svg>
            Rent
          </button>
          <button className="px-6 py-3 bg-teal-100 text-teal-500 font-medium rounded-lg shadow-md hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg
              className="inline w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h1M12 4h1m-6 16h1m11-1h1m4-14v8a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h11a2 2 0 012 2v1"
              />
            </svg>
            Buy
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={property.image}
                alt={`Property ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  {property.featured && (
                    <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  {property.forRent && (
                    <span className="bg-gray-300 text-gray-700 text-xs font-bold px-2 py-1 rounded-full">
                      For Rent
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-teal-500">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProperties;

