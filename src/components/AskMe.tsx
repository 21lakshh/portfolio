'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage, MessageType, MessageStatus } from '@/types/chat';
import { ChatMessageBubble } from './chat/ChatMessageBubble';
import { TypingIndicator } from './chat/TypingIndicator';
import { ChatInput } from './chat/ChatInput';

function buildChatHistory(messages: ChatMessage[]): [string, string][] {
  const history: [string, string][] = [];
  const conversationMessages = messages.slice(1);

  for (let i = 0; i < conversationMessages.length; i += 2) {
    const userMessage = conversationMessages[i];
    const aiMessage = conversationMessages[i + 1];

    if (
      userMessage?.type === MessageType.USER &&
      aiMessage?.type === MessageType.AI
    ) {
      history.push([userMessage.content, aiMessage.content]);
    }
  }
  return history;
}

export default function AskMe() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: MessageType.AI,
      content: "Hi! I'm here to help you learn more about Lakshya. What would you like to know?",
      timestamp: new Date(),
      status: MessageStatus.COMPLETE
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to bottom on new messages
  useEffect(() => {
    if (scrollAreaRef.current) {
      // Using a small timeout to ensure DOM has updated
      setTimeout(() => {
        scrollAreaRef.current?.scrollTo({
          top: scrollAreaRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: MessageType.USER,
      content: inputValue,
      timestamp: new Date(),
      status: MessageStatus.SENT
    };

    const chat_history = buildChatHistory(messages);
    const currentQuery = inputValue;

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: currentQuery,
          chat_history: chat_history
        })
      });

      if (!res.ok) throw new Error("API Error");

      const data = await res.json();
      const aiResponseContent = data.answer;

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: MessageType.AI,
        content: aiResponseContent,
        timestamp: new Date(),
        status: MessageStatus.TYPING,
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);

      // Simulate typing completion effect
      setTimeout(() => {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === aiMessage.id
              ? { ...msg, status: MessageStatus.COMPLETE }
              : msg
          )
        );
      }, aiResponseContent.length * 10 + 500); // Slightly faster typing simulation
      
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: MessageType.AI,
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
        status: MessageStatus.COMPLETE,
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full relative group">
      {/* Main Container */}
      <div className="
        flex flex-col 
        h-[600px] sm:h-[650px] 
        bg-white dark:bg-neutral-900 
        rounded-[2rem] 
        shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]
        border border-neutral-200 dark:border-neutral-800
        overflow-hidden
      ">
        
        {/* Messages Area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Top Gradient Mask for smooth scrolling fade-out */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-neutral-900 to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollAreaRef}
            className="h-full overflow-y-auto px-6 sm:px-8 pt-8 pb-4 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800"
          >
            {messages.map((message) => (
              <ChatMessageBubble key={message.id} message={message} />
            ))}
            
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="pl-2"
                >
                  <TypingIndicator />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Spacer to ensure last message isn't hidden behind input shadow */}
            <div className="h-4" />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 sm:p-6 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 relative z-20">
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSendMessage}
            onKeyPress={handleKeyPress}
            disabled={isTyping}
            placeholder="Ask a question..."
          />
          <div className="absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent pointer-events-none" />
        </div>
      </div>
      
      {/* Decorational background blob */}
      <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/50 to-neutral-100/50 dark:from-neutral-800/30 dark:to-neutral-900/30 rounded-[2.5rem] -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}