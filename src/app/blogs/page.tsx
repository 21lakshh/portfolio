import { blogs } from '@/data/blogs'
import BlogsListClient from '@/components/BlogsListClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Lakshya Paliwal',
  description: 'Technical writings and thoughts on web development, AI, and more.',
  openGraph: {
    title: 'Blog | Lakshya Paliwal',
    description: 'Technical writings and thoughts on web development, AI, and more.',
    type: 'website',
  },
} 

export default function BlogsPage() {
  return <BlogsListClient blogs={blogs} />
}