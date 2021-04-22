import React from 'react'

import About from './About'
import Projects from './Projects'
import Investing from './Investing'

const Main = () => (
  <main>
    <section className="text-black text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl p-8">
      <p>
        Helooooooo, I'm<span> Ayoub JAMOUHI</span>,<br /> I'm Full Stack
        Developer
        <br />
      </p>
    </section>
    <About />
    <Projects />
    <Investing />
  </main>
)

export default Main
