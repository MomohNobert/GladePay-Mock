import styled from 'styled-components';

export const GetCardContainer = styled.div`
    width: 100%;
    height: 40vh;
    background-color: rgba(1,186,239,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        color: grey;
    }
`

export const H1Container = styled.div`
    padding: 15px;
    font-family: 'Ramabhadra', sans-serif;
    font-weight: bold;
    color: #01BAEf;
`

export const ButtonContainer = styled.div`
    padding: 10px 35px;
    margin: 25px 0px;
    text-align: center;
    border-radius: 26px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: rgba(1,186,239,1);
    box-shadow: 0px 1px 1px rgba(0,0,0,0.8);
    width: 250px;
`