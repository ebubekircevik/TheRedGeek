import React from "react";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-white min-h-screen">{children}</div>;
}
