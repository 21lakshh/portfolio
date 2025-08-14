"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface EmailCopySectionProps {
  email: string;
}

const EmailCopySection: React.FC<EmailCopySectionProps> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-4">
        <span className="text-white font-mono text-sm md:text-base break-all">
          {email}
        </span>
        <Button
          onClick={copyEmail}
          variant="ghost"
          size="sm"
          className={cn(
            "ml-2 h-8 w-8 p-0 hover:bg-blue-500/20 transition-all duration-200",
            copied && "bg-green-500/20 hover:bg-green-500/20"
          )}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-blue-300 hover:text-blue-200" />
          )}
        </Button>
      </div>

      {copied && (
        <p className="text-green-400 text-sm animate-fade-in text-center">
          Email copied to clipboard!
        </p>
      )}
    </div>
  );
};

export default EmailCopySection;