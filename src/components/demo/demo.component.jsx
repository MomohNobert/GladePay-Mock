import React from 'react';

import { DemoContainer, VideoContainer, TextContainer, ButtonContainer } from './demo.styles';
import PlayIcon from './assets/play.png';

const Demo = () => {
    return (
        <DemoContainer>
            <VideoContainer>
                <img src={PlayIcon} alt="play icon" />
            </VideoContainer>
            <TextContainer>
                <span>- The future of Digital Banking.</span>
                <h2>Glade Virtual Card.</h2>
                <p>Click Play to see what Glade is about and how it works.</p>
                <ButtonContainer>WATCH DEMO</ButtonContainer>
            </TextContainer>
        </DemoContainer>
    )
};

export default Demo;