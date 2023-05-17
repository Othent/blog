import { useState, useEffect } from 'react';
import * as Styled from './styles';
import { Othent } from 'othent';



const Blog = () => {



  return (
    <Styled.MainWrapper>




      <Styled.heroContainer>

        <Styled.HeaderText>Blog</Styled.HeaderText>
        {/* <Styled.HeaderText2>Learn about cryptocurrency, NFTs, and blockchain, discover our latest product updates, partnership announcements, user stories, and more.</Styled.HeaderText2> */}
        <Styled.BlogMenu>
          <Styled.BlogMenuButton>View All</Styled.BlogMenuButton>
          <Styled.BlogMenuButton>Releases</Styled.BlogMenuButton>
          <Styled.BlogMenuButton>Thought Leadership</Styled.BlogMenuButton>
          <Styled.BlogMenuButton>Announcements</Styled.BlogMenuButton>
          <Styled.BlogMenuButton>People</Styled.BlogMenuButton>
          <Styled.BlogMenuButton>Engineering</Styled.BlogMenuButton>
          <Styled.BlogMenuButton>NFT</Styled.BlogMenuButton>
        </Styled.BlogMenu>

        <Styled.HeroBlog>
          <img src="/blog/blog1/favicon.svg" alt="Blog" />
          <div className='content'>
            <div className='header-content'>
              <p className='category'>Crypto</p>
              <p>5 min read</p>
            </div>
            <h1>Your passport to the web3 economy</h1>
            <p>
              If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple. We’ll explain more below, but in short web3 is the next era of the internet in which blockchain technology will play a central role.
            </p>
            <Styled.HeroBlogButton onClick={() => window.location.href = '/blog1'}>Read More</Styled.HeroBlogButton>
          </div>
        </Styled.HeroBlog>


      </Styled.heroContainer>


      




    </Styled.MainWrapper>
  );
};

export default Blog;
