'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BlogPostMeta } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPostMeta;
  estimatedReadTime: number;
  imageUrl: string | null;
}

export default function BlogCard({ post, estimatedReadTime, imageUrl }: BlogCardProps) {
  const router = useRouter();

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/blog?category=${encodeURIComponent(post.category)}`);
  };

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/blog?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
    >
      <article>
        <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden relative">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          ) : (
            <span className="text-6xl">
              {post.category === "Community" && "💑"}
              {post.category === "Events" && "🎉"}
              {post.category === "Safety" && "🔒"}
              {post.category === "Profile" && "👤"}
              {post.category === "Travel" && "✈️"}
              {!["Community", "Events", "Safety", "Profile", "Travel"].includes(
                post.category
              ) && "📝"}
            </span>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={handleCategoryClick}
              className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-semibold hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors cursor-pointer"
            >
              {post.category}
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {estimatedReadTime} min read
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {post.views.toLocaleString()} views
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <button
                  key={tag}
                  onClick={(e) => handleTagClick(e, tag)}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {post.author}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="text-pink-600 dark:text-pink-400 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Read More
              <svg
                className="w-4 h-4"
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
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

