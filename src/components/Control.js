import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Button from './Button';

const StyledTimer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`;

const TimerLabel = styled.p`
  font-family: Averia;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const Time = styled.p`
  width: 100px;
  height: 55px;
  margin-top: 9px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-family: Electrolize;
`;

const Controls = styled.div`
  margin-top: 4px;
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const Control = ({ controlType, time }) => {
  return (
    <StyledTimer>
      <TimerLabel id={controlType + '-label'}>
        {controlType === 'break' ? 'Break' : 'Work'}
      </TimerLabel>
      <Time it={controlType + '-length'}>{time}</Time>
      <Controls>
        <Button id={controlType + '-increment'}>
          <FaArrowUp />
        </Button>
        <Button id={controlType + '-decrement'}>
          <FaArrowDown />
        </Button>
      </Controls>
    </StyledTimer>
  );
};

export default Control;
