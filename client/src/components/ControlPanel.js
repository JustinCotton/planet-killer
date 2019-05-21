import React, {Component} from 'react';
import styled from 'styled-components';
import Planet from './Planet'

const Button = styled.a`
  border-radius: 5px;
  padding: 5px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  &:hover{
    background-color: #6FC6FF
  }
  &:active{
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
    color: white;
  }
`;

const SpareButton = styled(Button)`
  background-color: #2ecc71;
  box-shadow: 0px 5px 0px 0px #15B358;
  &:hover{
    background-color: #48E68B;
  }
`;

const TransformButton = styled(Button)`
  background-color: #f1c40f;
  box-shadow: 0px 5px 0px 0px #D8AB00;
  &:hover{
    background-color: #FFDE29;
  }
`;

const DestroyButton = styled(Button)`
  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #CE3323;
  &:hover{
    background-color: #FF6656;
  }
`;

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <SpareButton>
          Spare
        </SpareButton>
        <TransformButton onClick={this.toggleEditForm}>
          Transform
        </TransformButton>
        <DestroyButton onClick={this.deletePlanet}>
          Destroy
        </DestroyButton>
      </div>
    )
  }
}
export default ControlPanel;