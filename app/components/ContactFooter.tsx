"use client";

import React, { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const ContactFooter = () => {
  const [copied, setCopied] = useState(false);
  const email = "2005lakshyapaliwal@gmail.com";

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
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-gray-300 mb-4"></p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
          
          {/* Email Section */}
          <div className="bg-slate-800/50 border border-blue-500/20 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-300 mr-2" />
              <span className="text-lg text-gray-300">Get in touch</span>
            </div>
            
            <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-4 mb-4">
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
              <p className="text-green-400 text-sm animate-fade-in">
                Email copied to clipboard!
              </p>
            )}
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="text-center py-8 border-t border-blue-500/20">
          <p className="text-gray-300 text-sm">
            © 2025 Developed with{' '}
            <span className="text-blue-400 text-base">🩵</span>{' '}
            by{' '}
            <span className="text-blue-300 font-medium">Laksh</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;