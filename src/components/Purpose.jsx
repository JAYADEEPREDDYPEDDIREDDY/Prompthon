const Purpose = () => {
    return (
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-2xl mx-auto ">
          {/* Purpose Label */}
          <center> 
            <div className="inline-block px-4 py-1 mb-4 border border-gray-300 rounded-full">
             <span className="text-md font-medium text-gray-500 uppercase">Purpose</span>
            </div>
         </center>
         
  
          {/* Main Heading */}
          <h6 className="text-4xl md:text-4xl font-bold text-black mb-6">
            Why <span className="text-orange-600">Buildathon</span>?
          </h6>
  
          {/* Description Paragraphs */}
          <div className="space-y-6 text-gray-700 text-base md:text-xl font-light">
            <p>
              We’re on the brink of something extraordinary. The intersection of AI and human creativity 
              is bridging the gap between idea and execution.
            </p>
            <p>
              At <span className="text-orange-600 font-semibold">100xEngineers</span>, we’re redefining 
              what it means to be an engineer in the 21st century.
            </p>
            <p>
              We envision a world where artists, entrepreneurs, creators, and visionaries of all kinds 
              will use AI to solve problems, enrich lives, and drive humanity forward.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Purpose;
  