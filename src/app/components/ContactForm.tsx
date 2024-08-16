"use client";

import { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your form submission logic
    console.log("Form submitted", { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="mt-6">
      {submitted ? (
        <p className="text-accent">Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black dark:text-white">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-black text-black dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-black dark:text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-black text-black dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-black dark:text-white">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-black text-black dark:text-white"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-2 bg-accent text-white rounded transform transition-transform duration-300 hover:scale-110"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
