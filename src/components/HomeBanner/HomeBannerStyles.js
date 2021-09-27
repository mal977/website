import styled from "styled-components";
import Button from "@mui/material/Button";

export const HomeBannerWrapper = styled.div`
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;  
    margin-bottom: auto;
    margin-top: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
`;

export const HomeBannerContent = styled.div`
    font-family: 'Hahmlet', sans-serif;
    font-size: 4em;
    color: whitesmoke;
    display: block;
`;

export const HomeBannerImg = styled.img `
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
`;

export const HomeButtonHolder = styled.div `
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
`;
