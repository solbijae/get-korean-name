import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FEB8C9;
    font-size: 5.5rem;
    color: #fff;
    position: relative;
    overflow: hidden;
`;

export const TextWrapper = styled.div`
    position: absolute;
    top: 15%;
    transform: translateY(-15%);
    left: 5%;
`;

export const Circle = styled.div`
    width: 70%;
    height: 60%;
    background-color: #ffa5ba;
    border-radius: 50%;
    position: absolute;
    bottom: 10%;
    right: 65%
`;

export const Circle2 = styled.div`
    width: 80%;
    height: 60%;
    background-color: #ffa5ba;
    border-radius: 50%;
    position: absolute;
    bottom: -20%;
    right: 35%
`;