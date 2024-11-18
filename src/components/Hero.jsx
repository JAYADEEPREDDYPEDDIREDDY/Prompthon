const Hero = () => {
    return (
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-6">
        {/* Heading Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h6 className="text-sm md:text-lg font-semibold text-gray-500">Join India’s Biggest</h6>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-orange-600">GENERATIVE AI</h1>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-black">BUILDATHON</h2>
          <p className="text-gray-600 mt-4 text-base md:text-xl lg:text-2xl font-thin px-4 md:px-16 lg:px-[20%] text-center pt-5">
            Where leading AI companies, founders, and engineers unite to create innovative AI solutions.
          </p>
        </div>
  
        {/* Register Section */}
        <div className="text-center mt-8">
          <p className="text-gray-700 text-sm md:text-lg">
            Starts from <span className="text-lg md:text-xl font-bold text-orange-600">22nd November</span>
          </p>
          <button className="bg-black text-white px-4 md:px-6 py-2 md:py-3 mt-4 rounded-lg font-medium hover:bg-orange-700">
            Register Now →
          </button>
        </div>
  
        {/* Partners Section */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm md:text-base font-medium">Buildathon Partners</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4">
            {/* Replace with actual logos */}
            <img src="/path-to-buildship-logo.png" alt="BuildShip" className="h-6 md:h-8" />
            <img src="/path-to-sentient-logo.png" alt="Sentient" className="h-6 md:h-8" />
            <img src="/path-to-ogilvy-logo.png" alt="Ogilvy" className="h-6 md:h-8" />
            <img src="/path-to-nexus-logo.png" alt="Nexus" className="h-6 md:h-8" />
          </div>
        </div>
  
        {/* Chat Button */}
        <button className="fixed bottom-4 right-4 bg-orange-600 text-white px-3 md:px-4 py-2 rounded-full shadow-lg hover:bg-orange-700">
          Chat With Us
        </button>
      </section>
    );
  };
  
  export default Hero;
  