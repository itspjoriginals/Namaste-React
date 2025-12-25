const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-3">
          We’d love to hear from you. Reach out anytime 🍽️
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Get in Touch
          </h2>

          <p className="text-gray-600">
            Have questions about orders, delivery, or partnerships?  
            Our support team is here to help.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-4">
              <span className="text-xl">📧</span>
              <span>support@mamakitchen.com</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xl">📞</span>
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xl">📍</span>
              <span>Ahmedabad, India</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
