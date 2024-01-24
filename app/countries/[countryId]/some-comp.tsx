import React, { useState } from 'react';

type Props = {};

function SomeComp({}: Props) {
  const [var1, setVar1] = useState('from client comp');
  return <div>{var1}</div>;
}

export default SomeComp;
