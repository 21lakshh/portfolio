"use client";

import React from 'react';
import { Info, Clock, Mail } from 'lucide-react';
import { Popover } from './ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const InfoPopover: React.FC = () => {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <button
          className="group relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-200 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-300/50 hover:text-white transition-all duration-300 rounded-lg p-2 flex items-center shadow-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Contact Information"
          tabIndex={0}
        >
          <Info className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </Popover.Trigger>
      <Popover.Content 
        className="w-80 p-0 bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-blue-400/20 rounded-xl shadow-2xl backdrop-blur-md"
        sideOffset={8}
      >
        <Card className="border-0 bg-transparent shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
              <Mail className="w-5 h-5 text-blue-400" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-200 mb-1">
                    Response Time
                  </p>
                  <p className="text-sm text-gray-300">
                    I usually respond within <span className="font-semibold text-blue-300">24 hours</span>
                  </p>
                </div>
              </div>
              
              <div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600/30">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Feel free to reach out for collaborations, project discussions, or just to say hello! 
                  I'm always excited to connect with fellow developers and creators.
                </p>
              </div>
            </div>
            
            <div className="pt-2 border-t border-slate-600/30">
              <p className="text-xs text-gray-400 text-center">
                Looking forward to hearing from you! 🚀
              </p>
            </div>
          </CardContent>
        </Card>
      </Popover.Content>
    </Popover>
  );
};

export default InfoPopover;