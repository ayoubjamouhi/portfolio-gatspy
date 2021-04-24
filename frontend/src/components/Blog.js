import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'
import { FaFilm, FaClock, FaVideo } from 'react-icons/fa'

const BlogStyles = styled.div`
  .post {
    .timeline {
      .clock::after {
        border-left: 1px solid #ccc;
        content: '';
        background: white;
        position: absolute;
        bottom: 0;
        left: 0px;
        height: 60%;
        width: 1.5px;
        top: 20%; /*center lines vertically*/
      }
    }
  }
`
function Blog({ posts }) {
  return (
    <BlogStyles>
      <div className="m">
        <h1 className="year mb-7">2021</h1>
        <div className="post flex gap-5 mb-20">
          <div className="timeline">
            <FaClock className="clock text-grey" />
          </div>
          <div className="article">
            <time
              dateTime="YYYY-MM-DD"
              className="text-grey text-xs block mb-3"
            >
              Apr 05, 2021
            </time>
            <div className="category flex items-center w-2/3 mb-3 p-1 text-lilac bg-lilaclight font-bold">
              <FaVideo />
              <span className="block ml-2">Filmed a tutorial</span>
            </div>
            <div className="url mb-3">
              <a
                href="https://www.youtube.com/watch?v=PqtbwGUA6Fg"
                alt="Youtube"
              >
                https://www.youtube.com/watch?v=PqtbwGUA6Fg
              </a>
            </div>
            <div className="iframe w-full">
              <iframe
                title="iframe"
                src="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPqtbwGUA6Fg&amp;v=1&amp;app=1&amp;api_key=258c8580bd477c9b886b49&amp;lazy=1"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="post flex gap-3 mb-20">
          <div className="timeline">timeline</div>
          <div className="article">
            <time dateTime="YYYY-MM-DD">Apr 05, 2021</time>
            <FaFilm />
            <div className="category">
              <span>Filmed a tutorial</span>
            </div>
            <div className="url">Url</div>
            <div className="iframe w-full">
              <iframe
                title="iframe"
                src="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPqtbwGUA6Fg&amp;v=1&amp;app=1&amp;api_key=258c8580bd477c9b886b49&amp;lazy=1"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </BlogStyles>
  )
}

export default Blog
