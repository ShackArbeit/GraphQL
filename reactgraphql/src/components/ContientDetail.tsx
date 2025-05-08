import React from 'react';

interface ContinentDetailsProps {
  continent: {
    code: string;
    name: string;
    countries: {
      code: string;
      name: string;
      capital: string;
      languages: { code: string; name: string; native: string }[];
      states: { name: string }[];
    }[];
  };
}

const ContinentDetails: React.FC<ContinentDetailsProps> = ({ continent }) => {
  return (
    <div>
      <h2>{continent.name} ({continent.code})</h2>
      {continent.countries.map((country) => (
      <>
      <div style={{fontSize:'3rem'}}>-----------------------------------------------------------------------------------------</div>
        <div key={country.code} style={{ marginBottom: '1rem' }}>
          <p><strong>Country：</strong>{country.name}</p>
          <p><strong>Capital：</strong>{country.capital}</p>
          <p><strong>Language：</strong>{country.languages.map((l) => l.name).join(', ')}</p>
          <p><strong>States：</strong>{country.states.map((s) => s.name).join(', ') || 'None'}</p>
        </div>
        </>
      ))}
    </div>
  );
};

export default ContinentDetails;
