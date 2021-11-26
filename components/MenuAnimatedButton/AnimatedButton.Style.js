import styled from 'styled-components';

export const Card = styled.div`
  position: relative;

  width: 100px;
  height: 100px;

  background: #fff;

  border-radius: 25px;

  display: flex;
  flex-direction: column;
  

  justify-content: center;
  align-items: center;

  cursor: pointer;
  overflow: hidden;
  transition: 0.5s;

  &.active span:nth-child(1) {
    transform: translateY(0px) rotate(45deg);
    width: 35px;
    left: 35%;
    transition-delay: 0.125s;
  }
  &.active span:nth-child(2) {
    left: 35%;
    transform: translateX(150px);
  }
  &.active span:nth-child(3) {
    transform: translateY(0px) rotate(315deg);
    width: 35px;
    left: 35%;
    transition-delay: 0.250s;
  }

`

export const Line = styled.span`
  transition: 0.5s;

  position: absolute;
  background-color: #ffA800;
  width: ${props => props.large ? 35 : props.half ? 25 : 17}px;
  height: 4px;
  border-radius: 4px;
  &:nth-child(1) {
    transform: translateY(-15px);
    left: 35%;
  }
  &:nth-child(2) {
    left: 35%;

    
  }
  &:nth-child(3) {
    transform: translateY(15px);
    left: 35%;
  }
`