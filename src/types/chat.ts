export enum MessageType {
  USER = 'user',
  AI = 'ai',
}

export enum MessageStatus {
  SENT = 'sent',
  TYPING = 'typing',
  COMPLETE = 'complete',
}

export interface ChatMessage {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
  status: MessageStatus;
}
