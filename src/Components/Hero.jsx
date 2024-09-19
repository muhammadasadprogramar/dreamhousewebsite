import React from 'react'

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] md:h-[calc(100vh-64px)] flex items-center"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1713801218/photo/ghost-in-the-living-room-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=RpCi-RFFcvwmoXq4xrywhRy_n351PtBb5KF7X_yQdEs=')"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-green-300 mb-4"
          >
            House Booking
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-x-4">
            <button
              className="bg-green-300 text-gray-900 px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-white hover:text-gray-900 font-bold hover:shadow-white"
            >
              Book
            </button>
            <button
              className="bg-green-300 text-gray-900 px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-white hover:text-gray-900 font-bold hover:shadow-white"
            >
              Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero