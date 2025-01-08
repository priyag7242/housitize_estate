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
    speed: 500,
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
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:mt-10 sm:mb-10">
        <div className="text-center mb-12">
          <p className="text-xl mb-8 text-gray-600">
            Join thousands of satisfied users who have found their perfect
            properties with AI.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Are Saying
          </h2>
        </div>

        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <div className="bg-white shadow-md p-6 h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 mr-4 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </div>
                <div className="flex items-center mt-4">
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
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
