'use client';

import Image from 'next/image';
import Link from 'next/link';

interface HeroItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const heroItems: HeroItem[] = [
  {
    title: 'Self-Sustainable Home',
    description: 'Instant access to zero brokerage properties',
    icon: 'https://cdn-icons-png.flaticon.com/128/10263/10263049.png',
    link: '/self-sustainable-home',
  },
  {
    title: 'Construction',
    description: 'Instant access to zero brokerage properties',
    icon: 'https://cdn-icons-png.flaticon.com/128/2942/2942499.png',
    link: '/construction',
  },
  {
    title: 'Interior',
    description: 'Instant access to zero brokerage properties',
    icon: 'https://cdn-icons-png.flaticon.com/128/2992/2992258.png',
    link: '/interior',
  },
  {
    title: 'Hospitality',
    description: 'Instant access to zero brokerage properties',
    icon: 'https://cdn-icons-png.flaticon.com/512/5114/5114274.png',
    link: '/hospitality',
  },
];

export default function BelowHeroItems() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hero Items
        </h2>
        <p className="text-xl md:text-2xl text-gray-600">
          Explore Property related services
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {heroItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 w-full sm:w-[300px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-red-100 w-28 h-28 flex items-center justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                
                />
              </div>

              <div className="text-center mb-3 space-y-2">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-lg text-black">{item.description}</p>
              </div>

              <Link href={item.link}>
                <button className="mt-4 bg-white text-red-700 hover:bg-red-700 hover:text-white border-red-700 border font-medium py-2 px-6 rounded-full transition-colors duration-300">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
