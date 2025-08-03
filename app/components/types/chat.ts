// Chat types and enums
export enum MessageType {
  USER = 'user',
  AI = 'ai'
}

export enum MessageStatus {
  SENDING = 'sending',
  SENT = 'sent',
  TYPING = 'typing',
  COMPLETE = 'complete'
}

export interface ChatMessage {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
  status: MessageStatus;
}

export interface ChatInterfaceProps {
  initialMessages?: ChatMessage[];
  placeholder?: string;
  welcomeMessage?: string;
  onSendMessage?: (message: string) => void;
  isTyping?: boolean;
}