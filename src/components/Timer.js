import styled from 'styled-components';
import { FaPlay, FaUndoAlt, FaPause } from 'react-icons/fa';
import Button from './Button';

const StyledTimer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerLabel = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  font-family: Electrolize;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const Time = styled.p`
  font-family: Electrolize;
  font-size: 5rem;
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 5rem;
`;

const Controls = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const Timer = ({ timerLabel, time, reset }) => {
  return (
    <StyledTimer>
      <TimerLabel id='timer-label'>{timerLabel}</TimerLabel>
      <Time it='time-left'>{time}</Time>
      <Controls>
        <Button id='start_stop'>
          <FaPlay />
        </Button>
        <Button id='reset' handleClick={reset}>
          <FaUndoAlt />
        </Button>
      </Controls>
    </StyledTimer>
  );
};

export default Timer;
