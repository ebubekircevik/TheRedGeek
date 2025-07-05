export default function NewsletterSignup() {
  return (
    <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Stay Updated</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Subscribe to our newsletter to stay informed about our latest technology
        articles.
      </p>
      <div className="flex max-w-md mx-auto gap-3">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
}
