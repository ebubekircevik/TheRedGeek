import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The Red Geek</h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Technology, Programming & Innovation
          </p>
          <p className="text-lg mb-10 text-red-200 max-w-2xl mx-auto">
            Discover the latest insights in software development, web
            technologies, and digital innovation. From beginner tutorials to
            advanced concepts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blogs"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Explore Articles
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Explore Our Topics
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Programming
              </h3>
              <p className="text-gray-600 mb-4">
                Learn modern programming languages, frameworks, and best
                practices.
              </p>
              <Link
                href="/blogs"
                className="text-red-600 font-medium hover:text-red-700"
              >
                Read Articles →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Frontend, backend, and full-stack development tutorials and
                guides.
              </p>
              <Link
                href="/blogs"
                className="text-red-600 font-medium hover:text-red-700"
              >
                Read Articles →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600 mb-4">
                Latest trends in technology, AI, and digital transformation.
              </p>
              <Link
                href="/blogs"
                className="text-red-600 font-medium hover:text-red-700"
              >
                Read Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Why Choose The Red Geek?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Published Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Content Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-red-100">
            Join thousands of developers who trust The Red Geek for their
            learning journey.
          </p>
          <Link
            href="/blogs"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-block"
          >
            Start Reading Now
          </Link>
        </div>
      </section>
    </main>
  );
}
