const features = [
  {
    title: "Advanced Filtering & Discovery",
    description: "Take complete control of your search. Filter couples by location, lifestyle preferences, interests, fantasies, and more. Discover exactly who you're looking for with powerful, user-controlled search tools that put you in the driver's seat.",
    icon: "💑",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Exclusive House Party Hosting",
    description: "Transform your space into the ultimate gathering destination. Host intimate, private parties where like-minded couples come together in an atmosphere of trust and excitement. Create themed experiences, set the perfect ambiance, and curate unforgettable evenings that spark new connections.",
    icon: "🏠",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Curated Lifestyle Events",
    description: "Dive into a world of exclusive events crafted for adventurous couples. From sophisticated dinner parties and wine tastings to weekend retreats and private gatherings, discover experiences that ignite passion and create lasting bonds with couples who share your desires.",
    icon: "🎉",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Collaborative Planning",
    description: "Work together seamlessly with our intuitive planning tools. Organize trips, coordinate events, manage RSVPs, and keep all your couple activities organized in one beautiful, easy-to-use platform.",
    icon: "📅",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Discover Experiences",
    description: "Explore a curated selection of activities perfect for couples. Find unique date ideas, group experiences, and local adventures that help you create lasting memories and deepen your connection.",
    icon: "🔍",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    title: "Privacy & Security First",
    description: "Your safety and privacy are our top priorities. All profiles are verified, communications are encrypted, and you have complete control over your information. Connect with confidence in a secure environment.",
    icon: "🔒",
    gradient: "from-teal-500 to-green-500",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A sophisticated platform designed exclusively for couples seeking deeper connections. From powerful filtering tools to exclusive event hosting, we provide everything you need to explore new dimensions of connection and create unforgettable experiences with like-minded couples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

