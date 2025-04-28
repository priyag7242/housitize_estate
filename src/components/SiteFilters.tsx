// import { X } from "lucide-react"
// import { useRef, useState } from "react"

// interface LocalityTagProps {
//   name: string;
//   onRemove: (name: string) => void;
// }

// const LocalityTag: React.FC<LocalityTagProps> = ({ name, onRemove }) => (
//   <button 
//     className="locality-tag flex items-center bg-white/10 backdrop-blur-sm 
//                rounded-full px-3 py-1 text-grey-900 text-sm hover:bg-white/20 
//                transition-colors"
//     onClick={() => onRemove(name)}
//     aria-label={`Remove ${name}`}
//   >
//     {name}
//     <X className="h-4 w-4 ml-1" />
//   </button>
// )

// export default function SiteFilters() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const localities = ["Bhopal", "Delhi", "Indore", "Mumbai", "Pune", "Chennai", "Kolkata", "Jaipur", "Ahmedabad", "Lucknow"];

//   const handleRemoveLocality = (locality: string) => {

//     console.log(`Removing ${locality}`);
//   };

//   const handleScrollRight = () => {
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current;
//       const itemWidth = container.firstElementChild?.clientWidth || 0;
//       const gap = 8; // 2rem = 8px
//       const scrollAmount = (itemWidth + gap) * 4;
      
//       // Calculate max scroll position
//       const maxScroll = container.scrollWidth - container.clientWidth;
      
//       // Calculate next scroll position
//       const nextPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
      
//       // If we're at the end, scroll back to start
//       if (scrollPosition >= maxScroll) {
//         container.scrollTo({ left: 0, behavior: 'smooth' });
//         setScrollPosition(0);
//       } else {
//         container.scrollTo({ left: nextPosition, behavior: 'smooth' });
//         setScrollPosition(nextPosition);
//       }
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto">
//     <div className="mt-6 flex items-center gap-3 ">
//       <div className="flex items-center text-gray-800">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-map-pin mr-1"
//           aria-hidden="true"
//         >
//           <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//           <circle cx="12" cy="10" r="3" />
//         </svg>
//         Popular Localities
//       </div>

//       <div 
//         ref={scrollContainerRef}
//         className="flex gap-2 overflow-hidden w-[400px] scroll-smooth"
//         style={{
//           scrollBehavior: 'smooth',
//           WebkitOverflowScrolling: 'touch',
//         }}
//       >
//         {localities.map((locality) => (
//           <LocalityTag
//             key={locality}
//             name={locality}
//             onRemove={handleRemoveLocality}
//           />
//         ))}
//       </div>

//       <button 
//         className="text-grey-900 bg-white/10 rounded-full p-1 hover:bg-white/20 
//                    transition-colors focus:outline-none focus:ring-2 
//                    focus:ring-white/50" 
//         onClick={handleScrollRight}
//         aria-label="Scroll right"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-chevron-right"
//           aria-hidden="true"
//         >
//           <path d="m9 18 6-6-6-6" />
//         </svg>
//       </button>
//     </div>
//     </div>
//   )
// }

import { CableCar, CableIcon, ChevronLeftCircle, ChevronRightCircle, HotelIcon, MountainSnow, RocketIcon, School, StarIcon, TentTree, Tractor, TreePalm, WavesLadder } from "lucide-react";
import { useEffect, useRef, useState } from "react";


interface Category {
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
    { name: "Rooms", icon: <HotelIcon fontSize="medium" /> },
    { name: "Icons", icon: <StarIcon fontSize="medium" /> },
    { name: "Cabins", icon: <CableIcon fontSize="medium" /> },
    { name: "Countryside", icon: <TreePalm fontSize="medium" /> },
    { name: "Ski-in/out", icon: <MountainSnow fontSize="medium" /> },
    { name: "Off-the-grid", icon: <School fontSize="medium" /> },
    { name: "Amazing pools", icon: <WavesLadder fontSize="medium" /> },
    { name: "Farms", icon: <Tractor fontSize="medium" /> },
    { name: "Amazing views", icon: <CableCar fontSize="medium" /> },
    { name: "Treehouses", icon: <TentTree fontSize="medium" /> },
    { name: "OMG!", icon: <RocketIcon fontSize="medium" /> },
];

export default function SiteFilters() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Rooms");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mt-6 flex items-center gap-4">
        
        {/* Left Arrow */}
        <button
          onClick={handleScrollLeft}
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!canScrollLeft}
        >
          <ChevronLeftCircle />
        </button>

        {/* Categories */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto w-full scroll-smooth no-scrollbar"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className="flex flex-col items-center text-gray-600 hover:text-black transition relative min-w-[60px]"
            >
              <div className="text-2xl mb-1">{category.icon}</div>
              <span className="text-xs">{category.name}</span>
              {selectedCategory === category.name && (
                <div className="absolute bottom-[-8px] h-[2px] w-6 bg-black rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleScrollRight}
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!canScrollRight}
        >
          <ChevronRightCircle />
        </button>

        {/* Fees Text */}
        <div className="text-sm text-gray-500 hidden md:block">
          Prices include all fees
        </div>
      </div>
    </div>
  );
}

