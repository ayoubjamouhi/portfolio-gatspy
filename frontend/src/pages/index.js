import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Main from '../components/Main'
import Blog from '../components/Blog'

const Container = styled.div`
  background-color: var(--red);
  padding-top: 10vh;
`

const IndexPage = ({ data }) => (
  <Container>
    <Layout>
      <SEO title="AYOUB JAMOUHI portfio - web developer" />
      <Blog posts={data.posts.nodes} />
    </Layout>
  </Container>
)

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    posts: allSanityPost {
      nodes {
        id
        title
        publishedAt
      }
    }
  }
`
