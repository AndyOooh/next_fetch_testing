import React from 'react';
import { getAllCountries } from '../services/getAllCountries';
import Link from 'next/link';

type Props = {};

export default async function CountriesPage({}: Props) {
  const countries = await getAllCountries();
  console.log('🚀  countries:', countries);

  return (
    <section>
      <h1>Countries Page</h1>
      <h2>
        <Link href='/'>Back to Home</Link>
      </h2>
      <br />
      {countries.map(country => {
        return (
          <>
            <p key={country.id}>
              <Link href={`/users/${country.id}`}>{country.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
}
