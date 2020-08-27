import React from 'react';

import { 
    BenefitContainer, 
    DetailContainer, 
    ImageContainer, 
    TextContainer, 
    TitleContainer, 
    Image,
    OptionsContainer
} from './benefits.styles';
import PhoneImage from './assets/phone.png';

const Benefit = () => {
    return (
        <BenefitContainer>
            <DetailContainer>
                <ImageContainer>
                    <TitleContainer>
                        <span>- Digitally Secure your Transactions.</span>
                        <h1>Benefits.</h1>
                    </TitleContainer>
                    <Image>
                        <img src={PhoneImage} alt="phone" />
                    </Image>
                </ImageContainer>
                <TextContainer>
                    <OptionsContainer>
                        <h2>Security and Control</h2>
                        <p>set locked down* to a specified amount or set a credit limit for every payment and your bank account is never exposed.</p>
                    </OptionsContainer>
                    <OptionsContainer>
                        <h2>FREE of Charge</h2>
                        <p>Get access to Galde Virtual Cards and services absolutely free and zero charges.</p>
                    </OptionsContainer>
                    <OptionsContainer>
                        <h2>One Time Usage Option</h2>
                        <p>After every transaction you can instruct your Virtual Card to Self Destruct thereby keeping your information safe.</p>
                    </OptionsContainer>
                    <span>SEE MORE &or;</span>
                </TextContainer>
            </DetailContainer>
        </BenefitContainer>
    )
};

export default Benefit;