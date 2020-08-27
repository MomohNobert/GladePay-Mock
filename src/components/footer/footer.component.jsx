import React from 'react';

import { 
    FooterContainer, 
    DetailContainer, 
    SpanContainer, 
    FootMessageContainer,
    MessageContainer,
    NewsletterContainer,
    TCContainer,
    SponsorContainer,
    ButtonContainer,
    ImageContainer
} from './footer.styles';
import AppStoreLogo from './assets/app-store.png';
import PlayStoreLogo from './assets/play-store.png';
import MasterCardLogo from './assets/mastercard.png';
import PCIDSS from './assets/pci-dss.png';
import VisaLogo from './assets/visa.png';


const Footer = () => {
    return (
        <FooterContainer>
            <DetailContainer>
                <MessageContainer>
                    <p>Glade designed and operates the website & app. It is a trading name of GladePay Technology Limited.</p>
                </MessageContainer>
                <NewsletterContainer>
                    <h2>Newsletter</h2>
                    <p>Sign up for alerts, special offers news, education and updates.</p>
                    <ButtonContainer>
                        <p>gladepayvirtual@xyz.com</p>
                        <span>GO</span>
                    </ButtonContainer>
                </NewsletterContainer>
                <TCContainer>
                    <span>Terms and Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Contact Us</span>
                </TCContainer>
                <SponsorContainer>
                    <ImageContainer>
                        <img src={AppStoreLogo} alt="app store" />
                    </ImageContainer>
                    <ImageContainer>
                        <img src={PlayStoreLogo} alt="app store" />
                    </ImageContainer>
                    <ImageContainer>
                        <img src={MasterCardLogo} alt="mastercard" />
                    </ImageContainer>
                    <ImageContainer>
                        <img src={PCIDSS} alt="pci dss" />
                    </ImageContainer>
                    <ImageContainer>
                        <img src={VisaLogo} alt="visa logo" />
                    </ImageContainer>
                </SponsorContainer>
            </DetailContainer>
            <SpanContainer />
            <FootMessageContainer>
                ©2020 GladePayDigital
            </FootMessageContainer>
        </FooterContainer>
    )
};

export default Footer;