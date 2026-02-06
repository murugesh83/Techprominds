
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Technical Strategy here. How can I assist with your infrastructure or mobile product today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, userMessage].map(m => m.content).join('\n'),
        config: {
          systemInstruction: 'You are a Principal Engineering Consultant at Techpro Mind LLC. Your tone is professional, technical, and precise. You specialize in software ROI, scalability, and modern tech stacks. Be helpful but efficient.',
          temperature: 0.4,
        }
      });

      const aiText = response.text || 'Thinking...';
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Our technical lines are busy. Email contact@techpromind.com.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[70]">
      {isOpen ? (
        <div className="flex flex-col w-[350px] md:w-[450px] h-[600px] bg-white rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-300">
          <div className="p-8 bg-text-main text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">architecture</span>
              </div>
              <div>
                <span className="font-extrabold text-lg block leading-none">Engineering Lead</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">AI Strategist</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <span className="material-symbols-outlined font-bold">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-2xl text-sm leading-relaxed font-bold shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white border border-slate-100 text-text-main rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-5 rounded-2xl rounded-tl-none shadow-sm">
                  <span className="flex gap-1.5">
                    <span className="h-2 w-2 bg-slate-300 rounded-full animate-bounce"></span>
                    <span className="h-2 w-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-.3s]"></span>
                    <span className="h-2 w-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-.5s]"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-slate-100 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about strategy..."
                className="flex-1 bg-slate-50 border-none rounded-xl px-5 py-4 text-sm text-text-main focus:ring-2 focus:ring-primary outline-none font-bold"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-text-main hover:bg-primary text-white h-14 w-14 flex items-center justify-center rounded-xl transition-all shadow-lg active:scale-95"
              >
                <span className="material-symbols-outlined font-bold">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="h-20 w-20 bg-text-main text-white rounded-[1.75rem] flex items-center justify-center shadow-2xl hover:bg-primary hover:scale-110 active:scale-95 transition-all group"
        >
          <span className="material-symbols-outlined text-4xl font-bold">smart_toy</span>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
