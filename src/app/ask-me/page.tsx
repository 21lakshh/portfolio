import AskMeClient from '@/components/AskMeClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ask Me | Lakshya Paliwal',
  description: 'Ask me anything about my experience, projects, and skills using AI-powered chat.',
  openGraph: {
    title: 'Ask Me | Lakshya Paliwal',
    description: 'Ask me anything about my experience, projects, and skills using AI-powered chat.',
    type: 'website',
  },
}

export default function AskMePage() {
  return <AskMeClient />
}
