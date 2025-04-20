import Image from 'next/image';

export function Featured() {
  const developers = [
    {
      name: "Tiger Realty",
      logo: "👑",
      rating: "4.7",
      projects: "9",
      years: "12",
      completion: "100%"
    },
    {
      name: "Deluxe Builders and Co.",
      logo: "🏢",
      rating: "4.5",
      projects: "16",
      years: "8",
      completion: "100%"
    },
    {
      name: "Kishore Builders",
      logo: "🏗️",
      rating: "4.8",
      projects: "5",
      years: "3",
      completion: "95%"
    }
  ];

  // Static demo images
  const projectImages = [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&h=200&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&h=200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&h=200&q=80"
  ];

  return (
    <section className="py-6 px-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Featured Developers</h2>
        <p className="text-sm text-gray-500">Prominent names trusted by many</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {developers.map((developer) => (
          <div key={developer.name} className="border rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md text-2xl mr-3">
                {developer.logo}
              </div>
              <div>
                <h3 className="font-semibold">{developer.name}</h3>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{developer.rating}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs mt-4">
              <div className="border rounded-md p-2">
                <p className="text-gray-500">Projects</p>
                <p className="font-semibold">{developer.projects}</p>
              </div>
              <div className="border rounded-md p-2">
                <p className="text-gray-500">Years</p>
                <p className="font-semibold">{developer.years}</p>
              </div>
              <div className="border rounded-md p-2">
                <p className="text-gray-500">Completion</p>
                <p className="font-semibold">{developer.completion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {[0, 1, 2].map((index) => (
          <div key={`project-${index}`} className="border rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-36">
              <Image
                src={projectImages[index]}
                alt={`Developer Project ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <p className="font-semibold text-sm">Serene Apartments</p>
              <p className="text-xs text-gray-500">Chembur, Mumbai</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-medium">₹98.2L - 2.4Cr</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
