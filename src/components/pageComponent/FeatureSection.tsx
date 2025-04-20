export function FeatureSections() {
    const features = [
      {
        id: "pay-credit",
        icon: '👥',
        title: 'Pay on Credit',
        description: 'Book your dream home with minimal down payment'
      },
      {
        id: "housing-premium",
        icon: '💎',
        title: 'Housing Premium',
        description: 'Exclusive access to premium listings & pricing benefits'
      },
      {
        id: "home-loans",
        icon: '🏠',
        title: 'Home Loans',
        description: 'Get pre-approved instantly & find your perfect home'
      },
      {
        id: "housing-protect",
        icon: '🔄',
        title: 'Housing Protect',
        description: 'Safeguard your home buying journey with comprehensive coverage'
      }
    ];
  
    return (
      <section className="py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 text-2xl">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  