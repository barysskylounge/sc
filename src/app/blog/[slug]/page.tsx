import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import CopyButton from "@/components/CopyButton";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import {
  getBlogPostBySlug,
  getAllBlogPosts,
  getAllCategories,
  getAllTags,
  getRecentPosts,
  getArchiveData,
} from "@/lib/blog";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date(post.date).toISOString(); // You can update this if you track modifications

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";
  // For metadata (Open Graph, etc.), use absolute URLs
  const imageUrl = post.imageUrl
    ? (post.imageUrl.startsWith('http') ? post.imageUrl : `${siteUrl}${post.imageUrl}`)
    : `${siteUrl}/og-image.jpg`; // Default OG image

  const seoDescription = post.seoDescription || post.excerpt;
  const keywords = post.keywords && post.keywords.length > 0
    ? post.keywords.join(', ')
    : post.tags.join(', ');

  return {
    title: `${post.title} | Couple Socials Blog`,
    description: seoDescription,
    keywords: keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: seoDescription,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [post.author],
      tags: post.tags,
      siteName: "Couple Socials",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: seoDescription,
      images: [imageUrl],
      creator: "@couplesocials", // Update with your Twitter handle
      site: "@couplesocials",
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
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
    other: {
      "article:author": post.author,
      "article:published_time": publishedTime,
      "article:modified_time": modifiedTime,
      "article:section": post.category,
      "article:tag": post.tags.join(", "),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categories = getAllCategories();
  const tags = getAllTags();
  const recentPosts = getRecentPosts(post.slug, 5);
  const archive = getArchiveData();

  // Get 2 recent posts for the bottom section
  const recentBlogs = recentPosts.slice(0, 2);

  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date(post.date).toISOString();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

  // Calculate read time
  const wordsPerMinute = 200;
  const wordCount = post.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);

  // For Next.js Image component, use relative paths for local images
  // For metadata (Open Graph, etc.), use absolute URLs
  const imageUrlForMetadata = post.imageUrl
    ? (post.imageUrl.startsWith('http') ? post.imageUrl : `${siteUrl}${post.imageUrl}`)
    : `${siteUrl}/og-image.jpg`;
  const seoDescription = post.seoDescription || post.excerpt;
  const keywords = post.keywords && post.keywords.length > 0
    ? post.keywords.join(", ")
    : post.tags.join(", ");

  // Enhanced Schema.org structured data for SEO (2025 best practices)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: seoDescription,
    image: {
      "@type": "ImageObject",
      url: imageUrlForMetadata,
      width: 1200,
      height: 630,
      alt: post.imageAlt || post.title,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteUrl}/blog?author=${encodeURIComponent(post.author)}`,
      ...(post.authorImage && {
        image: {
          "@type": "ImageObject",
          url: post.authorImage.startsWith('http')
            ? post.authorImage
            : `${siteUrl}${post.authorImage}`,
        },
      }),
      ...(post.authorBio && { description: post.authorBio }),
    },
    publisher: {
      "@type": "Organization",
      name: "Couple Socials",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.svg`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
      url: `${siteUrl}/blog/${post.slug}`,
    },
    keywords: keywords,
    articleSection: post.category,
    wordCount: wordCount,
    timeRequired: `PT${readTime}M`,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    ...(post.tags && post.tags.length > 0 && {
      about: post.tags.map(tag => ({
        "@type": "Thing",
        name: tag,
      })),
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com"}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com"}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com"}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />

        {/* Hero Section with Background Image */}
        <section className="relative pt-24 pb-16 min-h-[600px] flex items-end">
          {/* Background Image with Overlay */}
          {post.imageUrl ? (
            <div className="absolute inset-0 z-0">
              <Image
                src={post.imageUrl.startsWith('http') ? post.imageUrl : post.imageUrl}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
          )}

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Content - Center Aligned */}
            <div className="max-w-4xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav
                className="mb-6 text-sm"
                aria-label="Breadcrumb"
              >
                <ol className="flex items-center justify-center space-x-2">
                  <li>
                    <Link
                      href="/"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <svg
                      className="w-4 h-4 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <svg
                      className="w-4 h-4 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </li>
                  <li className="text-white/80 font-medium">
                    {post.title}
                  </li>
                </ol>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-white/90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-white">
                    {post.author}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-white/90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm text-white/90">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-white/90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span className="text-sm text-white/90">
                    {post.views.toLocaleString()} views
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-white/90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-white/90">
                    {readTime} min read
                  </span>
                </div>

                {/* Copy Button */}
                <CopyButton
                  content={post.content}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-white/90 hover:bg-white/20 transition-colors"
                />
              </div>

              {/* Category and Tags */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <Link
                  href={`/blog?category=${encodeURIComponent(post.category)}`}
                  className="px-4 py-2 bg-pink-500/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors shadow-lg"
                >
                  {post.category}
                </Link>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm hover:bg-white/30 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content Section with Sidebar */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <article className="flex-1 prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-pink-600 dark:prose-a:text-pink-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800">
                <div
                  dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                  className="blog-content"
                />
              </article>

              {/* Sidebar */}
              <div className="lg:w-80">
                <BlogSidebar
                  categories={categories}
                  recentPosts={recentPosts}
                  tags={tags}
                  archive={archive}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recent Blogs Section */}
        {recentBlogs.length > 0 && (
          <section className="py-12 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Recent Blogs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentBlogs.map((recentPost) => {
                  const estimatedReadTime = Math.max(
                    1,
                    Math.ceil(recentPost.excerpt.split(/\s+/).length / 200)
                  );
                  // Use relative path for next/image, absolute URL for metadata
                  const imageUrl = recentPost.imageUrl
                    ? (recentPost.imageUrl.startsWith('http') ? recentPost.imageUrl : recentPost.imageUrl)
                    : null;

                  return (
                    <BlogCard
                      key={recentPost.slug}
                      post={recentPost}
                      estimatedReadTime={estimatedReadTime}
                      imageUrl={imageUrl}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-semibold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Blog
              </Link>
              {recentPosts.length > 0 && (
                <Link
                  href={`/blog/${recentPosts[0].slug}`}
                  className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-semibold transition-colors"
                >
                  Next Post
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

