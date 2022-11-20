import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #525252; 
  box-shadow: 0 0 20px 3px;
  > svg {
    position: fixed;
    background-color : #4A47A3;
    color: white;
    width: 45px;
    height: 45px;
    margin-top: 32px;
    margin-left: 100px;
    cursor: pointer;
  }
`;