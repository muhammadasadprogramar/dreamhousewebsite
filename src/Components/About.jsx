import React from 'react'

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About Our Center
        </h1>
        <p className="text-sm text-gray-600 mb-12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod aliqua.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://media.istockphoto.com/id/540582578/photo/dramatic-storm-clouds-over-residential-neighborhood-colorado-usa.webp?a=1&b=1&s=612x612&w=0&k=20&c=KZqszQw-lJfZHiEv7ycXwNBrFM55Is0NwS2N66k6dks="
              alt="About Us Image"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              className="bg-green-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-gray-800 hover:text-white"
            >
              Visit More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About