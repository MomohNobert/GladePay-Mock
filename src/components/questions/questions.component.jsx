import React from 'react';

import { 
    QuestionsContainer, 
    QuestionContainer, 
    TitleContainer, 
    SingleContainer,
    H2Container,
    PContainer
 } from './questions.styles'

const Questions = () => {
    return (
        <QuestionsContainer>
            <TitleContainer>
                <span>- The future of Digital Banking</span>
                <h1>Frequently asked Questions.</h1>
            </TitleContainer>
            <QuestionContainer>
                <SingleContainer>
                    <H2Container>
                        <h2>What is the virtual prepaid credit card ?</h2>
                        <span>&and;</span>
                    </H2Container>
                </SingleContainer>
                <SingleContainer>
                    <H2Container>
                    <h2>How can I purchase the Glade Virtual card?</h2>
                    <span>&or;</span>
                    </H2Container>
                    <PContainer>Glade Virtual Card is free to access, simply sign up and create and account <span>here</span></PContainer>                    
                </SingleContainer>
                <SingleContainer>
                    <H2Container>
                        <h2>How can I receive the number of my card?</h2>
                        <span>&and;</span>      
                    </H2Container>              
                </SingleContainer>
                <SingleContainer>
                    <H2Container>
                        <h2>Is it acceptable World wide ?</h2>
                        <span>&and;</span> 
                    </H2Container>                   
                </SingleContainer>
            </QuestionContainer>
        </QuestionsContainer>
    )
};

export default Questions;