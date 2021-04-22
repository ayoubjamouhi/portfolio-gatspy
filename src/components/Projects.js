import React from 'react'
import supbill from '../images/supbill.png'
import subCom from '../images/subCom.png'
import gestion_comp from '../images/gestion_comp.png'

const Projects = () => (
  <section className="projects text-center p-16">
    <h3 className="text-5xl text-gray-900 font-bold">My Works</h3>
    <span className="text-gray-900 mb-12 block">
      Here are a few projects. Want know about it?
      <a
        className="text-gray-900 hover:text-gray-900"
        href="mail:gemouhi@gmail.com"
      >
        Email me.
      </a>
    </span>
    <div className="projects__all grid md:grid-cols-2 lg:grid-cols-3 text-center gap-16">
      <div>
        <a href="http://compulog.ma">
          <img
            alt="AYOUB JAMOYHI projects"
            className="w-4/5 m-auto rounded"
            src={supbill}
          />
        </a>
      </div>
      <div>
        <a href="http://compulog.ma">
          <img
            alt="AYOUB JAMOYHI projects"
            className="w-4/5 m-auto rounded"
            src={subCom}
          />
        </a>
      </div>
      <div>
        <a href="http://compulog.ma">
          <img
            alt="AYOUB JAMOYHI projects"
            className="w-4/5 m-auto rounded"
            src={gestion_comp}
          />
        </a>
      </div>
    </div>
  </section>
)

export default Projects
