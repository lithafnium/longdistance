import styled from "styled-components";

export const Container = styled.div`
  margin: 1em 0 1em 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  & div {
    border: 1px solid #ca4e79;
    height: 120px;
    width: 100%;
  }
`;

export const DayHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    font-size: 11px;
    color: #70757a;
  }
`;

export const DaySquareContainer = styled.div`
  position: relative;
`;

export const Label = styled.p`
  position: absolute;
  margin: 0px;

  font-size: 0.8rem;

  top: 5px;
  left: 5px;
`;

export const CalendarHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CalendarHeaderLeft = styled.div`
  width: 350px;
  display: grid;
  align-items: center;
  grid-gap: 0.5em;

  grid-template-columns: 1fr 1fr 4fr;
  margin: 1em 0 1em 0;

  & h3 {
    margin: 0;
  }
`;

export const CalendearHeaderRight = styled.div`
  width: fit-content;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5em;
  align-items: center;

  & p {
    border-radius: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    margin: 0px;
    font-size: 0.8rem;
  }
`;

export const Arrows = styled.div`
  display: flex;
`;

export const Arrow = styled.div<{ disabled?: boolean }>`
  font-size: 2em;
  display: flex;
  align-items: center;

  color: ${(props) => (props.disabled ? "none" : "#513252")};

  &:hover {
    cursor: pointer;
  }

  transition: 0.12s;
`;
