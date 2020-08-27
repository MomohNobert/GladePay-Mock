import React from 'react';

import { GetCardContainer, H1Container, ButtonContainer } from './get-card.styles';

const GetCard = () => {
    return (
        <GetCardContainer>
            <H1Container>
                <h1>Get a Gladepay Virtual Card</h1>
            </H1Container>
            <p>Sign up and enjoy all our benefits. It's Free, Simple and Easy.</p>
            <p>Get started today!</p>
            <ButtonContainer>GET YOUR CARD FREE</ButtonContainer>
        </GetCardContainer>
    )
};

export default GetCard;