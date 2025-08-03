import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Send } from 'lucide-react';

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
  placeholder = "Type your message..." 
}: ChatInputProps) => {
  return (
    <div className="border-t border-gray-700 p-4">
      <div className="flex space-x-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
          disabled={disabled}
        />
        <Button
          onClick={onSend}
          disabled={!value.trim() || disabled}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4"
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
};