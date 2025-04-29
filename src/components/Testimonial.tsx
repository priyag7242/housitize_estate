import React from "react";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Iron Man",
    role: "First-time Homebuyer",
    content:
      "The AI recommendations were spot-on! I found my dream home in half the time I expected.",
    rating: 5,
    image: "/assets/images/ironman.jpeg",
  },
  {
    name: "Captain America",
    role: "Property Investor",
    content:
      "This platform's AI analysis helped me identify high-potential properties I would have otherwise missed.",
    rating: 4,
    image: "/assets/images/captain-america.jpg",
  },
  {
    name: "Hulk",
    role: "Relocating Professional",
    content:
      "The virtual tours saved me so much time. I was able to narrow down my choices before even visiting the city.",
    rating: 5,
    image: "/assets/images/hulk.jpg",
  },
  {
    name: "Thor",
    role: "Real Estate Agent",
    content:
      "This AI-powered platform has revolutionized how I work. It's like having a super-smart assistant!",
    rating: 4,
    image: "/assets/images/thor.jpg",
  },
  {
    name: "Loki Odison",
    role: "Home Seller",
    content:
      "The AI-driven market analysis helped me price my home perfectly. It sold within a week!",
    rating: 3,
    image: "/assets/images/loki.jpeg",
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:mt-10 sm:mb-10">
        <div className="text-center mb-12">
          <p className="text-4xl font-bold mb-4 text-gray-600">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-2xl font-semibold text-yellow-600 mb-4">
            What Our Users Are Saying
          </h2>
        </div>

        <Slider {...settings} className="testimonial-slide">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="px-2 flex justify-center py-2">
      <div className="bg-white rounded-lg shadow-md p-6 relative text-center w-full max-w-sm mt-12">
        {/* Floating Avatar */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="pt-12">
          <p className="text-gray-700 mb-4">
            "{testimonial.content}"
            <a href="#" className="text-blue-600 hover:underline"> read more</a>
          </p>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>

          {/* Rating */}
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </section>
  );
};

export default TestimonialsCarousel;
