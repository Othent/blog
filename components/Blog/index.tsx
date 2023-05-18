import { useState, useEffect } from 'react';
import * as Styled from './styles';
import { Othent } from 'othent';
import blogEntries from './blogEntries';

const Blog = () => {

  const sortedBlogEntries = blogEntries.sort((a, b) => b.id - a.id);
  const mainBlogEntry = sortedBlogEntries[0];
  const gridBlogEntries = sortedBlogEntries.slice(1, 7);

  
  return (
    <Styled.MainWrapper>
      <Styled.heroContainer>

        <Styled.BlogMenu>
          <Styled.BlogMenuButton>View All</Styled.BlogMenuButton>
          <Styled.BlogMenuButton>Announcements</Styled.BlogMenuButton>
          <Styled.BlogMenuButton>Thought Leadership</Styled.BlogMenuButton>
        </Styled.BlogMenu>


        <Styled.HeroBlog key={mainBlogEntry.id}>
          <img src={mainBlogEntry.image} alt="Blog" />
          <Styled.MainBlogContent>
            <div className='header-content'>
              <p className='category'>{mainBlogEntry.category}</p>
              <p>{mainBlogEntry.duration}</p>
            </div>
            <h1>{mainBlogEntry.title}</h1>
            <p>{mainBlogEntry.content}</p>
            <Styled.BlogButton onClick={() => window.location.href = mainBlogEntry.link}>
              Read More
            </Styled.BlogButton>
          </Styled.MainBlogContent>
        </Styled.HeroBlog>


        <Styled.Subsection>
          {gridBlogEntries.map(blogPost => (

            <Styled.SubsectionBlog key={blogPost.id}>
              <img src={blogPost.image} alt="Blog" />
              <Styled.SubBlogContent>
                <div className='header-content'>
                  <p className='category'>{blogPost.category}</p>
                  <p>{blogPost.duration}</p>
                </div>
                <h2>{blogPost.title}</h2>
                <p>{blogPost.content}</p>
                <Styled.BlogButton onClick={() => window.location.href = blogPost.link}>
                  Read More
                </Styled.BlogButton>
              </Styled.SubBlogContent>
            </Styled.SubsectionBlog>

          ))}
        </Styled.Subsection>



        <Styled.BlogMenuFooter>
          <Styled.BlogMenuFooterButton>1</Styled.BlogMenuFooterButton>
        </Styled.BlogMenuFooter>



      </Styled.heroContainer>
    </Styled.MainWrapper>
  );
};

export default Blog;
