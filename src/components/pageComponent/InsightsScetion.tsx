import Image from 'next/image';

export function ResearchInsights() {
  const insights = [
    {
      title: "Price Trends",
      icon: "📈",
      description: "Latest real estate price trends & forecasts"
    },
    {
      title: "City Insights",
      icon: "🏙️",
      description: "Detailed market analysis of top metro cities"
    },
    {
      title: "Housing Economics",
      icon: "💰",
      description: "Understanding factors affecting property values"
    }
  ];

  return (
    <section className="py-6 px-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Research and Insights</h2>
        <p className="text-sm text-gray-500">Explore our latest research insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <div key={insight.title} className="bg-white border rounded-lg p-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-3">
                {insight.icon}
              </div>
              <h3 className="font-semibold mb-1">{insight.title}</h3>
              <p className="text-sm text-gray-500">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HighDemandProjects() {
  const dummyImage1 = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80";
  const dummyImage2 = "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80";

  const projects = [
    {
      name: "Prestige Serenity Res.",
      location: "Andheri East, Mumbai",
      price: "₹78.4L - 98.5L",
      image: dummyImage1
    },
    {
      name: "Godrej Greens Estate",
      location: "Thane, Mumbai",
      price: "₹65.5L - 1.2Cr",
      image: dummyImage2
    },
    {
      name: "L&T Grand",
      location: "Powai, Mumbai",
      price: "₹75.5L - 1.2Cr",
      image: dummyImage1
    }
  ];

  return (
    <section className="py-6 px-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">High-demand projects to invest now</h2>
        <p className="text-sm text-gray-500">Explore the hottest investment options</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-40">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{project.location}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">{project.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CuratedSolutions() {
  return (
    <section className="py-6 px-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Curated solutions</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-40 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=200&q=80"
            alt="Rent & Buy"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h3 className="text-white font-bold text-xl">Rent & Buy</h3>
          </div>
        </div>

        <div className="relative h-40 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1618090584176-7132b9911657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=200&q=80"
            alt="Home Loan"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white font-bold text-xl">Home Loan</h3>
              <p className="text-white text-sm">8.15% p.a.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
