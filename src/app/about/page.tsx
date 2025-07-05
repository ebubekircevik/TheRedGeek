import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Image
            src="/icon.svg"
            alt="TheRedGeek Logo"
            width={80}
            height={80}
            className="rounded-full bg-gray-100 p-2"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold text-white-900 mb-2">
          About <span className="text-red-700">TheRedGeek</span>
        </h1>
        <p className="text-lg text-white-600 max-w-2xl mx-auto">
          Inspiring developers and tech enthusiasts to build, learn, and
          innovate.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-white-900">Our Mission</h2>
        <p className="text-white-700 leading-relaxed mb-6">
          TheRedGeek is dedicated to empowering the next generation of
          developers and creators. We believe in the power of open knowledge,
          hands-on learning, and a supportive community. Our mission is to make
          technology accessible, practical, and inspiring for everyone.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white-900">Our Vision</h2>
        <p className="text-white-700 leading-relaxed">
          To be a trusted source for modern web development, programming, and
          digital innovation—helping you stay ahead in a rapidly changing tech
          world.
        </p>
      </section>

      {/* Story / Who We Are */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-white-900">Our Story</h2>
        <p className="text-white-700 leading-relaxed mb-6">
          Founded by passionate engineers and creators, TheRedGeek started as a
          small blog and quickly grew into a vibrant community. We share
          in-depth tutorials, real-world case studies, and honest insights from
          our own journey in tech. Whether you&apos;re a beginner or a seasoned
          developer, you&apos;ll find practical guides, inspiration, and a place
          to connect.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white-900">
              What We Cover
            </h3>
            <ul className="text-white-700 space-y-2">
              <li>• Modern JavaScript & TypeScript</li>
              <li>• React, Next.js, and frontend frameworks</li>
              <li>• Backend, APIs, and databases</li>
              <li>• UI/UX, accessibility, and design systems</li>
              <li>• DevOps, cloud, and deployment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white-900">
              Who We Help
            </h3>
            <ul className="text-white-700 space-y-2">
              <li>• Developers & engineers</li>
              <li>• Students & lifelong learners</li>
              <li>• Tech founders & product teams</li>
              <li>• Anyone passionate about building with code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-white-900">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Curiosity
            </h3>
            <p className="text-gray-600">
              We believe in continuous learning and exploring new ideas.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Community
            </h3>
            <p className="text-gray-600">
              We foster a welcoming, inclusive, and collaborative environment.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Quality
            </h3>
            <p className="text-gray-600">
              We strive for excellence in every article, guide, and resource we
              share.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-white-900">
          Let&apos;s Connect
        </h2>
        <p className="text-white-700 mb-6">
          Have a question, want to collaborate, or just say hi? Reach out
          anytime!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/ebubekircevik/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:ebubekircevikemail@gmail.com"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Send Email
          </a>
        </div>
      </section>
    </main>
  );
}
