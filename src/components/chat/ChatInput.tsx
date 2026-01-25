'use client';

import { ArrowUp } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  disabled: boolean;
  placeholder?: string;
}

export const ChatInput = ({ 
  value, 
  onChange, 
  onSend, 
  onKeyPress, 
  disabled, 
  placeholder = "Ask a question..." 
}: ChatInputProps) => {
  return (
    <div className="relative flex items-center w-full">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className="
          w-full 
          bg-neutral-100 dark:bg-neutral-800 
          text-neutral-900 dark:text-neutral-100 
          placeholder-neutral-500 dark:placeholder-neutral-400
          rounded-full 
          px-6 py-4 pr-14 
          text-base 
          focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 
          transition-all duration-200
        "
      />
      <button
        onClick={onSend}
        disabled={!value.trim() || disabled}
        className="
          absolute right-2 
          p-2.5 
          bg-neutral-900 dark:bg-white 
          text-white dark:text-black 
          rounded-full 
          hover:opacity-90 active:scale-95
          disabled:opacity-0 disabled:scale-75
          transition-all duration-200 ease-out
          shadow-sm
        "
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
};