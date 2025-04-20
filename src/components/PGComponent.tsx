import Image from 'next/image';

export default function PGComponent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Home at First Sight</h1>

              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">Verified & Onboarded by our experts</p>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center mr-3">
                    <span className="text-white text-xs">🏠</span>
                  </div>
                  <p className="text-sm text-gray-700">Every property detail on just a click</p>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                    <span className="text-white text-xs">👥</span>
                  </div>
                  <p className="text-sm text-gray-700">Genuine & vast userbase</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute w-72 h-72 bg-yellow rounded-full -top-10 -right-10 opacity-70" />
              <div className="relative z-10 flex justify-center">
                <div className="relative w-full max-w-md">
                  <Image
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                    alt="Housing app illustration"
                    width={700}
                    height={900}
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Benefits of our PG/Co-Living</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Stress free search"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Stress free search</h3>
              <p className="text-sm text-gray-600 text-center mt-2">Real property pictures and transparent pricing</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Find your Match"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Find your Match</h3>
              <p className="text-sm text-gray-600 text-center mt-2">Lots of options to choose from (private, semi & multi-sharing)</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Bon appetit"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Bon appetit</h3>
              <p className="text-sm text-gray-600 text-center mt-2">In-house meal plans and affordable kitchens for what's cooking</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Your Life, Your Rules"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Your Life, Your Rules</h3>
              <p className="text-sm text-gray-600 text-center mt-2">Advance into an house rules to live like you do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold">30k+</h3>
              <p className="text-sm mt-1">Properties</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">40+</h3>
              <p className="text-sm mt-1">Cities</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">3.5 Lakh+</h3>
              <p className="text-sm mt-1">Monthly users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Our handpicked <span className="font-bold">Collections</span></h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="For Guys"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-semibold">For Guys</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="For Girls"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-semibold">For Girls</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Food Available"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-semibold">Food Available</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Private Room"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-semibold">Private Room</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Top Neighbourhood PGs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Boys PG"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white mr-2">
                      <span>R</span>
                    </div>
                    <span className="font-medium">Boys PG</span>
                  </div>
                  <span className="font-semibold">₹5,000</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
                    </svg>
                    Triple Sharing, Double Sharing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">News & Articles</h2>
          <p className="text-gray-600 mb-8">Read what's happening in Real Estate</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Bhopal Metro"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Bhopal Metro: Cost, route, stations list</h3>
                <p className="text-sm text-gray-600 mb-3">Bhopal Metro, a mass rapid transit system, is expected to be operational by September 2023.</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Harini Balasubramanian</span>
                  <span>Jun 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Stamp duty"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Stamp duty in India's Tier-2, Tier-3 cities in 2024</h3>
                <p className="text-sm text-gray-600 mb-3">Find out stamp duty, registration charges on property purchases in India's 20 major Tier-2 cities.</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Anuradha Ramanathan</span>
                  <span>Jun 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="City Museum"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">MP's first city Museum to be established in Bhopal</h3>
                <p className="text-sm text-gray-600 mb-3">The first city museum of the state will be built in the left wing of Moti Mahal in Bhopal.</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Anuradha Ramanathan</span>
                  <span>May 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow">
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Bhopal"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Bhopal Takes The Lead In Homebuyer Search:</h3>
                <p className="text-sm text-gray-600 mb-3">Including expanded road infrastructure and more...</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Research Desk</span>
                  <span>May 2024</span>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Testimonial"
                width={400}
                height={500}
                className="w-full h-[500px] object-cover object-center"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">What our members say</h2>
              <p className="text-gray-600 mb-8">These are genuine feedbacks from our member community</p>

              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white mr-3">
                    <span>M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mudhit Khanrawala</h4>
                    <p className="text-sm text-gray-600">Co-Living resident since last year</p>
                  </div>
                </div>

                <blockquote className="text-gray-700">
                  "I am one of those who likes a lot of variety in my meals. Being away from my hometown, I was really worried about this while searching for places to stay. Thankfully, on Housing.com I found out in advance the kind of meals being served in many properties. Now I am staying in a place that suits my taste."
                </blockquote>

                <div className="flex mt-6">
                  <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
