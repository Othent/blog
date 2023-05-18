import React from 'react';
import { useRouter } from 'next/router';
import * as Styled from './styles';
import blogEntries from './blogEntries';

const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogPost = blogEntries.find((entry) => entry.id === Number(id));


  // Function to get four random blog posts
  const getRandomBlogPosts = () => {
    const randomBlogPosts = blogEntries.slice(0, 3);
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

          <p>{blogPost.content}</p>
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
