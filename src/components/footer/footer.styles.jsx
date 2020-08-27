import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 35vh;
    width: 100%;
    background-color: #1f1a38;
    display: flex;
    flex-direction: column;
`

export const DetailContainer = styled.div`
    height: 80%;
    color: rgba(255,255,255,0.75);
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width: 90%;
`

export const SpanContainer = styled.div`
    margin: 10px 5vw;
    text-align: center;
    border-bottom: 1px solid grey;
`

export const FootMessageContainer = styled.div`
    height: 15%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
`

export const MessageContainer = styled.div`
    width: 23%;
    display: flex;
    flex-direction: column;
`

export const NewsletterContainer = styled.div`
    width: 23%;
    display: flex;
    flex-direction: column;

    h2 {
        color: white;
    }
`

export const TCContainer = styled.div`
    width: 23%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SponsorContainer = styled.div`
    width: 23%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const ButtonContainer = styled.div`
    padding: 10px 22.5px;
    margin: 15px 0px;
    text-align: center;
    border-radius: 26px;
    font-size: 13.5px;
    color: grey;
    background-color: white;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.8);
    width: 195px;
    display: flex;
    justify-content: space-between;

    p {
        border-right: 1px solid rgba(0,0,0,0.7);
        padding-right: 10px;
    }

    span {
        padding-left: 8.5px;
        color: rgba(1,186,239,1);
        font-size: 17.5px;
        font-weight: bold;
    }
`

export const ImageContainer = styled.div`
    width: 30%;
    padding: 5px;

    img {
        width: 100%;
    }

    :nth-child(1) {
        width: 43%;
    }

    :nth-child(2) {
        width: 43%;
    }
`