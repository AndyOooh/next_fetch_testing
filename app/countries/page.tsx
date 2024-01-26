import React from 'react';
import { getAllCountries } from '../services/getAllCountries';
import Link from 'next/link';

type Props = {};

export default async function CountriesPage({}: Props) {
  const countries = await getAllCountries();

  return (
    <div className='min-h-screen'>
      <h1>Countries Page</h1>
      <h2>
        <Link href='/'>Back to Home</Link>
      </h2>
    </div>
  );
}
