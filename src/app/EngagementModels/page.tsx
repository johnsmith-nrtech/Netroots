import React from 'react';

const EngagementModelsPage = () => {
  const cards = [
    {
      title: 'Dedicated Team',
      iconPath:
        'M12 3c-3.314 0-6 2.686-6 6a5.998 5.998 0 003 5.197V18a1 1 0 001 1h4a1 1 0 001-1v-3.803A5.998 5.998 0 0018 9c0-3.314-2.686-6-6-6z',
      desc: 'We stay up-to-date with the latest technology trends.',
    },
    {
      title: 'Offshore Development Centre',
      iconPath: 'M12 6v12m-9 0h9V6H3zm9 0h9V6h-9z',
      desc: 'We specialize in serving healthcare, finance, manufacturing industries.',
    },
    {
      title: 'Fixed Price Projects',
      iconPath: 'M21 7.5l-9-4.5-9 4.5m18 0v9l-9 4.5m9-13.5L12 12m0 9v-9m0 9l-9-4.5v-9',
      desc: 'Our solutions are scalable and grow with your business.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 h-96 text-white py-16 px-8 relative overflow-hidden border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <p className="inline-block border-2 border-white text-white tracking-widest px-8 py-3 rounded-lg font-semibold uppercase hover:bg-white hover:text-gray-700 transition duration-300 cursor-pointer select-none shadow-lg">
              What We Do
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Our Engagement Models
            </h2>
            <p className="max-w-xl text-gray-300 font-medium tracking-wide">
              Discover the perfect collaboration model tailored to your business needs.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-64 h-64 text-white opacity-40"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-14 py-16 px-8 text-center">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-gray-400 transition-shadow duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-900 mb-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
            </svg>
            <h3 className="font-semibold text-xl text-gray-900 mb-3">{card.title}</h3>
            <p className="text-gray-800 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-gray-200 w-4/5 mx-auto rounded" />
    </div>
  );
};

export default EngagementModelsPage;
