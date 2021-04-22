import React from 'react'
import { Link } from 'gatsby'

const Investing = () => (
  <section className="investing text-center p-16">
    <h3 className="text-3xl xl:text-5xl text-gray-900 font-bold">
      Interested in collaborating or investing?
    </h3>
    <span className="mb-6 block">
      I’m always open to discussing product design work or partnership
      opportunities.
    </span>
    <Link to="/contact">
      <button className="text-orange-500 border-2 border-orange-500 rounded py-2 px-4 font-bold text-2xl hover:bg-orange-500 hover:text-white">
        Start a conversation
      </button>
    </Link>
  </section>
)

export default Investing
