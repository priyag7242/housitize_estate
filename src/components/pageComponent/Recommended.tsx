import { Button } from '@/components/ui/button';

export function SearchFilter() {
  return (
    <section className="py-4 px-6 bg-purple-50 mb-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search location, project or builder"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white">
            <option value="">Property Type</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4+ BHK</option>
          </select>
        </div>

        <div className="w-full md:w-1/4">
          <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white">
            <option value="">Budget</option>
            <option value="under50">Under ₹50L</option>
            <option value="50to1cr">₹50L - ₹1Cr</option>
            <option value="1to2cr">₹1Cr - ₹2Cr</option>
            <option value="above2cr">Above ₹2Cr</option>
          </select>
        </div>

        <div className="w-full md:w-auto">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}

export function RecommendedSellers() {
  const sellers = [
    {
      name: "Star Realtech Properties",
      logo: "🏢",
      rating: "4.8",
      properties: "57",
      clients: "120+"
    },
    {
      name: "PQR Builders",
      logo: "🏗️",
      rating: "4.6",
      properties: "26",
      clients: "80+"
    },
    {
      name: "Smart Property",
      logo: "🏠",
      rating: "4.9",
      properties: "32",
      clients: "95+"
    }
  ];

  return (
    <section className="py-6 px-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Recommended sellers</h2>
        <p className="text-sm text-gray-500">Top builders and agents</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sellers.map((seller) => (
          <div key={seller.name} className="border rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-xl mr-3">
                {seller.logo}
              </div>
              <div>
                <h3 className="font-semibold text-sm">{seller.name}</h3>
                <div className="flex items-center text-xs">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-gray-600">{seller.rating}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <div>
                <p>{seller.properties} Properties Listed</p>
                <p>{seller.clients} Clients Serviced</p>
              </div>
              <div>
                <Button variant="outline" size="sm" className="text-xs border-purple-600 text-purple-600">
                  View All
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
