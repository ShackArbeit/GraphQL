// src/components/CountrySelect.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/queries';

interface CountrySelectProps {
  selectedCode: string;
  onChange: (code: string) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ selectedCode, onChange }) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <select value={selectedCode} onChange={(e) => onChange(e.target.value)}>
      <option value="">-- Please Select --</option>
      {data.countries.map((country: { code: string; name: string }) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
