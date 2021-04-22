import React, { useRef } from 'react'
import styled from 'styled-components'
import { FaFilm, FaClock } from 'react-icons/fa'

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
function Blog() {
  return (
    <BlogStyles>
      <div>
        <h1 className="year mb-7">2021</h1>
        <div className="post flex gap-3 mb-20">
          <div className="timeline">
            <FaClock className="clock" />
          </div>
          <div className="article">
            <time dateTime="YYYY-MM-DD">Apr 05, 2021</time>
            <div className="category">
              <FaFilm />
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
        <div className="post flex gap-3 mb-20">
          <div className="timeline">timeline</div>
          <div className="article">
            <time dateTime="YYYY-MM-DD">Apr 05, 2021</time>
            <div className="category">
              <FaFilm />
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
