const steps = [
  {
    number: "01",
    title: "Create Your Couple Profile",
    description: "Sign up together and build your profile in minutes. Share your interests, lifestyle preferences, values, and what you're looking for in other couples. Our verification process ensures a safe, authentic community.",
    icon: "👫",
  },
  {
    number: "02",
    title: "Filter & Discover",
    description: "Take control with powerful filtering tools. Search by location, lifestyle preferences, interests, fantasies, and more. Discover couples who match exactly what you're seeking - you decide who you see and connect with.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Plan & Collaborate",
    description: "Use our intuitive planning tools to organize tours, coordinate events, and manage activities together. Collaborate seamlessly with other couples and keep everything organized in one place.",
    icon: "📋",
  },
  {
    number: "04",
    title: "Build Lasting Connections",
    description: "Attend exclusive events, embark on group adventures, and build meaningful friendships. Share your experiences, create unforgettable memories, and grow your social circle with like-minded couples.",
    icon: "✨",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-800 dark:via-purple-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Getting started is simple and straightforward. Join thousands of couples who've already begun their journey of meaningful connections and unforgettable adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transform translate-x-4 -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

