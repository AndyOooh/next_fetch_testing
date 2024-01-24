import React from 'react';
import { getAllCountries } from '../services/getAllCountries';
import Link from 'next/link';

type Props = {};

export default async function CountriesPage({}: Props) {
  const countries = await getAllCountries();

  return (
    <section className='min-h-screen'>
      <h1>Countries Page</h1>
      <h2>
        <Link href='/'>Back to Home</Link>
      </h2>
      <br />
      {countries.map((country: any, index: number) => {
        return (
          //   <div key={country.id + index}>
          <div key={country.id}>
            <p>
              <Link href={`/countries/${country.id}`}>{country.name}</Link>
            </p>
            <br />
          </div>
        );
      })}
    </section>
  );
}
