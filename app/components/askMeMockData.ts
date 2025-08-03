// Mock data for chat interface
import { MessageType, MessageStatus } from './types/chat';

// Mock chat messages for preview
export const mockChatMessages = [
  {
    id: "1" as const,
    type: MessageType.AI,
    content: "Hi! I'm here to help you learn more about Lakshya. What would you like to know?" as const,
    timestamp: new Date(Date.now() - 300000),
    status: MessageStatus.COMPLETE
  },
  {
    id: "2" as const,
    type: MessageType.USER,
    content: "What technologies does Lakshya work with?" as const,
    timestamp: new Date(Date.now() - 240000),
    status: MessageStatus.SENT
  },
  {
    id: "3" as const,
    type: MessageType.AI,
    content: "Lakshya is a passionate full-stack developer who works with modern web technologies including React, Next.js, TypeScript, and various backend technologies. He enjoys creating innovative digital experiences through clean code and thoughtful design." as const,
    timestamp: new Date(Date.now() - 180000),
    status: MessageStatus.COMPLETE
  }
];

// Root props for the chat component
export const mockRootProps = {
  initialMessages: mockChatMessages,
  placeholder: "Ask me anything about Lakshya!" as const,
  welcomeMessage: "Hi! I'm here to help you learn more about Lakshya. What would you like to know?" as const
};