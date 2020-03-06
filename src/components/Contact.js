import React from "react";

const ContactPage = () => (
  <section className="py-20 text-center">
    <h1 className="text-5xl text-orange-500">Contact me</h1>
    <form method="post" className="w-2/3 m-auto w-full max-w-sm px-8 py-6">
      <div className="mb-6">
        <label className="block text-gray-700 text-lg mb-2 text-left" for="name">
          Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" id="name"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg mb-2 text-left" for="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" id="email"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg mb-2 text-left" for="message">
          Message
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-screen"  name="message" id="message"></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Send
        </button>
    </div>
    </form>
  </section>
)
export default ContactPage