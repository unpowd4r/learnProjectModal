import React from 'react';
import './App.css';

import {Button} from "./components/Button.styled";
import {Heading, Paragraph} from "./components/Text.styled";
import {Box} from "./components/Box.styled";
import {Img} from "./components/Img.styled";

function App() {
  return (
    <div className="App">
      <Box>
          <Img src={process.env.PUBLIC_URL + '/Rectangle.png'} alt="Изображение" />
          <Heading>Headline</Heading>
          <Paragraph>Faucibus. Faucibus. Sit sit sapien sit <br/> tempusrisu ut. Sit molestie ornare in venen.</Paragraph>
          <div className='Buttons'>
              <Button>See more</Button>
              <Button style={{ marginLeft: '12px' }}>Save</Button>
          </div>
      </Box>
    </div>
  );
}

export default App;






