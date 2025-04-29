import {
    Eye,
    Send,
    Target,
    User,
    TrendingUp,
    Mic,
    Home,
    Briefcase,
  } from 'lucide-react';
  
  export default function VisionMissionValues() {
    return (
      <div className="px-6 py-10 space-y-12 bg-white container mx-auto max-w-7xl">
        {/* Vision / Mission / Core Values */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              title: 'Our Vision',
              Icon: Eye,
              text: 'To be the most exceptional real estate company empowering your dream of owning a home and a piece of the world',
            },
            {
              title: 'Our Mission',
              Icon: Send,
              text: 'We redefine your experience of what real estate value is and empower your dreams',
            },
            {
              title: 'Our Core Values',
              Icon: Target,
              text: ['Impeccable Customer Satisfaction', 'Honesty & Integrity', 'Professionalism & Expertise'],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-lg shadow-md p-6 text-center space-y-4 transform transition duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="flex justify-center items-center">
                <div className='w-16 h-16 bg-yellow-600 rounded-full flex justify-center items-center'>
                <item.Icon className="w-8 h-8 text-white " />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {Array.isArray(item.text) ? (
                <ul className="space-y-1 text text-gray-700">
                  {item.text.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="text text-gray-700">{item.text}</p>
              )}
            </div>
          ))}
        </div>
  
        {/* Value Proposition Heading */}
        <div className="text-center py-3">
          <h2 className="text-2xl font-semibold text-yellow-600 relative inline-block after:content-[''] after:block after:w-1/2 after:h-1 after:bg-yellow-600 after:mx-auto after:mt-1">
            OUR VALUE PROPOSITION
          </h2>
        </div>
  
        {/* Value Proposition Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {[
            { label: 'Trust & Integrity', Icon: User },
            { label: 'Return on Investment (ROI)', Icon: TrendingUp },
            { label: 'Affordability', Icon: Mic },
            { label: 'Luxury Living', Icon: Home },
            { label: 'Land Banking', Icon: Briefcase },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white shadow-lg rounded-xl p-4 py-8 hover:shadow-lg transform transition duration-300 hover:scale-105"
            >
              <item.Icon className="w-6 h-6 text-yellow-600" />
              <span className="text-pretty font-medium  text-gray-800">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  