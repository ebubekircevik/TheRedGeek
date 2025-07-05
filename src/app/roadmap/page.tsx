import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap - TheRedGeek",
  description:
    "Discover the upcoming features and development plans for TheRedGeek tech blog platform.",
  keywords: ["roadmap", "features", "development", "plans", "upcoming"],
};

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned" | "upcoming";
  priority: "high" | "medium" | "low";
  estimatedDate?: string;
  features: string[];
}

const roadmapItems: RoadmapItem[] = [
  {
    id: "0",
    title: "AI-Powered Blog Generation",
    description:
      "Automatic blog post creation and suggestion system powered by artificial intelligence.",
    status: "in-progress",
    priority: "high",
    estimatedDate: "Q3 2025",
    features: [
      "Automatic blog post generation based on topic",
      "SEO-friendly content creation",
      "Personalized suggestions for users",
      "Multiple language and tone options",
      "Image and title suggestions",
      "Automatic summary and keyword extraction before publishing",
    ],
  },
  {
    id: "1",
    title: "User Authentication & Profiles",
    description: "Complete user authentication system with profile management",
    status: "upcoming",
    priority: "high",
    estimatedDate: "Q1 2025",
    features: [
      "User registration and login",
      "Social media authentication (Google, GitHub)",
      "User profile pages",
      "Profile editing and customization",
      "Password reset functionality",
      "Email verification",
    ],
  },
  {
    id: "2",
    title: "Comment System",
    description: "Interactive comment system for blog posts",
    status: "planned",
    priority: "high",
    estimatedDate: "Q2 2025",
    features: [
      "Comment creation and replies",
      "Comment moderation",
      "Rich text editor for comments",
      "Comment notifications",
      "Comment voting system",
      "Spam protection",
    ],
  },
  {
    id: "3",
    title: "Search & Filtering",
    description: "Advanced search functionality with filtering options",
    status: "planned",
    priority: "medium",
    estimatedDate: "Q2 2025",
    features: [
      "Full-text search across blog posts",
      "Search by tags and categories",
      "Advanced filtering options",
      "Search suggestions",
      "Search history",
      "Saved searches",
    ],
  },
  {
    id: "4",
    title: "Newsletter System",
    description: "Email newsletter subscription and management",
    status: "upcoming",
    priority: "medium",
    estimatedDate: "Q3 2025",
    features: [
      "Newsletter subscription",
      "Email templates",
      "Subscriber management",
      "Newsletter analytics",
      "Automated email campaigns",
      "Unsubscribe functionality",
    ],
  },
  {
    id: "5",
    title: "Dark Mode & Themes",
    description: "Multiple theme options including dark mode",
    status: "upcoming",
    priority: "medium",
    estimatedDate: "Q3 2025",
    features: [
      "Dark mode toggle",
      "Multiple color themes",
      "Theme persistence",
      "System theme detection",
      "Custom theme creation",
      "Accessibility improvements",
    ],
  },
  {
    id: "6",
    title: "Mobile App",
    description: "Native mobile application for iOS and Android",
    status: "upcoming",
    priority: "low",
    estimatedDate: "Q4 2025",
    features: [
      "Cross-platform mobile app",
      "Offline reading capability",
      "Push notifications",
      "Mobile-optimized interface",
      "App store deployment",
      "Mobile-specific features",
    ],
  },
  {
    id: "7",
    title: "Content Management System",
    description: "Advanced CMS for content creators",
    status: "upcoming",
    priority: "low",
    estimatedDate: "Q4 2025",
    features: [
      "Rich text editor",
      "Media library management",
      "Content scheduling",
      "Draft and preview system",
      "SEO optimization tools",
      "Content analytics",
    ],
  },
  {
    id: "8",
    title: "API & Developer Tools",
    description: "Public API and developer documentation",
    status: "upcoming",
    priority: "low",
    estimatedDate: "Q1 2025",
    features: [
      "RESTful API endpoints",
      "API documentation",
      "Developer portal",
      "API rate limiting",
      "Webhook support",
      "SDK libraries",
    ],
  },
];

const getStatusColor = (status: RoadmapItem["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "in-progress":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "planned":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "upcoming":
      return "bg-gray-100 text-gray-800 border-gray-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getPriorityColor = (priority: RoadmapItem["priority"]) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-orange-100 text-orange-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function RoadmapPage() {
  const groupedItems = roadmapItems.reduce(
    (acc, item) => {
      if (!acc[item.status]) {
        acc[item.status] = [];
      }
      acc[item.status].push(item);
      return acc;
    },
    {} as Record<string, RoadmapItem[]>
  );

  const statusOrder = ["completed", "in-progress", "planned", "upcoming"];
  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned",
    upcoming: "Upcoming",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Development Roadmap
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              + Discover what&apos;s coming next for TheRedGeek. We&apos;re
              constantly + working to improve your experience with new features
              and enhancements. +{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Legend */}
        <div className="mb-8 bg-white rounded-lg shadow-sm border border-red-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Status Legend
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statusOrder.map(status => (
              <div key={status} className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(status as "completed" | "in-progress" | "planned" | "upcoming")}`}
                >
                  {
                    statusLabels[
                      status as
                        | "completed"
                        | "in-progress"
                        | "planned"
                        | "upcoming"
                    ]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Items */}
        <div className="space-y-8">
          {statusOrder.map(status => {
            const items = groupedItems[status];
            if (!items || items.length === 0) return null;

            return (
              <div
                key={status}
                className="bg-white rounded-lg shadow-sm border border-red-200 overflow-hidden"
              >
                <div
                  className={`px-6 py-4 border-b ${getStatusColor(status as "completed" | "in-progress" | "planned" | "upcoming")}`}
                >
                  <h2 className="text-2xl font-bold">
                    {statusLabels[status as keyof typeof statusLabels]}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {items.map(item => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(item.priority)}`}
                          >
                            {item.priority} priority
                          </span>
                        </div>

                        <p className="text-gray-600 mb-4">{item.description}</p>

                        {item.estimatedDate && (
                          <div className="mb-4">
                            <span className="text-sm font-medium text-gray-500">
                              Estimated: {item.estimatedDate}
                            </span>
                          </div>
                        )}

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">
                            Key Features:
                          </h4>
                          <ul className="space-y-1">
                            {item.features.map((feature, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-red-500 mt-1">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have Suggestions?</h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            We&apos;d love to hear your ideas for new features or improvements.
            Your feedback helps us prioritize what matters most to our
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@theredgeek.com"
              className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Send Feedback
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
