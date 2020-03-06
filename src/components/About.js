import React from "react"

const About = () => (
    <section className="about">
      <div className="wave wave--top"></div>
      <div className="bg-yellow-rotated bg-yellow-400 bg-16 bg-left-bottom text-center pt-1 pr-8 pb-1 pl-8" >
          <div className="container max-w-xl mx-auto ">
              <h3 className="text-3xl text-gray-900 bg-gradient-h3 text-center py-8 pb-6 font-bold">Hi, I’m Ayoub. Nice to meet you.</h3>
              <p className="text-center pt-4 pb-8 text-xl break-all">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
          </div>
      </div>
      <div className="skills grid grid-col-1 md:grid-cols-3 gap-8 p-10 text-center my-10">
          <div className="core">
              <h3 className="uppercase lg:text-3xl xl:text-4xl font-bold border-yellow-400 border-b w-1/2 m-auto mb-8">core</h3>
              <span className="flex flex-col">
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>Node.js</span>
                <span>HTML5</span>
                <span>Mobile & Responsive Design</span>
              </span>
          </div>
          <div className="libraries">
              <h3 className="uppercase lg:text-3xl xl:text-4xl font-bold border-yellow-400 border-b mb-8 w-1/2 m-auto">libraries</h3>
              <span className="flex flex-col">
                <span>React.js</span>
                <span>Vue.js</span>
                <span>Express</span>
                <span>Gulp</span>
                <span>jQuery</span>
              </span>
          </div>
          <div className="dev__tools">
              <h3 className="uppercase lg:text-3xl xl:text-4xl font-bold border-yellow-400 border-b mb-8 w-2/3 m-auto">dev tools</h3>
              <span className="flex flex-col">
                <span>Bootstrap</span>
                <span>Codepen</span>
                <span>Github</span>
                <span>Gitlab</span>
                <span>Terminal</span>
              </span>
          </div>
      </div>
    </section>
)

export default About