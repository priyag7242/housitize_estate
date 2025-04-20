import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function TopPicks() {
  const dummyImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=350&q=80";

  return (
    <section className="py-6 px-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Housing's top picks</h2>
          <p className="text-sm text-gray-500">A diverse set of projects to pick from</p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {/* Main featured property */}
          <div className="relative min-w-[70%] h-[300px] bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={dummyImage}
                alt="Northland Group"
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex items-center">
                <span className="bg-white/90 text-xs px-2 py-1 rounded">Northland Group</span>
              </div>
              <div className="mt-2 text-white">
                <h3 className="font-semibold">Marina Bays Estate</h3>
                <p className="text-sm">Andheri East, Mumbai</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm">₹75.5L - 1.30 Cr</span>
                </div>
              </div>
              <Button className="mt-3 bg-purple-600 hover:bg-purple-700 text-white">Contact</Button>
            </div>
          </div>

          {/* Additional featured properties */}
          {[1, 2].map((item) => (
            <div key={`property-${item}`} className="relative min-w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={dummyImage}
                  alt={`Featured Property ${item}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white">
                  <h3 className="font-semibold">Luxury Apartments</h3>
                  <p className="text-sm">Bandra, Mumbai</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm">₹85.5L - 1.40 Cr</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10">
          &lt;
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10">
          &gt;
        </button>
      </div>
    </section>
  );
}
