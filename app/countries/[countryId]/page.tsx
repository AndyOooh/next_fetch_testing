import React from 'react';

type Props = {
  params: any;
};

function CountryPage({ params }: Props) {
  console.log('🚀  params:', params);
  return (
    <div>
      <h1>CountryPage</h1>
    </div>
  );
}

export default CountryPage;
