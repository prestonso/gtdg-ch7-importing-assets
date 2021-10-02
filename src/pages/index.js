import React from "react"

// Indicate to Webpack that this module uses this image.
import astronaut from "./gatsby-astronaut.png"

console.log(astronaut)

export default function Home() {
  return <img src={astronaut} alt="The Gatsby astronaut" />
}
