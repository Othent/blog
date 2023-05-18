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
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 0.5rem;
  background-color: white;
  width: 100%;
`;
export const BlogMenuButton = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 0.6rem;
`;





export const HeroBlog = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  h1 {
    font-size: 2rem;
  }
  img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  p {
    font-size: 0.8rem;
  }
`;
export const MainBlogContent = styled.div `
  border-top-right-radius: 8px;
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
    background: black;
    color: white;
    padding: 5px;
  }
`;




// shared blog styling
export const BlogButton = styled(Button)`
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
    background: black;
    color: white;
    padding: 5px;
  }
`;







export const BlogMenuFooter = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 0.5rem;
  background-color: white;
  width: 100%;
`;
export const BlogMenuFooterButton = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 0.6rem;
`;

