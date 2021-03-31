import styled from 'styled-components';
import { FaPlay, FaUndoAlt, FaPause } from 'react-icons/fa';
import Button from './Button';
import { useEffect, useState } from 'react';

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

const Timer = ({ timerLabel, time, clearAll }) => {
  const [timeLeft, setTimeLeft] = useState(time.split(':'));
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRun) {
      intervalId = setInterval(computateTime, 1000);
    }

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    setTimeLeft(time.split(':'))
  }, [time])

  const computateTime = () => {
    const [min, sec] = timeLeft;

    const computedMin = +sec === 0 ? min - 1 : min;
    const computedSec = +sec > 0 ? sec - 1 : 59;

    const newMin =
      String(computedMin).length === 1 ? '0' + computedMin : computedMin;
    const newSec =
      String(computedSec).length === 1 ? '0' + computedSec : computedSec;

    setTimeLeft([newMin, newSec]);
  };

  const reset = () => {
    clearAll();
    setIsRun(false);
    setTimeLeft(time.split(':'));
  };

  return (
    <StyledTimer>
      <TimerLabel id='timer-label'>{timerLabel}</TimerLabel>
      <Time it='time-left'>{timeLeft.join(':')}</Time>
      <Controls>
        <Button id='start_stop' onClick={() => setIsRun(!isRun)}>
          {isRun ? <FaPause /> : <FaPlay />}
        </Button>
        <Button id='reset' onClick={reset}>
          <FaUndoAlt />
        </Button>
      </Controls>
    </StyledTimer>
  );
};

export default Timer;
