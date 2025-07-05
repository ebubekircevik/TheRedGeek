import Link from "next/link";

export default function PopularTodayPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Today&apos;s Popular Posts</h1>
        <p className="text-xl text-gray-600">
          The most read and shared articles from today
        </p>
      </div>

      <div className="text-center py-12">
        <p className="text-gray-600 mb-6">
          We&apos;re working on bringing you today&apos;s most popular posts.
        </p>
        <Link 
          href="/blogs" 
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </main>
  );
}
