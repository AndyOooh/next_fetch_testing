import { get } from 'http';
import React from 'react';

type Props = {};

export default async function CountriesPage({}: Props) {
  const countries = await getCountries();

  return (
    <div>
      <h1>Countries Page</h1>
    </div>
  );
}
