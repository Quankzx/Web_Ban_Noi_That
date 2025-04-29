import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed right-4 bottom-4 z-40">
      {isOpen ? (
        <div className="bg-white rounded-2lg shadow-medium w-72 sm:w-80 overflow-hidden">
          <div className="bg-primary-400 px-4 py-3 text-white flex justify-between items-center">
            <h3 className="font-medium">Chat với chúng tôi</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>
          <div className="p-4 bg-gray-50 h-80 overflow-y-auto">
            <div className="bg-gray-200 rounded-tl-2lg rounded-tr-2lg rounded-br-2lg p-3 mb-3 max-w-[80%]">
              <p className="text-sm">Xin chào! Tôi có thể giúp gì cho bạn?</p>
            </div>
          </div>
          <div className="p-3 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                className="input flex-grow text-sm"
              />
              <button className="btn-primary ml-2">Gửi</button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Hoặc liên hệ qua <a href="#" className="text-primary-500">Zalo</a> | <a href="#" className="text-primary-500">Messenger</a>
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-400 hover:bg-primary-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-medium transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingChat;