const Community = () => {
  return (
    <div className="bg-gray-50 py-10 flex flex-col items-center">

<div className="inline-block px-4 py-1 mb-6 border border-gray-300 rounded-full">
            <span className="text-sm font-medium text-gray-500 uppercase">COMMUNITY</span>
          </div>
      {/* Title */}
      <h1 className="text-3xl lg:text-5xl font-bold text-center mb-10">
        Be a part of the{" "}
        <span className="text-orange-600">Global AI Builders Community</span>
      </h1>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 px-6 lg:px-0">
        {/* Left Section - Image and Description */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Community"
            className="rounded-xl shadow-lg mb-4"
          />
          <p className="text-lg text-gray-700 text-center lg:text-left">
            India’s Biggest <span className="text-orange-600">GenAI</span> Community
          </p>
        </div>

        {/* Right Section - Grid Layout */}
        <div className="grid grid-cols-1 gap-6">
          {/* Alumni Network */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Strong alumni network</h2>
            <div className="flex flex-wrap gap-4 items-center">
              {["citi", "microsoft", "walmart", "google", "meta", "amazon", "spotify"].map(
                (company, index) => (
                  <img
                    key={index}
                    src={`https://via.placeholder.com/40?text=${company}`}
                    alt={company}
                    className="w-10 h-10"
                  />
                )
              )}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Students Mentored */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold">30,000+</h3>
              <p className="text-gray-600">Students mentored</p>
              <div className="flex items-center justify-center mt-2 space-x-2">
                {[...Array(3)].map((_, index) => (
                  <img
                    key={index}
                    src="https://via.placeholder.com/30"
                    alt="avatar"
                    className="rounded-full w-8 h-8"
                  />
                ))}
                <span className="text-gray-500">+1k</span>
              </div>
            </div>
            {/* Social Media Views */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold">200mn+</h3>
              <p className="text-gray-600">Views across Social Media</p>
              <div className="flex items-center justify-center gap-4 mt-2">
                <span className="text-red-500">YouTube</span>
                <span className="text-pink-500">Instagram</span>
              </div>
            </div>
          </div>

          {/* Global Community */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold">Global Community</h4>
            <div className="flex gap-2 justify-center mt-4">
              {["🇺🇸", "🇮🇳", "🇨🇦", "🇬🇧", "🇩🇪"].map((flag, index) => (
                <span key={index} className="text-2xl">{flag}</span>
              ))}
            </div>
          </div>

          {/* Student Startups */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold">Top Student Startups</h4>
            <div className="flex flex-col items-center mt-2">
              <a href="https://buzzli.in" className="text-blue-600 underline">
                BuzzLi.in
              </a>
              <a href="https://whatanaiidea.com" className="text-blue-600 underline mt-1">
                whatanaiidea.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
