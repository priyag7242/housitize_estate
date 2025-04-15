"use client"
import Image from 'next/image';

export default function BelowHeroItems() {
  return (
    <>
    <div className="container mt-10 mx-auto px-4 py-8">
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Hero Items
        </h2>
        <p className="text-xl md:text-2xl text-gray-600">Explore Property related services</p>
      </div>
      <div className="flex flex-nowrap overflow-x-auto gap-16 py-10">
        
      <div className="bg-black/0 rounded-3xl shadow-xl p-8 min-w-[280px] w-80 flex-shrink-0">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-red-100 w-28 h-28 flex items-center justify-center mb-4">
          <div className="text-red-500">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10263/10263049.png"
            alt="Hero Item"
            width={40}
            height={40}
            className="w-16 h-16"
          />
          </div>
        </div>
        
        <div className="space-y-2 text-center mb-3">
          <h1 className="text-xl font-bold text-black">Self-Sustainable Home</h1>
          <p className="text-lg text-black">Instant access to zero brokerage properties</p>
        </div>
        
        <button className="mt-4 bg-white text-red-700 hover:bg-red-700 hover:text-white border-red-700 border font-medium py-2 px-6 rounded-full transition-colors duration-200">
          View More
        </button>
      </div>
    </div>

    <div className="bg-white rounded-3xl shadow-xl p-8 min-w-[280px] w-80 flex-shrink-0">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-red-100 w-28 h-28 flex items-center justify-center mb-4 ">
          <div className="text-red-500">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/2942/2942499.png"
            alt="Hero Item"
            width={40}
            height={40}
            className="w-16 h-16"
            />

          </div>
        </div>
        
        <div className="space-y-2 text-center mb-3">
          <h1 className="text-xl font-bold text-black">Construction</h1>
          <p className="text-lg text-black">Instant access to zero brokerage properties</p>
        </div>
        
        <button className="mt-4 bg-white text-red-700 hover:bg-red-700 hover:text-white border-red-700 border font-medium py-2 px-6 rounded-full transition-colors duration-200">
          View More
        </button>
      </div>
    </div>

    <div className="bg-white rounded-3xl shadow-xl p-8 min-w-[280px] w-80 flex-shrink-0">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-red-100 w-28 h-28 flex items-center justify-center mb-4">
          <div className="text-red-500">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/2992/2992258.png"
            alt="Hero Item"
            width={40}
            height={40}
            className="w-16 h-16"
            />
                
          </div>
        </div>
        
        <div className="space-y-2 text-center mb-3">
          <h1 className="text-xl font-bold text-black">Interior</h1>
          <p className="text-lg text-black">Instant access to zero brokerage properties</p>
        </div>
        
        <button className="mt-4 bg-white text-red-700 hover:bg-red-700 hover:text-white border-red-700 border font-medium py-2 px-6 rounded-full transition-colors duration-200">
          View More
        </button>
      </div>
    </div>

    <div className="bg-white rounded-3xl shadow-xl p-8 min-w-[280px] w-80 flex-shrink-0">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-red-100 w-28 h-28 flex items-center justify-center mb-4">
          <div className="text-red-500">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5114/5114274.png"
            alt="Hero Item"
            width={40}
            height={40}
            className="w-16 h-16"
            />
                
          </div>
        </div>
        
        <div className="space-y-2 text-center mb-3">
          <h1 className="text-xl font-bold text-black">Hospitality</h1>
          <p className="text-lg text-black">Instant access to zero brokerage properties</p>
        </div>
        
        <button className="mt-4 bg-white text-red-700 hover:bg-red-700 hover:text-white border-red-700 border font-medium py-2 px-6 rounded-full transition-colors duration-200">
          View More
        </button>
      </div>
    </div>
      
      </div>
    </div>
    </>
  );
}