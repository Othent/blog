import React from 'react';
import { useRouter } from 'next/router';
import * as Styled from './styles';
import blogEntries from './blogEntries';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";


const BlogPostPage = () => {
  const router = useRouter();
  const url = router.query.id;
  const blogPost = blogEntries.find((entry) => entry.url === url);

  const getRandomBlogPosts = () => {
    const randomBlogPosts = [];
    const totalPosts = blogEntries.length;
    while (randomBlogPosts.length < 3 && totalPosts >= 4) {
      const randomIndex = Math.floor(Math.random() * totalPosts);
      const randomPost = blogEntries[randomIndex];
      if (
        !randomBlogPosts.includes(randomPost) &&
        randomPost.url !== url
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
            <b>By Lorimer Jenkins, {blogPost.date}</b>
          </Styled.BlogHeader>

          <img className='blog-img' src={blogPost.blogImg} alt={blogPost.title} />

          <ReactMarkdown rehypePlugins={[rehypeRaw]} className="content" children={blogPost.content} />

          <div className='about-author'>
            <div className='header'>
              <div className='left'>
                <Styled.AuthorImg src="/lorimer.jpeg" alt="Lorimer Jenkins" />
                <div className='right'>
                  <b>By Lorimer Jenkins</b>
                  <p>building Othent</p>
                </div>
              </div>
              <a href="https://twitter.com/lorimer_jenkins" target="_blank">
                <Styled.AuthorTwitter src="/twitter.png" alt="Twitter" />
              </a>
            </div>
            <p className='footer'>
              Lorimer is the founder of Othent, a protocol bridging traditional authentication over to Web3 to lower the barrier entry to blockchains and create stronger authentication services for Web3.
            </p>
          </div>
        </Styled.BlogPost>
      ) : (
        <p>Blog post not found.</p>
      )}

      {/* {randomBlogPosts.length === 3 && (
        <Styled.RecommendedBlogs>
          {randomBlogPosts.map((blogPost) => (
            <Styled.SubsectionBlog key={blogPost.id}>
              <img src={blogPost.image} alt="othent hero image" />
              <Styled.SubBlogContent>
                <div className='header-content'>
                  <p className='category'>{blogPost.category}</p>
                  <p>{blogPost.duration}</p>
                </div>
                <h2>{blogPost.title}</h2>
                <p>{blogPost.teaserContent}</p>
                <Styled.SubBlogButton secondary onClick={() => router.push(`/${blogPost.url}`)}>
                  Read More
                </Styled.SubBlogButton>
              </Styled.SubBlogContent>
            </Styled.SubsectionBlog>
          ))}
        </Styled.RecommendedBlogs>
      )} */}
    </Styled.MainWrapper>
  );
};

export default BlogPostPage;
