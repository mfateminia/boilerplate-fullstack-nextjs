import getConfig from 'next/config';
import styled from 'styled-components';

const StyledDiv =  styled.div`
  font-size: 20px;
`;

const Index = () => {
  const { publicRuntimeConfig } = getConfig();
    return <StyledDiv>The environment is: <strong>{publicRuntimeConfig.env}</strong></StyledDiv>;
  }
  
export default Index;