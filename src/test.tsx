import React from 'react';

interface ITestProps {
 name: string,
}

export const Test: React.FC<ITestProps> = ({name}) => {
    return <div>{`Welcome ${name}!`}</div>
}