import { useState, useEffect } from 'react';
import * as Styled from './styles';
import blogEntries from './blogEntries';


const Blog = () => {

  const [selectedCategory, setSelectedCategory] = useState('View All');

  const filteredBlogEntries = selectedCategory === 'View All'
    ? blogEntries
    : blogEntries.filter(entry => entry.category === selectedCategory);

  const sortedBlogEntries = filteredBlogEntries.sort((a, b) => b.id - a.id);
  const mainBlogEntry = sortedBlogEntries[0];
  const gridBlogEntries = selectedCategory === 'View All'
  ? sortedBlogEntries.slice(1)
  : sortedBlogEntries;

  
  return (
    <Styled.MainWrapper>
      <Styled.heroContainer>

      <Styled.BlogMenu>
          <Styled.BlogMenuButton secondary={selectedCategory !== 'View All'}
           onClick={() => setSelectedCategory('View All')}>View All</Styled.BlogMenuButton>
          <Styled.BlogMenuButton secondary={selectedCategory !== 'Announcements'}
           onClick={() => setSelectedCategory('Announcements')}>Announcements</Styled.BlogMenuButton>
          <Styled.BlogMenuButton secondary={selectedCategory !== 'Technology'}
           onClick={() => setSelectedCategory('Technology')}>Technology</Styled.BlogMenuButton>
        </Styled.BlogMenu>


        {selectedCategory === 'View All' && (
          <Styled.HeroBlog key={mainBlogEntry.id}>
            <img src={mainBlogEntry.image} alt="Blog" />
            <Styled.MainBlogContent>
              <div className='header-content'>
                <p className='category'>{mainBlogEntry.category}</p>
                <p>{mainBlogEntry.duration}</p>
              </div>
              <h1>{mainBlogEntry.title}</h1>
              <p>{mainBlogEntry.teaserContent}</p>
              <Styled.MainBlogButton onClick={() => window.location.href = '/' + mainBlogEntry.id}>
                Read More
              </Styled.MainBlogButton>
            </Styled.MainBlogContent>
          </Styled.HeroBlog>
        )}


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
                <p>{blogPost.teaserContent}</p>
                <Styled.SubBlogButton secondary onClick={() => window.location.href = '/' + blogPost.id}>
                  Read More
                </Styled.SubBlogButton>
              </Styled.SubBlogContent>
            </Styled.SubsectionBlog>

          ))}
        </Styled.Subsection>



        <Styled.BlogMenuFooter>
          <Styled.BlogMenuFooterButton secondary>&lt;</Styled.BlogMenuFooterButton>
          <Styled.BlogMenuFooterButton>1</Styled.BlogMenuFooterButton>
          <Styled.BlogMenuFooterButton secondary>&gt;</Styled.BlogMenuFooterButton>
        </Styled.BlogMenuFooter>



      </Styled.heroContainer>
    </Styled.MainWrapper>
  );
};

export default Blog;
