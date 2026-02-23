import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hi! I'm an AI version of Thor. Ask me anything about my projects, skills, or experience! I'm trilingual just like the real Thor, so feel free to chat in English, Icelandic, or Norwegian." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Prepare history for backend
    const chatHistory = [...messages, userMessage];

    try {
      const response = await fetch('https://hthjya4y7wfp52yaum52xvsyqq0iqxvj.lambda-url.us-east-1.on.aws/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponse = '';

      // Create a temporary bot message that we'll update
      setMessages((prev) => [...prev, { role: 'bot', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        
        // Handle AWS Lambda Buffered Response Fallback
        // If the chunk starts with '{', it's likely the entire response wrapped in a Lambda JSON object
        if (chunk.trim().startsWith('{')) {
          try {
            const fullResponse = JSON.parse(chunk);
            if (fullResponse.body) {
              // Process the body string which contains the SSE data
              const sseLines = fullResponse.body.split('\n');
              for (const line of sseLines) {
                processSSELine(line);
              }
              continue;
            }
          } catch (e) {
            // Not a buffered JSON, or invalid JSON, try processing as normal chunk
          }
        }

        // Standard Streaming SSE processing
        const lines = chunk.split('\n');
        for (const line of lines) {
          processSSELine(line);
        }
      }

      function processSSELine(line) {
        if (line.startsWith('data: ')) {
          const dataStr = line.replace('data: ', '').trim();
          
          if (dataStr === '[DONE]') {
            setIsTyping(false);
            return;
          }

          try {
            const data = JSON.parse(dataStr);
            if (data.error) {
              const errorMsg = data.error === 'QUOTA_EXCEEDED' 
                ? "I've hit my message limit! My creator is running me on the Free Tier."
                : "Oops! Something went wrong: " + data.error;
              
              setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = errorMsg;
                return newMessages;
              });
              setIsTyping(false);
            } else if (data.text) {
              botResponse += data.text;
              setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = botResponse;
                return newMessages;
              });
            }
          } catch (e) {
            // Silent error for partial JSON chunks
          }
        }
      }
    } catch (error) {
      console.error('Error fetching chat:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: "Sorry, I'm having trouble connecting right now. Please try again later." }
      ]);
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <img src="/pngwing.com.png" alt="Chat with AI" className="chatbot-toggle-icon" />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with Thor AI</h3>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-container" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" disabled={isTyping || !input.trim()}>
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
