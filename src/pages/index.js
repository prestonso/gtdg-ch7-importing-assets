import React from "react"
import { graphql } from "gatsby"

export default function Home( { data } ) {
  return (
    <>
    <h1>List of PNG images</h1>
    <ul>
      {data.allFile.edges.map( (file, index) => {
        return (
          <li key={`png-${index}`}>
            <a href={file.node.publicURL} download>
              {file.node.name}
            </a>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        extension: {
          eq: "png"
        }
      }
    ) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`
