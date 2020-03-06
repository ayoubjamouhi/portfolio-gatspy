import React from "react"

const Projects = () => (
  <section className="projects text-center p-16">
    <h3 className="text-5xl text-gray-800 font-bold">My Works</h3>
    <span className="text-gray-800 mb-12 block">Here are a few projects. Want know about it?
      <a className="text-gray-800 hover:text-gray-800" href="mail:gemouhi@gmail.com">Email me.</a>
    </span>
    <div class="projects__all grid grid-cols-4 text-center gap-16">
        <div>
          <a href="http://compulog.ma">
            <img className="w-4/5 m-auto rounded" src={SupBill} />
          </a>
        </div>
        <div><img className="w-4/5 m-auto rounded" src="https://via.placeholder.com/150" /></div>
        <div><img className="w-4/5 m-auto rounded" src="https://via.placeholder.com/150" /></div>
        <div><img className="w-4/5 m-auto rounded" src="https://via.placeholder.com/150" /></div>
    </div>
    </section>
);

export default Projects