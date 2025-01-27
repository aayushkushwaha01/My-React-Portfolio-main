import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        I specialize in web and frontend development, having worked on a variety of projects ranging from responsive websites to interactive web applications. Here are some examples of my work.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'HTML, CSS' ?
            <ToggleButton active value="HTML, CSS" onClick={() => setToggle('HTML, CSS')}>HTML, CSS</ToggleButton>
            :
            <ToggleButton value="HTML, CSS" onClick={() => setToggle('HTML, CSS')}>HTML, CSS</ToggleButton>
          }
          <Divider />
          {toggle === 'HTML, CSS, JS' ?
            <ToggleButton active value="HTML, CSS, JS" onClick={() => setToggle('HTML, CSS, JS')}>HTML, CSS, JS</ToggleButton>
            :
            <ToggleButton value="HTML, CSS, JS" onClick={() => setToggle('HTML, CSS, JS')}>HTML, CSS, JS</ToggleButton>
          }
          <Divider />
          {toggle === 'REACT' ?
            <ToggleButton active value="REACT" onClick={() => setToggle('REACT')}>REACT</ToggleButton>
            :
            <ToggleButton value="REACT" onClick={() => setToggle('REACT')}>REACT</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects