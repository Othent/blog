import React from 'react';
import { useRouter } from 'next/router';
import * as Styled from './styles';
import blogEntries from './blogEntries';


const BlogPostPage = () => {

  const router = useRouter();
  const { id } = router.query;
  const blogPost = blogEntries.find(entry => entry.id === Number(id));

  return (
    <Styled.MainWrapper>


      {blogPost ? (
        <>

          <h1>{blogPost.title}</h1>
          <img src={blogPost.image} alt={blogPost.title} />
          <p>Arweave transaction ID: {blogPost.transactionID}</p>
          <p>{blogPost.content}</p>
          


        </>
      ) : (
        <p>Blog post not found.</p>
      )}



    </Styled.MainWrapper>
  );
};



export default BlogPostPage;
