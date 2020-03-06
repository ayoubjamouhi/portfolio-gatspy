import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function Header() {
    return (
        <header className="p-5">
            <nav>
                <ul className="flex flex-row justify-between" >
                    <li><Link className="text-orange-500" to="/">AJ</Link></li>
                    <li>
                        <Link to="/contact">
                            <button className="border-2 border-orange-500 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-xl px-4 py-1 font-bold rounded-full text-orange-500 border-rad hover:bg-orange-500 hover:text-white">Say Hello</button>
                        </Link>
                    </li>
                </ul>
            </nav>
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
