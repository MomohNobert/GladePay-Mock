import React from 'react';
import './App.css';
import styled from 'styled-components';

import Header from './components/header/header.component';
import Main from './components/main/main.component';
import Demo from './components/demo/demo.component';
import Benefit from './components/benefits/benefits.component';
import Questions from './components/questions/questions.component';
import GetCard from './components/get-card/get-card.component';
import Footer from './components/footer/footer.component';

const ContentStyle = styled.div`
  margin-top: 10vh;
`;

const HeaderStyle = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
`;


function App() {
  return (
    <div className="App">
      <HeaderStyle>
        <Header />
      </HeaderStyle>
      <ContentStyle>
          <Main />
          <Demo />
          <Benefit />
          <Questions />
          <GetCard />
          <Footer />
      </ContentStyle>
    </div>
  );
}

export default App;
