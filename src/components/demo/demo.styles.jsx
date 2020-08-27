import styled from 'styled-components';

import Background from './assets/woman.png';

export const DemoContainer = styled.div`
    width: 80%;
    height: 50vh;
    margin: auto;
    margin-top: 20vh;
    margin-bottom: 10vh;
    border-radius: 2px;
    display: flex;
`

export const VideoContainer = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${Background});
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const TextContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span, h2, p {
        width: 80%;
        margin-left: 25%;
    }

    span {
        font-weight: bold;
        font-size: 17px;
    }

    h2 {
        font-family: 'Ramabhadra', sans-serif;
        font-size: 35px;
        color: #01BAEf;
    }

    p {
        color: rgba(0,0,0,0.5);
        font-weight: bold;
    }
`

export const ButtonContainer = styled.div`
    padding: 10px 35px;
    margin: 25px 0px;
    text-align: center;
    margin-left: 25%;
    border-radius: 26px;
    font-size: 20px;
    color: #01BAEf;
    font-weight: bold;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    width: 150px;
    font-family: 'Ramabhadra', sans-serif;
`