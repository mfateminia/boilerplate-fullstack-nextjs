import getConfig from 'next/config';

const Index = () => {
  const { publicRuntimeConfig } = getConfig();
    return <div>The environment is: <strong>{publicRuntimeConfig.env}</strong></div>;
  }
  
export default Index;