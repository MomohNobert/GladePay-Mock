import styled from 'styled-components';

export const QuestionsContainer = styled.div`
    height: 80vh;
    width: 90%;
    margin: auto;
    display: flex;
`

export const TitleContainer = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    span, h1 {
        width: 60%;
    }

    h1 {
        font-family: 'Ramabhadra', sans-serif;
        color: #01BAEf;
        font-size: 45px;
        line-height: 40px;
    }

    span {
        font-weight: bold;
        padding: 5px 0px;
    }
`

export const H2Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
        font-weight: bold;
        font-size: 20px;
    }
`

export const QuestionContainer = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const SingleContainer = styled.div`
    width: 80%;
    box-shadow: 0px 0.5px 0.5px rgba(0,0,0,0.3);
    padding: 15px 20px;
    border: 0.5px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    transition: all 0.3s linear;
    color: rgba(0,0,0,0.7);

    &:hover {
        box-shadow: 0.5px 0.5px 0.5px #01BAEF;
        border: 0.5px solid #01BAEF;
        cursor: pointer;
    }
`

export const PContainer = styled.div`
    font-size: 15px;
    color: grey;
    font-weight: bold;
    padding: 10px;

    span {
        font-family: 'Ramabhadra', sans-serif;
        color: #01BAEf;       
    }
`