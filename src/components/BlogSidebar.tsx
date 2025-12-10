'use client';

import Link from 'next/link';
import { BlogPostMeta } from '@/lib/blog';

interface BlogSidebarProps {
  categories: string[];
  recentPosts: BlogPostMeta[];
  tags: string[];
  archive: { year: string; months: { month: string; count: number }[] }[];
  currentCategory?: string;
  currentTag?: string;
}

export default function BlogSidebar({
  categories,
  recentPosts,
  tags,
  archive,
  currentCategory,
  currentTag,
}: BlogSidebarProps) {
  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Categories
        </h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                !currentCategory && !currentTag
                  ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All Posts
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blog?category=${encodeURIComponent(category)}`}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  currentCategory === category
                    ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors mb-1 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                currentTag === tag
                  ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 font-semibold'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Archive */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Archive
        </h3>
        <div className="space-y-4">
          {archive.map((yearData) => (
            <div key={yearData.year}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {yearData.year}
              </h4>
              <ul className="space-y-1 ml-2">
                {yearData.months.map((monthData) => (
                  <li key={monthData.month}>
                    <Link
                      href={`/blog?year=${yearData.year}&month=${encodeURIComponent(monthData.month)}`}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center justify-between"
                    >
                      <span>{monthData.month}</span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                        {monthData.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

