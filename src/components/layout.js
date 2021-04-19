import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Header from "./Header"
import Footer from "./Footer"
import GlobalStyles from '../styles/GlobalStyles';

const LayoutStyles  = styled.div`
  /* max-width: 70vw; */
  margin: 0 auto;
  /* border: 1px solid var(--white); */
  border-radius: 9px;
  background-color: var(--white);
  padding:13px;
  padding-top: 0;
`;

const SiteBorders = styled.div`
  //border: 1px solid var(--black);
`;
const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      <GlobalStyles />
      <SiteBorders>
        <Header/>
          {children}
        <Footer />
      </SiteBorders>
    </LayoutStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
