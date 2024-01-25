import { getAllCountries } from '@/app/services/getAllCountries';
import { getCountry } from '@/app/services/getCountry';
import React from 'react';
import SomeComp from './some-comp';

type Props = {
  params: any;
};

export const generateStaticParams = async () => {
  const countries = await getAllCountries();

  return countries.map((country: any) => ({
    countryId: country.id.toString(),
  }));
};

export default async function CountryPage({ params }: Props) {
  console.log('🚀  params:', params);
  const country = await getCountry(params.countryId);
  //   console.log('🚀  country:', country);

  return (
    <div className='min-h-screen w/full'>
      <h1>CountryPage</h1>
      <h2>{country.name}</h2>
      <SomeComp />
    </div>
  );
}
