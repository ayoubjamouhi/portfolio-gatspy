import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function Header() {
    return (
        <header className="p-5">
            <div className="container mx-100">
                <nav>
                    <ul className="flex flex-row justify-between" >
                        <li><Link className="text-orange-500" to="/">AJ</Link></li>
                        <li>
                            <Link to="/contact">
                                <button className="border-2 border-orange-500 px-4 py-1
                                font-bold rounded-full text-orange-500 border-rad hover:bg-orange-500 hover:text-white">Say Hello</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="text-black text-center text-6xl p-8">
                    <p>Helooooooo, I'm<span> Ayoub JAMOUHI</span>,<br/> I'm Full Stack Developer,<br/></p>
                </div>
            </div>
        </header>
        )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
