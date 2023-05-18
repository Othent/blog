import React from 'react';
import { useRouter } from 'next/router';
import * as Styled from './styles';
import blogEntries from './blogEntries';



const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogPost = blogEntries.find((entry) => entry.id === Number(id));



  const getRandomBlogPosts = () => {
    const randomBlogPosts = [];
    const totalPosts = blogEntries.length;
    while (randomBlogPosts.length < 3) {
      const randomIndex = Math.floor(Math.random() * totalPosts);
      const randomPost = blogEntries[randomIndex];
      if (
        !randomBlogPosts.includes(randomPost) &&
        randomPost.id !== Number(id)
      ) {
        randomBlogPosts.push(randomPost);
      }
    }
    return randomBlogPosts;
  };

  const randomBlogPosts = getRandomBlogPosts();

  return (
    <Styled.MainWrapper>
      {blogPost ? (
        <Styled.BlogPost>
          <Styled.BlogHeader>
            <div className='details'>
              <p className='category'>{blogPost.category}</p>
              <p>{blogPost.duration}</p>
            </div>
            <p>
              Arweave tx ID: 
              <a href={'https://arweave.net/' + blogPost.transactionID} target='_blank' rel='noopener noreferrer' style={{ color: '#2375EF' }}>
                {' ' + blogPost.transactionID}
              </a>
            </p>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.teaserContent}</p>
            <b>By: Lorimer Jenkins {blogPost.date}</b>
          </Styled.BlogHeader>

          <img src={blogPost.image} alt={blogPost.title} />

          <p className='content'>{blogPost.content}</p>


          <div className='about-author'>
            <div className='header'>
              <div className='left'>
                <Styled.AuthorImg src="../../public/lorimer.jpeg" alt="Lorimer Jenkins" />
                <div className='right'>
                  <b>By Lorimer Jenkins</b>
                  <p>Founder, Othent</p>
                </div>
              </div>
              <a href="https://twitter.com/lorimer_jenkins" target="_blank">
                <Styled.AuthorTwitter src="../../public/twitter.png" alt="Twitter" />
              </a>
            </div>
            <p className='footer'>
              Lorimer's favorite color of balloon is red 
            </p>
          </div>

        </Styled.BlogPost>
      ) : (
        <p>Blog post not found.</p>
      )}

      <Styled.RecommendedBlogs>
        {randomBlogPosts.map((blogPost) => (
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
      </Styled.RecommendedBlogs>


    </Styled.MainWrapper>
  );
};

export default BlogPostPage;
