import { X } from "lucide-react"
import { useRef, useState } from "react"

interface LocalityTagProps {
  name: string;
  onRemove: (name: string) => void;
}

const LocalityTag: React.FC<LocalityTagProps> = ({ name, onRemove }) => (
  <button 
    className="locality-tag flex items-center bg-white/10 backdrop-blur-sm 
               rounded-full px-3 py-1 text-white text-sm hover:bg-white/20 
               transition-colors"
    onClick={() => onRemove(name)}
    aria-label={`Remove ${name}`}
  >
    {name}
    <X className="h-4 w-4 ml-1" />
  </button>
)

export default function PopularLocalities() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const localities = ["Bhopal", "Delhi", "Indore", "Mumbai", "Pune", "Chennai", "Kolkata", "Jaipur", "Ahmedabad", "Lucknow"];

  const handleRemoveLocality = (locality: string) => {
    // Handle removing locality
    console.log(`Removing ${locality}`);
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.firstElementChild?.clientWidth || 0;
      const gap = 8; // 2rem = 8px
      const scrollAmount = (itemWidth + gap) * 4;
      
      // Calculate max scroll position
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Calculate next scroll position
      const nextPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
      
      // If we're at the end, scroll back to start
      if (scrollPosition >= maxScroll) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        setScrollPosition(0);
      } else {
        container.scrollTo({ left: nextPosition, behavior: 'smooth' });
        setScrollPosition(nextPosition);
      }
    }
  };

  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-map-pin mr-1"
          aria-hidden="true"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Popular Localities
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-2 overflow-hidden w-[400px] scroll-smooth"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {localities.map((locality) => (
          <LocalityTag
            key={locality}
            name={locality}
            onRemove={handleRemoveLocality}
          />
        ))}
      </div>

      <button 
        className="text-white bg-white/10 rounded-full p-1 hover:bg-white/20 
                   transition-colors focus:outline-none focus:ring-2 
                   focus:ring-white/50" 
        onClick={handleScrollRight}
        aria-label="Scroll right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}

