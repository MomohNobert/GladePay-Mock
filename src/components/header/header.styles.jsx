import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    font-family: 'Ramabhadra', sans-serif;
    color: rgba(46,41,78,1);
    transition: all 0.5s linear;
    font-weight: bold;
    background-color: ${props => !props.position ? "none" : "rgba(255, 255, 255, 0.95)"};
    box-shadow: ${props => !props.position ? "none" : "0px 1px 1px rgba(0,0,0,0.1)"};
`

export const LogoContainer = styled.div`
    img {
        height: 5vh;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 60%;
`

export const LinkContainer = styled.div`
    padding: 2.5px 35px;
    border-radius: 26px;
    font-size: 18px;
    cursor: pointer;
    
    :nth-child(4) {
        border: 2px solid #01BAEF;
    }
`