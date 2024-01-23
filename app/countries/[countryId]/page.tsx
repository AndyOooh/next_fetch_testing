import React from 'react';

type Props = {
  params: any;
};

function CountryPage({ params }: Props) {
  console.log('🚀  params:', params)
  return <div>page</div>;
}

export default CountryPage;
