import styled from 'styled-components';

import Background from './assets/man.png'

export const MainContainer = styled.div`
    height: 100vh;
    margin-top: -10vh;
    display: flex;
    align-items: center;
    background-image: url(${Background});
    background-position: center;
`

export const MessageContainer = styled.div`
    width: 45%;

    h1, p {
        margin-left: 10vw;
    }

    h1 {
        font-size: 75px;
        width: 110%;
        line-height: 65px;
        font-family: 'Ramabhadra', sans-serif;
        color: rgba(46,41,78,1);
    }

    p {
        font-size: 20px;
        margin-top: 10px;
        width: 60%;
        color: rgba(46,41,78,0.9);
    }
`

export const ImageContainer = styled.div`
    width: 55%;

    img {
        margin-top: 35vh;
        width: 100%;
    }
`

export const ButtonContainer = styled.div`
    padding: 5px 35px;
    margin: 25px 0px;
    margin-left: 10vw;
    width: 15%;
    text-align: center;
    border-radius: 26px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: rgb(249,87,56);
    box-shadow: 0px 1px 1px rgba(0,0,0,0.8);
    font-family: 'Ramabhadra', sans-serif;
`