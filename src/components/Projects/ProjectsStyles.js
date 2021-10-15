import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  padding: 3rem;    
  justify-content: space-evenly;
  place-items: start center;
  column-gap: 2rem;
  row-gap: 3rem;
  width: 80vw;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
    padding-bottom: 0;
    width: 100%;

  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 600px;
  height: fit-content;
  background: white;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }
`;
export const Img = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;
export const HeaderThree = styled.h3`
  font-weight: 300;
  letter-spacing: 2px;
  color: #272727;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3em" : "2em")};
  font-family: "Roboto Slab", serif;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.title ? "2em" : "1em")};

  }
`;
export const HeaderTwo = styled.h2`
  font-weight: 300;
  letter-spacing: 2px;
  color: #272727;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "2em" : "1.5em")};
  font-family: "Roboto Slab", serif;
`;
export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: black;
  font-style: 1.5rem;
  line-height: 24px;
  font-family: 'Roboto', sans-serif;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  }
`;
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem;
`;
export const Tag = styled.li`
  display: inline-block;
  color: #878787;
  font-size: 1rem;
  border-radius: 4px;
  padding: 0.4em;
  margin: 4px 4px 4px 0px;
  border: 2px solid #878787;
`;
export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 1em 0 1em 0;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  border-radius: 16px;
  border: 2px solid #878787;
  padding: 0.2rem 1rem;
  transition: 0.5s;
  text-decoration: none;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    transform: translate(0, -5px);
    transition: all 0.5s;
    -webkit-transition: all 0.2s;
  }
`;
