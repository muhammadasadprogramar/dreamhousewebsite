import React from 'react'

const Cards = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Houses
        </h1>
        <p className="text-sm text-gray-600 mb-12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {/* Card 1 */}
          <div
            className="bg-white p-[14px] pb-[20px] rounded-3xl border-2 border-[#dadada] shadow-md transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/1300135335/photo/luxurious-bedroom-interior-at-nigh-with-messy-bed-leather-armchairs-closet-and-garden-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=wiFwUBuvn65rsXK2smQnWD-hk4CQFCdRWs6G-UnuOro="
              alt="House 1"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">New House</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="bg-green-200 text-gray-800 px-4 py-2 rounded-lg font-bold transition duration-300 hover:bg-gray-800 hover:text-white shadow-md hover:shadow-black"
            >
              Learn More
            </button>
          </div>
          {/* Card 2 */}
          <div
            className="bg-white p-[14px] pb-[20px] rounded-3xl border-2 border-[#dadada] shadow-md transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/1483031614/photo/modern-interior-design-of-living-room-black-sofa-and-empty-mockup-wall-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ohYw9BMs6WOt0ajHLwP2Zn401FR5vwi-96gDr4qiwjE="
              alt="House 2"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">New House</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="bg-green-200 text-gray-800 px-4 py-2 rounded-lg font-bold transition duration-300 hover:bg-gray-800 hover:text-white shadow-md hover:shadow-black"
            >
              Learn More
            </button>
          </div>
          {/* Card 3 */}
          <div
            className="bg-white p-[14px] pb-[20px] rounded-3xl border-2 border-[#dadada] shadow-md transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/1223016829/photo/beautiful-luxury-home-exterior-at-sunset-features-three-car-garage-and-manicured-lawn.webp?a=1&b=1&s=612x612&w=0&k=20&c=PdWP2eR-STOD0I-o1rF86b8pgCK-Z-D2NPCwJTPAm9k="
              alt="House 3"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">New House</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="bg-green-200 text-gray-800 px-4 py-2 rounded-lg font-bold transition duration-300 hover:bg-gray-800 hover:text-white shadow-md hover:shadow-black"
            >
              Learn More
            </button>
          </div>
          {/* Card 4 */}
          <div
            className="bg-white p-[14px] pb-[20px] rounded-3xl border-2 border-[#dadada] shadow-md transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/2155879397/photo/house-in-a-charming-neighborhood-with-stunning-sidewalk-landscaping.webp?a=1&b=1&s=612x612&w=0&k=20&c=LlqEpFyrJBmSZ8v3CshnYJo9X00p8Y7wGv3mIDNqpZ4="
              alt="House 4"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">New House</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="bg-green-200 text-gray-800 px-4 py-2 rounded-lg font-bold transition duration-300 hover:bg-gray-800 hover:text-white shadow-md hover:shadow-black"
            >
              Learn More
            </button>
          </div>
          {/* Card 5 */}
          <div
            className="bg-white p-[14px] pb-[20px] rounded-3xl border-2 border-[#dadada] shadow-md transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/2149088667/photo/3d-rendering-of-modern-house-in-luxurious-style-in-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=J98EHiX_qM6fy_yftXedIrwlHCRBcx_gJT8HlEsFyLQ="
              alt="House 5"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">New House</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="bg-green-200 text-gray-800 px-4 py-2 rounded-lg font-bold transition duration-300 hover:bg-gray-800 hover:text-white shadow-md hover:shadow-black"
            >
              Learn More
            </button>
          </div>
          {/* Card 6 */}
          <div
            className="bg-white p-[14px] pb-[20px] rounded-3xl border-2 border-[#dadada] shadow-md transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=F5A3eF6myaJpITu5ABnGqNjacGWYskuxeZviU-KpxPE="
              alt="House 6"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">New House</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="bg-green-200 text-gray-800 px-4 py-2 rounded-lg font-bold transition duration-300 hover:bg-gray-800 hover:text-white shadow-md hover:shadow-black"
            >
              Learn More
            </button>
          </div>
          {/* Card 7 */}
          <div
            className="bg-white p-[14px] pb-[20px] rounded-3xl border-2 border-[#dadada] shadow-md transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/2155879397/photo/house-in-a-charming-neighborhood-with-stunning-sidewalk-landscaping.webp?a=1&b=1&s=612x612&w=0&k=20&c=LlqEpFyrJBmSZ8v3CshnYJo9X00p8Y7wGv3mIDNqpZ4="
              alt="House 7"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">New House</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="bg-green-200 text-gray-800 px-4 py-2 rounded-lg font-bold transition duration-300 hover:bg-gray-800 hover:text-white shadow-md hover:shadow-black"
            >
              Learn More
            </button>
          </div>
          {/* Card 8 */}
          <div
            className="bg-white p-[14px] pb-[20px] rounded-3xl border-2 border-[#dadada] shadow-md transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/2093686198/photo/digitally-staged-open-concept-living-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=EtS8f6Ud6MdphSv2_lkZxz8sPZ2iVrcBqbKeVrir-Ag="
              alt="House 8"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">New House</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="bg-green-200 text-gray-800 px-4 py-2 rounded-lg font-bold transition duration-300 hover:bg-gray-800 hover:text-white shadow-md hover:shadow-black"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards