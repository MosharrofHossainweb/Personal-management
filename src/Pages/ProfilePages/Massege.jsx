import React from 'react';

const Massege = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-gray-100">
        {/* Chat Header */}
        <header className="bg-indigo-500 text-white px-6 py-4 shadow-lg flex justify-between items-center">
          <h1 className="text-lg font-bold">Messages</h1>
          <button className="bg-white text-indigo-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
            New Chat
          </button>
        </header>

        {/* Chat Body */}
        <div className="flex flex-grow overflow-hidden">
          {/* Chat List Sidebar */}
          <aside className="hidden md:block w-1/4 bg-white shadow-lg overflow-y-auto">
            <ul>
              {Array(10)
                .fill('')
                .map((_, index) => (
                  <li
                    key={index}
                    className="border-b px-6 py-4 flex items-center hover:bg-gray-100 transition"
                  >
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="text-sm">
                      <h4 className="font-semibold text-gray-800">
                        User {index + 1}
                      </h4>
                      <p className="text-gray-500 truncate">
                        Last message preview...
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </aside>

          {/* Chat Area */}
          <main className="flex-grow flex flex-col bg-white shadow-lg">
            {/* Messages */}
            <div className="flex-grow p-6 overflow-y-auto space-y-4">
              <div className="flex">
                <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg max-w-xs shadow">
                  Hi! How are you?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-indigo-500 text-white px-4 py-2 rounded-lg max-w-xs shadow">
                  I'm good, thank you! How about you?
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="border-t px-4 py-3 bg-gray-50 flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="ml-3 bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition">
                Send
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Massege;
