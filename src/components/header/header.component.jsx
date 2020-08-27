import React, {useState, useEffect} from 'react';

import { HeaderContainer, LogoContainer, LinksContainer, LinkContainer } from './header.styles';

import logo from './assets/glade.png';

const Header = () => {
    const [ position, setPosition ] = useState(null);
    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition > 15) {
            setPosition(true)
        } else {
            setPosition(null)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    }, []);
    return (
        <HeaderContainer position={position}>
            <LogoContainer>
                <img src={logo} alt='logo' />
            </LogoContainer>
            <LinksContainer>
                <LinkContainer>
                    Create New Card
                </LinkContainer>
                <LinkContainer>
                    Features
                </LinkContainer>
                <LinkContainer>
                    My Transaction
                </LinkContainer>
                <LinkContainer>
                    Login
                </LinkContainer>
            </LinksContainer>
        </HeaderContainer>
    )
};

export default Header;