import styled from 'styled-components';

export const BenefitContainer = styled.div`
    width: 100%;
    margin: auto;
    margin-bottom: 10vh;
    height: 90vh;
    background-color: rgba(1,186,239,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DetailContainer = styled.div`
    height: 90%;
    width: 80%;
    display: flex;
    flex-direction: row;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
`

export const Image = styled.div`
    height: 90%;

    img {
        height: 110%;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    justify-content: space-evenly;

    span {
        font-weight: bold;
        font-size: 20px;
        color: #01BAEF;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 9%;
    height: 10%;
    width: 40%;

    span {
        margin-top: 30px;
        font-weight: bold;
    }

    h1 {
        font-family: 'Ramabhadra', sans-serif;
        color: #01BAEf;
        font-size: 35px;
    }
`

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;

    p {
        color: grey;
    }
`