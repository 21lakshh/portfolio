"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage, MessageType, MessageStatus } from './types/chat';
import { ChatMessageBubble } from './chat/ChatMessageBubble';
import { TypingIndicator } from './chat/TypingIndicator';
import { ChatInput } from './chat/ChatInput';

function buildChatHistory(messages: ChatMessage[]): [string, string][] {
  const history: [string, string][] = [];
  // Skip the initial AI welcome message
  const conversationMessages = messages.slice(1);

  for (let i = 0; i < conversationMessages.length; i += 2) {
    const userMessage = conversationMessages[i];
    const aiMessage = conversationMessages[i + 1];

    if (
      userMessage &&
      userMessage.type === MessageType.USER &&
      aiMessage &&
      aiMessage.type === MessageType.AI
    ) {
      history.push([userMessage.content, aiMessage.content]);
    }
  }
  return history;
}

// Main AskMe Component
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

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
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

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`API responded with ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      const aiResponseContent = data.answer;

      if (typeof aiResponseContent !== 'string') {
        throw new Error("Invalid response format from API.");
      }

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: MessageType.AI,
        content: aiResponseContent,
        timestamp: new Date(),
        status: MessageStatus.TYPING,
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);

      setTimeout(() => {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === aiMessage.id
              ? { ...msg, status: MessageStatus.COMPLETE }
              : msg
          )
        );
      }, aiResponseContent.length * 20 + 1000);
    } catch (error) {
      console.error("Failed to get response from AI", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: MessageType.AI,
        content: "Sorry, something went wrong. Please try again later.",
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
    <section id="ask-me" className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Ask Me
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about my experience, projects, or skills? Ask away! I'm here to help.
          </p>
        </div>

        {/* Chat Interface */}
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
          {/* Messages Area */}
          <ScrollArea ref={scrollAreaRef} className="h-96 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessageBubble key={message.id} message={message} />
              ))}
              
              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TypingIndicator />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollArea>

          {/* Input Area */}
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSendMessage}
            onKeyPress={handleKeyPress}
            disabled={isTyping}
            placeholder="Ask me anything about Lakshya..."
          />
        </Card>
      </div>
    </section>
  );
}
