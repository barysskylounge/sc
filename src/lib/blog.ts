import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  views: number;
  content: string;
  htmlContent: string;
  // SEO fields
  imageUrl?: string;
  imageAlt?: string;
  seoDescription?: string;
  keywords?: string[];
  authorImage?: string;
  authorBio?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  views: number;
  // SEO fields
  imageUrl?: string;
  imageAlt?: string;
  seoDescription?: string;
  keywords?: string[];
}

// Get all blog posts
// Note: The filename (without .md extension) is used as the slug for the blog post URL
// Example: "my-blog-post.md" -> slug: "my-blog-post" -> URL: "/blog/my-blog-post"
export function getAllBlogPosts(): BlogPostMeta[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md') && name.toLowerCase() !== 'readme.md')
      .map((fileName) => {
        try {
          // Extract slug from filename (filename without .md extension)
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(contentDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data } = matter(fileContents);

          return {
            slug,
            title: data.title || '',
            author: data.author || '',
            date: data.date || '',
            excerpt: data.excerpt || '',
            category: data.category || '',
            tags: data.tags || [],
            views: data.views || 0,
            imageUrl: data.imageUrl || data.image || '',
            imageAlt: data.imageAlt || data.title || '',
            seoDescription: data.seoDescription || data.excerpt || '',
            keywords: data.keywords || data.tags || [],
          } as BlogPostMeta;
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error);
          return null;
        }
      })
      .filter((post): post is BlogPostMeta => post !== null && post.title !== '') // Filter out invalid posts
      .sort((a, b) => {
        // Sort by date, newest first
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    return allPostsData;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Get a single blog post by slug
// The slug corresponds to the filename (without .md extension) in the /content directory
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Construct file path: slug + .md extension
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { allowDangerousHtml: true })
      .process(content);

    const htmlContent = processedContent.toString();

    return {
      slug,
      title: data.title || '',
      author: data.author || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      category: data.category || '',
      tags: data.tags || [],
      views: data.views || 0,
      content,
      htmlContent,
      imageUrl: data.imageUrl || data.image || '',
      imageAlt: data.imageAlt || data.title || '',
      seoDescription: data.seoDescription || data.excerpt || '',
      keywords: data.keywords || data.tags || [],
      authorImage: data.authorImage || '',
      authorBio: data.authorBio || '',
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Get all categories
export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = new Set(posts.map((post) => post.category).filter(Boolean));
  return Array.from(categories).sort();
}

// Get all tags
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const allTags = posts.flatMap((post) => post.tags || []);
  const uniqueTags = new Set(allTags);
  return Array.from(uniqueTags).sort();
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllBlogPosts().filter((post) => post.tags?.includes(tag));
}

// Get recent posts (excluding current post)
export function getRecentPosts(excludeSlug?: string, limit: number = 5): BlogPostMeta[] {
  return getAllBlogPosts()
    .filter((post) => post.slug !== excludeSlug)
    .slice(0, limit);
}

// Get archive data (grouped by year and month)
export function getArchiveData(): { year: string; months: { month: string; count: number }[] }[] {
  const posts = getAllBlogPosts();
  const archive: Record<string, Record<string, number>> = {};

  posts.forEach((post) => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();
    const month = date.toLocaleString('default', { month: 'long' });

    if (!archive[year]) {
      archive[year] = {};
    }
    archive[year][month] = (archive[year][month] || 0) + 1;
  });

  return Object.keys(archive)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map((year) => ({
      year,
      months: Object.keys(archive[year])
        .sort((a, b) => {
          const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ];
          return months.indexOf(a) - months.indexOf(b);
        })
        .map((month) => ({
          month,
          count: archive[year][month],
        })),
    }));
}

