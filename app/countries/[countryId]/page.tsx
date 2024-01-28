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

export const generateMetadata = async ({ params }: Props) => {
  const country = await getCountry(params.countryId);
  return {
    title: country.name,
    description: `This is the page of ${country.name}`,
  };
};

export default async function CountryPage({ params }: Props) {
  console.log('🚀 params:', params);
  const country = await getCountry(params.countryId);
  console.log('🚀  country:', country);

  return (
    <div className='min-h-screen w-full flex flex-col justify-between items-center'>
      <h1 className='text-4xl'>CountryPage</h1>
      <div>
        <h2>{country.name}</h2>
        <h2>{country.username}</h2>
      </div>

      <SomeComp />
    </div>
  );
}
