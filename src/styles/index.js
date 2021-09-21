import styled, { keyframes, createGlobalStyle } from "styled-components";
import liked from "../images/red-heart-icon.svg";
import notliked from "../images/heart-outine.svg";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 50px;
  background: black;

  img {
    max-width: 600px;
    width: 100%;
  }
`;

export const HomeWrapper = styled.section`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
  font-family: "Open Sans", sans-serif;
  img {
    width: 100%;
    display: block;
    border-radius: 5px 5px 0 0;
  }
`;

export const PhotoContainer = styled.div`
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 10px;
  padding-top: 0;
  h4 {
    padding-left: 5px;
    margin-bottom: 5px;
    margin-top: 0;
  }
`;

export const PhotoInfo = styled.div`
  padding-left: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

export const LikeButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.liked ? liked : notliked)});
  padding: 5px 12px;
  text-indent: -100px;
  overflow: hidden;
  margin-top: 5px;
  margin-right: 5px;
`;

export const Loading = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -100px;
  color: #8a2be2;
  font-size: 20px;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #8a2be2;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;

export const PhotoTitle = styled.div`
  margin-top: 5px;
  p {
    font-size: 10px;
  }
  h5 {
    margin: 0;
  }
`;
