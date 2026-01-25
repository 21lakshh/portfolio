import { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
  {
    id: 'fomo-failure-and-finally-breaking-in-my-first-startup',
    title: 'FOMO, Failure, and Finally Breaking In: My Journey into my first startup',
    description: 'feeling lost, getting rejected everywhere, doubting myself and how one summer of building changed everything',
    content: "",
    date: '2026-01-14',
    author: 'Lakshya Paliwal',
    tags: ['AI', 'Technology', 'Startup Life', 'Mindset', 'Career Development'], 
    readTime: '5 min read',
    externalUrl: [
      'https://medium.com/@21lakshh/fomo-failure-and-finally-breaking-in-my-journey-into-my-first-startup-1b6b73a038f5',
    ]
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
