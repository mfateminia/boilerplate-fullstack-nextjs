import getConfig from 'next/config';
import styled from 'styled-components';
import { Test } from '../src/test';

const StyledDiv =  styled.div`
  font-family: Sans-serif;
  padding: 50px;
  font-size: 20px;
`;

const Index = () => {
  const { publicRuntimeConfig } = getConfig();
    return (
      <>
      <StyledDiv>
        <Test name="Ali"></Test>
        The environment is: <strong>{publicRuntimeConfig.env}</strong></StyledDiv>
      </>
    )
  }
  
export default Index;