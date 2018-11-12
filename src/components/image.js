import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        astronaut:imagesYaml(title: { eq: "Astronaut" }) {
          image:localFile {
            childImageSharp {
              fixed(width: 120) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Image fixed={data.astronaut.image.childImageSharp.fixed} />
    )}
  />
)
export default Image
