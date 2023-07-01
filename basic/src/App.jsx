import React, { useEffect, useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShewFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShewFlag);
  };
  useEffect(() => {
    if (num % 3 === 0) {
      faceShewFlag || setFaceShowFlag(true);
    } else {
      faceShewFlag && setFaceShowFlag(false);
    }
    //eslint-disable-next-line
  }, [num]);
  
  return(
    <>
      <h1 style={{ color: 'red' }}>hello</h1>
      <ColorfulMessage color="blue">お元気ですかよ</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShewFlag && <p>＼(^o^)／</p>}
      
    </>
  );
}

export default App;
