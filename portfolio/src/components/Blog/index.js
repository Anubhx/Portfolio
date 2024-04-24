import React, { useState } from 'react';
//import styled from 'styled-components';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider  , BlogButton} from './BlogStyles';
import BlogCard from '../Cards/BlogCards'; // Ensure this path is correct for your project structure
import { BlogData } from '../../data/constants'; // Adjust if necessary to match the actual import path


const Blogs = () => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="blogs">
      <Wrapper>
        <Title>Blogs</Title>
        <Desc>Explore a diverse range of topics from UX/UI design to software development through my detailed blog posts.</Desc>
        <BlogButton href="https://medium.com/@anubhxv" target="_blank">Find me on Medium </BlogButton>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>All</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'uxui'} onClick={() => setToggle('uxui')}>UX/UI Design</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'dev'} onClick={() => setToggle('dev')}>Development</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'tech'} onClick={() => setToggle('tech')}>Tech Insights</ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {BlogData
            .filter(blog => toggle === 'all' || blog.category === toggle)
            .map(blog => (
              <BlogCard key={blog.id} blog={blog} />
          ))}
        </CardContainer>
    
      </Wrapper>
      
    </Container>
  );
}

export default Blogs
