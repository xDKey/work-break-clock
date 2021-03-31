import styled from 'styled-components';
import Timer from './Timer';
import backgroundImage from '../assets/main-background.jpg';
import Control from './Control';

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
  const reset = () => {
    console.log('reset');
  };

  return (
    <BackgroundTimer>
      <Title>Work + break Clock</Title>
      <TimerWrapper>
        <Timer timerLabel='Work' time='00:00' reset={reset} />
      </TimerWrapper>
      <ControlWrapper>
        <Control controlType='break' time='5' />
        <Control controlType='work' time='20' />
      </ControlWrapper>
    </BackgroundTimer>
  );
};

export default App;
