export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Explore New Connections?
        </h2>
        <p className="text-xl md:text-2xl text-pink-100 mb-4 max-w-2xl mx-auto leading-relaxed">
          Join thousands of verified couples already discovering deeper connections, exploring new experiences, and creating unforgettable memories together. Your adventure awaits.
        </p>
        <p className="text-lg text-pink-200 mb-10 max-w-xl mx-auto">
          Create your free profile today. Subscribe to unlock unlimited connections, messaging, and exclusive event access starting at just $9.99/month.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
            Create Free Profile
          </button>
          <a 
            href="/features"
            className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-200"
          >
            View Pricing
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Free profile creation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Setup in minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>From $9.99/month</span>
          </div>
        </div>
      </div>
    </section>
  );
}

