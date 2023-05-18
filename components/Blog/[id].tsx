import React from 'react';
import { useRouter } from 'next/router';
import * as Styled from './styles';
import blogEntries from './blogEntries';


const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('here, it is', id)

  // Use the 'id' parameter to fetch the specific blog post data
  // or retrieve it from your existing data source

  return (
    <Styled.MainWrapper>
      Hello
      Hello
      Hello
      Hello
      Hello
      Hello
      Hello
      Hello
      Hello
      Hello
      Hello
    </Styled.MainWrapper>
  );
};

export default BlogPostPage;
