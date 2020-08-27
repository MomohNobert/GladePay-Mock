import React from 'react';

import { MainContainer, MessageContainer, ImageContainer, ButtonContainer } from './main.styles';
import SlideImage from './assets/slide.png';

const Main = () => {
    return (
        <MainContainer>
            <MessageContainer>
                <h1>A well-defined digital financial services company </h1>
                <p>with a drive to offer top-notch solutions using state of the art infrastructures to enhance innovations and help small businesses in Africa to grow globally.</p>
                <ButtonContainer>
                    EXPLORE
                </ButtonContainer>
            </MessageContainer>
            <ImageContainer>
                <img src={SlideImage} alt='slide' />
            </ImageContainer>
        </MainContainer>
    )
};

export default Main;