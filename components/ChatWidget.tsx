
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Minimize2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ChatMessage, ChatState } from '../types';
import { sendMessageStream } from '../services/geminiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi there! I'm David's AI Assistant. Ask me anything about his projects, skills, or experience.",
      timestamp: new Date()
    }
  ]);
  const [chatState, setChatState] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || chatState !== ChatState.IDLE) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setChatState(ChatState.THINKING);

    // Create placeholder for model response
    const modelMessageId = (Date.now() + 1).toString();
    const modelMessage: ChatMessage = {
      id: modelMessageId,
      role: 'model',
      text: '',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, modelMessage]);

    try {
      const stream = sendMessageStream(userMessage.text);
      let fullText = '';
      
      setChatState(ChatState.STREAMING);

      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === modelMessageId ? { ...msg, text: fullText } : msg
        ));
      }
      
      setChatState(ChatState.IDLE);
    } catch (error) {
      console.error(error);
      setChatState(ChatState.ERROR);
      setMessages(prev => prev.map(msg => 
        msg.id === modelMessageId ? { ...msg, text: "I'm sorry, I'm having trouble connecting to Gemini right now. Please try again later." } : msg
      ));
      // Reset state after a moment
      setTimeout(() => setChatState(ChatState.IDLE), 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="bg-card border border-white/10 rounded-2xl shadow-2xl w-[90vw] sm:w-[380px] max-h-[600px] h-[70vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-primary/10 p-4 border-b border-white/5 flex justify-between items-center backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">AI Assistant</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                   Powered by Gemini
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-pulse"></span>
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"
            >
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white/5 text-gray-200 rounded-bl-none border border-white/5'
                  }`}
                >
                  {msg.role === 'model' ? (
                    <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
             {chatState === ChatState.THINKING && (
                 <div className="flex justify-start">
                     <div className="bg-white/5 border border-white/5 rounded-2xl rounded-bl-none p-3 flex items-center gap-1">
                         <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                         <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                         <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                     </div>
                 </div>
             )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 bg-card">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about David's skills..."
                disabled={chatState !== ChatState.IDLE && chatState !== ChatState.ERROR}
                className="w-full bg-darker border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || (chatState !== ChatState.IDLE && chatState !== ChatState.ERROR)}
                className="absolute right-2 p-2 bg-primary rounded-lg text-white hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-primary transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/25 hover:scale-110 hover:shadow-primary/40 transition-all duration-300"
        >
          <MessageSquare size={24} />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-white text-dark px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
            Ask AI about me
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45"></div>
          </div>
        </button>
      )}
    </div>
  );
};
