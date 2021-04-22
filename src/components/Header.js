import React from 'react'
import styled from 'styled-components'
import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaTwitch,
  FaDev,
  FaTwitter,
} from 'react-icons/fa'

const HeaderStyle = styled.div`
  padding-top: 20px;
  nav {
    display: flex;
    flex-direction: column;
    .logo {
      margin-bottom: 20px;
      img {
        width: 128px;
        height: 128px;
        border-radius: 50%;
      }
    }
    .name {
      margin-bottom: 10px;
    }
    .whoami {
      margin-bottom: 10px;
      ul {
        li {
          color: #666c7e;
        }
      }
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      span {
        margin: 0.35rem;
        color: #333342;
        border-radius: 6.25rem;
        background-color: transparent;
        border: 1px solid #e4e8f1;
        font-size: 0.875rem;
        line-height: 20px;
        padding: 0.625rem 1rem;
        font-weight: 600;
      }
    }
    .about {
      margin-bottom: 1.8rem;
      p {
        color: #666c7e;
        line-height: 1.5rem;
      }
      button {
        color: #333342;
        margin-left: 10px;
      }
    }
    .social-media {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      li {
        display: flex;
        border-radius: 30px;
        //width: 20px;
        a {
          margin: 1rem;
          &:hover {
            //color: red;
          }
        }
        &:hover {
          background-color: #999;
        }
      }
    }
  }
`

function Header() {
  return (
    <HeaderStyle>
      <nav>
        <div className="logo">
          <img
            src="https://alispit.tel/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUFXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bc69ccde7b3bc018999bdcfef0663321af871c4b/aspittel.png"
            alt="#"
          />
        </div>
        <div className="name">
          <h1>Ayoub JAMOUHI</h1>
        </div>
        <ul className="whoami">
          <li>@ayoubjamouhi .</li>
          <li className="role">
            <span>Senior Web developer, </span>
            <span>Mathematics teacher .</span>
          </li>
          <li>Seoul, S.Korea from Morocco .</li>
        </ul>
        <div className="skills">
          <span>Software engineering </span>
          <span>Writer</span>
          <span>Problem solving</span>
          <span>Mathematics teacher</span>
        </div>
        <div className="about">
          <p>
            I'm a Web Developer as a major field interesting in working as a
            freelancer. * also making an application with Laravel PHP backend
            I'm comfortable with this framework or Codeigniter, * making good UI
            with pure CSS or with Bootstrap CSS framework or tailwind
            first-class CSS
          </p>
          <button type="button">Read More ...</button>
        </div>
        <ul className="social-media">
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaDev />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitch />
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}

export default Header
