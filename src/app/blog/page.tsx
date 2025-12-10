import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import {
  getAllBlogPosts,
  getAllCategories,
  getAllTags,
  getRecentPosts,
  getArchiveData,
  getPostsByCategory,
  getPostsByTag,
} from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Couple Socials",
  description:
    "Discover helpful tips, community stories, and expert advice for navigating the lifestyle community. Learn from experienced couples and our team about building meaningful connections, hosting events, and creating unforgettable experiences.",
  keywords: ["lifestyle community", "couple relationships", "community blog", "relationship advice", "couple events"],
  openGraph: {
    title: "Blog | Couple Socials",
    description:
      "Discover helpful tips, community stories, and expert advice for navigating the lifestyle community.",
    type: "website",
    siteName: "Couple Socials",
    locale: "en_US",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com"}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Couple Socials Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Couple Socials",
    description: "Discover helpful tips, community stories, and expert advice for navigating the lifestyle community.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com"}/og-image.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com"}/blog`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface BlogPageProps {
  searchParams: {
    category?: string;
    tag?: string;
    year?: string;
    month?: string;
  };
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const { category, tag, year, month } = searchParams;

  // Get all posts and filter based on search params
  const allPosts = getAllBlogPosts();
  let filteredPosts = allPosts;

  if (category) {
    filteredPosts = getPostsByCategory(category);
  } else if (tag) {
    filteredPosts = getPostsByTag(tag);
  } else if (year && month) {
    // Filter by year and month
    filteredPosts = getAllBlogPosts().filter((post) => {
      const postDate = new Date(post.date);
      const postYear = postDate.getFullYear().toString();
      const postMonth = postDate.toLocaleString("default", { month: "long" });
      return postYear === year && postMonth === month;
    });
  }

  const categories = getAllCategories();
  const tags = getAllTags();
  const recentPosts = getRecentPosts();
  const archive = getArchiveData();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

  // CollectionPage structured data for blog listing
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog | Couple Socials",
    description: "Discover helpful tips, community stories, and expert advice for navigating the lifestyle community.",
    url: `${siteUrl}/blog`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: filteredPosts.length,
      itemListElement: filteredPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          url: `${siteUrl}/blog/${post.slug}`,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: post.author,
          },
        },
      })),
    },
  };

  return (
    <>
      {/* CollectionPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full mb-6 border border-pink-200 dark:border-pink-800">
                <span className="text-2xl">📝</span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Insights & Stories
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Discover helpful tips, community stories, and expert advice for
                navigating the lifestyle community. Learn from experienced couples
                and our team about building meaningful connections, hosting events,
                and creating unforgettable experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1">
                {/* Active Filters */}
                {(category || tag || (year && month)) && (
                  <div className="mb-8 flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Filtered by:
                    </span>
                    {category && (
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-semibold">
                        {category}
                      </span>
                    )}
                    {tag && (
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                        #{tag}
                      </span>
                    )}
                    {year && month && (
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                        {month} {year}
                      </span>
                    )}
                    <Link
                      href="/blog"
                      className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                    >
                      Clear filters
                    </Link>
                  </div>
                )}

                {/* Blog Posts Grid */}
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => {
                      // Calculate read time (we'll need to get content for this)
                      // For now, estimate based on excerpt
                      const estimatedReadTime = Math.max(
                        1,
                        Math.ceil(post.excerpt.split(/\s+/).length / 200)
                      );

                      // Use relative path for next/image, absolute URL for metadata
                      const imageUrl = post.imageUrl
                        ? (post.imageUrl.startsWith('http') ? post.imageUrl : post.imageUrl)
                        : null;

                      return (
                        <BlogCard
                          key={post.slug}
                          post={post}
                          estimatedReadTime={estimatedReadTime}
                          imageUrl={imageUrl}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                      No blog posts found.
                    </p>
                    <Link
                      href="/blog"
                      className="text-pink-600 dark:text-pink-400 hover:underline"
                    >
                      View all posts
                    </Link>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:w-80">
                <BlogSidebar
                  categories={categories}
                  recentPosts={recentPosts}
                  tags={tags}
                  archive={archive}
                  currentCategory={category}
                  currentTag={tag}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest blog posts,
              community updates, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
