"use client";

import { useState } from "react";

export default function MessagesPage() {
    const [selectedChat, setSelectedChat] = useState<number>(1);

    const conversations = [
        {
            id: 1,
            coupleName: "Sarah & Mike",
            avatar: "SM",
            lastMessage: "That sounds great! Let's plan for next weekend.",
            timestamp: "2m ago",
            unread: 2,
            online: true,
        },
        {
            id: 2,
            coupleName: "Emma & David",
            avatar: "ED",
            lastMessage: "Thanks for the restaurant recommendation!",
            timestamp: "1h ago",
            unread: 0,
            online: false,
        },
        {
            id: 3,
            coupleName: "Lisa & Tom",
            avatar: "LT",
            lastMessage: "We'd love to join your event!",
            timestamp: "3h ago",
            unread: 1,
            online: true,
        },
    ];

    const messages = [
        {
            id: 1,
            sender: "them",
            text: "Hey! How are you guys doing?",
            timestamp: "10:30 AM",
        },
        {
            id: 2,
            sender: "us",
            text: "We're doing great! Just got back from a hiking trip. How about you?",
            timestamp: "10:32 AM",
        },
        {
            id: 3,
            sender: "them",
            text: "That's awesome! We've been meaning to go hiking. Any recommendations?",
            timestamp: "10:35 AM",
        },
        {
            id: 4,
            sender: "us",
            text: "Definitely check out the trails at Point Reyes. The views are incredible!",
            timestamp: "10:37 AM",
        },
        {
            id: 5,
            sender: "them",
            text: "That sounds great! Let's plan for next weekend.",
            timestamp: "10:40 AM",
        },
    ];

    const currentConversation = conversations.find(c => c.id === selectedChat);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Messages</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Chat with your connections</p>
            </div>

            {/* Messages Layout */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden h-[600px] flex">
                {/* Conversations List */}
                <div className="w-80 border-r border-gray-200 dark:border-gray-700 flex flex-col">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {conversations.map((conversation) => (
                            <button
                                key={conversation.id}
                                onClick={() => setSelectedChat(conversation.id)}
                                className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 ${selectedChat === conversation.id ? "bg-gray-50 dark:bg-gray-700" : ""
                                    }`}
                            >
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                                        {conversation.avatar}
                                    </div>
                                    {conversation.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0 text-left">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white truncate">{conversation.coupleName}</h3>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">{conversation.timestamp}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{conversation.lastMessage}</p>
                                </div>
                                {conversation.unread > 0 && (
                                    <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                                        {conversation.unread}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                {currentConversation?.avatar}
                            </div>
                            <div>
                                <h2 className="font-semibold text-gray-900 dark:text-white">{currentConversation?.coupleName}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {currentConversation?.online ? "Online" : "Offline"}
                                </p>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === "us" ? "justify-end" : "justify-start"}`}
                            >
                                <div className={`max-w-xs lg:max-w-md`}>
                                    <div
                                        className={`rounded-lg px-4 py-2 ${message.sender === "us"
                                                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                                                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                            }`}
                                    >
                                        <p>{message.text}</p>
                                    </div>
                                    <p className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${message.sender === "us" ? "text-right" : "text-left"}`}>
                                        {message.timestamp}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                            <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
