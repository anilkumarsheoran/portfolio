import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Header from '../components/header/header'
import Content from '../components/content/content'
import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from '../components/navigation/navigation'

const IndexPage = ({data}) => (
  <Layout>
    <Header 
      primaryText={data.allContentfulHome.edges[0].node.headerText}
      secondaryText={data.allContentfulHome.edges[0].node.headerSubtext}
      image={data.allContentfulHome.edges[0].node.headerimg[0].file.url}
    />
    <Content content={data.allContentfulHome.edges[0].node.summary.summary}/>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query{
    allContentfulHome{
    edges{
      node{
        headerText,
        headerSubtext,
        summary {
          summary
        },
        headerimg {
          file {
            url
          }
        }
      }
    }
  }
  }
`
