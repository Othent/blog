import styled from 'styled-components';
import Button from '../Button'
import { FeatureHeaderText, FeaturesContainer } from '../common';



export const MainWrapper = styled(FeaturesContainer)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  flex-direction: column;
  background-size: 40% 85%, 110% 80%;
  background-repeat: no-repeat, no-repeat;
  background-position: -15% 160%, -380% 80%;
  background-image: url('/bkg-squares.svg'), url('bkg-circles.svg');
  margin-top: 0;
`;
export const heroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;





export const BlogMenu = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;
export const BlogMenuButton = styled(Button)`
  font-size: 0.6rem;
`;





export const HeroBlog = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 2rem;

  img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      border-radius: 8px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
`;

export const MainBlogContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding: 2.5rem;
  background-color: white;
  gap: 1.5rem;
  width: 50%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;


  @media (max-width: 768px) {
    width: 100%;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    font-size: 0.5rem;
  }

  .category {
    background: #2375ef;
    color: white;
    padding: 5px;
    font-size: 0.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
export const MainBlogButton = styled(Button)`
  font-size: 0.8rem;
  width: fit-content;
`;






// sub section blogs
export const Subsection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); 
  grid-gap: 20px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr); 
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
  }
`;
export const SubsectionBlog = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  h2 {
    font-size: 1rem;
  }
  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    max-width: 100%;
  }
  p {
    font-size: 0.8rem;
  }
`;
export const SubBlogContent = styled.div `
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem;
  background-color: white;
  gap: 1.5rem;
  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    font-size: 0.5rem;
  } 
  .category {
    background: #2375ef;
    color: white;
    padding: 5px;
    font-size: 0.5rem;
  }
`;
export const SubBlogButton = styled(Button)`
  font-size: 0.8rem;
  width: fit-content;
  background: white;
`;






export const BlogMenuFooter = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;
export const BlogMenuFooterButton = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 0.6rem;
`;








// individual blogs

export const BlogPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 80%;
  margin-top: 2rem;
  padding: 10%;
  padding-top: 7.5%;
  padding-bottom: 7.5%;
  gap: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    padding: 5%;
    margin-top: 4rem;
    .blog-img {
      width: 100%;
    }
  }


  .content {
    padding-top: 5%;
    padding-bottom: 5%;
    border-top: 0.1px solid black;
    border-bottom: 0.1px solid black;
    width: 100%;
  }

  .about-author {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .left {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .right {
          display: flex;
          justify-content: center;
          align-items: left;
          flex-direction: column;
        }
      }

      .right {
        height: 100%;
      }
    }

    .footer {
      width: 100%;
      text-align: left;
    }
  }
`;
export const AuthorImg = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`
export const AuthorTwitter = styled.img`
  width: 1rem;
`



export const BlogHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  gap: 1rem;

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    font-size: 0.8rem;
  }
  .category {
    background: #2375ef;
    color: white;
    padding: 5px;
    font-size: 0.5rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {

    h1 {
      font-size: 2rem;
    }
  }
`;

export const RecommendedBlogsTitle = styled.h1 `
  width: 80%;
  text-align: left;
  margin-bottom: 1rem;
`;
export const RecommendedBlogs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    padding: 5%;
  }
`;
