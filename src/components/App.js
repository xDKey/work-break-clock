import styled from 'styled-components';
import Timer from './Timer';
import backgroundImage from '../assets/main-background.jpg';
import Control from './Control';
import { useEffect, useState } from 'react';

const Title = styled.div`
  font-family: Averia;
  font-size: 2rem;
  margin-top: 10px;
`;

const BackgroundTimer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-image: url(${backgroundImage});
  width: 386px;
  height: 420px;
  margin: auto;
  background-position: center;
  background-size: 540px;
  background-repeat: no-repeat;
  border-radius: 7%;
  box-shadow: 5px 5px 15px black;
`;

const TimerWrapper = styled.div`
  height: 160px;
  width: 280px;
  margin-top: 10px;
  z-index: 1;
`;

const ControlWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -30px;
`;

const App = () => {
  const [breakTime, setBreakTime] = useState(5);
  const [workTime, setWorkTime] = useState(25);
  const [isBreak, setIsBreak] = useState(false);
  const [currentTime, setCurrentTime] = useState(`${workTime}:00`);
  
  const clearAll = () => {
    setIsBreak(false)
    setBreakTime(5)
    setWorkTime(25)
  };

  useEffect(() => {
    if (isBreak) setCurrentTime(breakTime + ':00')
    if (!isBreak) setCurrentTime(workTime + ':00')
    console.log('---')
    console.log(currentTime)
  }, [isBreak, workTime])


  return (
    <BackgroundTimer>
      <Title>Work + break Clock</Title>
      <TimerWrapper>
        <Timer
          timerLabel={isBreak ? 'break' : 'work'}
          time={currentTime}
          clearAll={clearAll}
          setIsBreak={setIsBreak}
          isBreak={isBreak}
        />
      </TimerWrapper>
      <ControlWrapper>
        <Control
          controlType='break'
          time={breakTime}
          handleSetTime={setBreakTime}
        />
        <Control
          controlType='work'
          time={workTime}
          handleSetTime={setWorkTime}
        />
      </ControlWrapper>
    </BackgroundTimer>
  );
};

export default App;
