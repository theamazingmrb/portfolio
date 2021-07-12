import React from "react"
import styled from "styled-components"
const projects = require('../content/projects.json')
const face = require('../images/portrait.png')
const background = require('../images/background.png')

const StyledSection = styled.section`
  color: inherit;
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }

  .flex-container{
    display: flex;
    justify-content:space-between;
    background: url(${background})
  }
`

const Portrait = styled.img`
  max-height: 300px;
  border-radius: 50%
`

const Hero = (props) => {
  const { frontmatter, rawMarkdownBody } = props.content
  console.log(props)
  const renderProjects = () =>{
    return projects.map(project => (
      <li>{project.title}</li>
    ))
  }
  return (
    <StyledSection id="hero">
      <div className="flex-container">
      <div>

        <h1 className="title">
            {frontmatter.greetings}{" "}
            <span role="img" aria-label="emoji">
              {frontmatter.emoji}
            </span>
            <br />
            {frontmatter.title}
          </h1>
          <h2 className="subtitle">
            {frontmatter.subtitlePrefix}{" "}
            <span className="highlighted">{frontmatter.subtitleHighlight}</span>
          </h2>
      </div>
        <Portrait src={face} alt="face"></Portrait>
      </div>
      <div className="description">{rawMarkdownBody}</div>
      {/* <ul>{renderProjects()}</ul> */}
    </StyledSection>
  )
}

export default Hero