const Eligible = () => {
    return (
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Projects Label */}
          <div className="inline-block px-4 py-1 mb-6 border border-gray-300 rounded-full">
            <span className="text-sm font-medium text-gray-500 uppercase">ELIGIBILITY CRITERIA</span>
          </div>
  
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          Who can <span className="text-orange-600">participate</span>  ?
          </h2>
  
          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="/path-to-llms-image.jpg"
                alt="LLMs"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">LLMs</h3>
                <p className="text-gray-700 text-base font-light">
                  Creating specialized applications that leverage large language models to solve specific problems.
                </p>
                <a
                  href="#"
                  className="text-orange-600 font-medium text-sm mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="/path-to-filmmaking-image.jpg"
                alt="AI Filmmaking"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  AI Filmmaking
                </h3>
                <p className="text-gray-700 text-base font-light">
                  Using GenAI tools to create original films, animations, or video content.
                </p>
                <a
                  href="#"
                  className="text-orange-600 font-medium text-sm mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="/path-to-agents-image.jpg"
                alt="Agents"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Agents</h3>
                <p className="text-gray-700 text-base font-light">
                  Building autonomous AI assistants that can perform sequences of actions to complete tasks.
                </p>
                <a
                  href="#"
                  className="text-orange-600 font-medium text-sm mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="/path-to-agents-image.jpg"
                alt="Agents"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Agents</h3>
                <p className="text-gray-700 text-base font-light">
                  Building autonomous AI assistants that can perform sequences of actions to complete tasks.
                </p>
                <a
                  href="#"
                  className="text-orange-600 font-medium text-sm mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="/path-to-agents-image.jpg"
                alt="Agents"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Agents</h3>
                <p className="text-gray-700 text-base font-light">
                  Building autonomous AI assistants that can perform sequences of actions to complete tasks.
                </p>
                <a
                  href="#"
                  className="text-orange-600 font-medium text-sm mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="/path-to-agents-image.jpg"
                alt="Agents"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Agents</h3>
                <p className="text-gray-700 text-base font-light">
                  Building autonomous AI assistants that can perform sequences of actions to complete tasks.
                </p>
                <a
                  href="#"
                  className="text-orange-600 font-medium text-sm mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>
    );
  };
  
  export default Eligible;
  