import Image from 'next/image';

export function ProminentProjects() {
  const dummyImage = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80";

  return (
    <section className="py-6 px-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Prominent projects to explore</h2>
        <p className="text-sm text-gray-500">Most loved by users in the last 30 days</p>
      </div>

      <div className="flex overflow-x-auto pb-4 space-x-4">
        <div className="min-w-[350px] bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-40">
            <Image
              src={dummyImage}
              alt="Amenities Driven Utility"
              fill
              sizes="350px"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Andheri Green Utility</h3>
                <p className="text-sm text-gray-500">3 BHK Apartments</p>
                <p className="text-xs text-gray-400">Andheri East, Mumbai</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹65.5L - 85.5L</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HighlightedProjects() {
  const dummyImage1 = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80";
  const dummyImage2 = "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80";

  return (
    <section className="py-6 px-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Top highlighted projects</h2>
        <p className="text-sm text-gray-500">Trending on search right now</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src={dummyImage1}
              alt="Golden Residences"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Golden Residences</h3>
                <p className="text-sm text-gray-500">3-4 BHK Apartments</p>
                <p className="text-xs text-gray-400">Powai, Mumbai</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹95.2L - 1.92Cr</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src={dummyImage2}
              alt="Lake Gardens"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Lake Gardens</h3>
                <p className="text-sm text-gray-500">2-3 BHK Apartments</p>
                <p className="text-xs text-gray-400">Goregaon, Mumbai</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹68.4L - 92.8L</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
