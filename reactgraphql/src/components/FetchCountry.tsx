import React, { useEffect, useState } from 'react';

interface Language {
  code: string;
  name: string;
  native: string;
}

interface State {
  name: string;
}

interface Country {
  code: string;
  name: string;
  capital: string;
  languages: Language[];
  states: State[];
}

interface Continent {
  name: string;
  code: string;
  countries: Country[];
}
const QUERY = `
  query GetQueryInfo {
    continents {
      name
      code
      countries {
        code
        name
        capital
        languages {
          code
          name
          native
        }
        states {
          name
        }
      }
    }
  }
`;

const Continents: React.FC = () => {
  const [data, setData] = useState<Continent[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContinents = async () => {
      try {
        const res = await fetch('https://countries.trevorblades.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: QUERY }),
        });

        const json = await res.json();

        if (json.errors) {
          throw new Error(json.errors[0].message);
        }

        setData(json.data.continents);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContinents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error：{error}</p>;

  return (
    <div>
      <h1>🌍 Information of Contient</h1>
      {data?.map((continent) => (
        <div key={continent.code} style={{ marginBottom: '2rem' }}>
          <h2>{continent.name} ({continent.code})</h2>
          {continent.countries.map((country) => (
            <div key={country.code} style={{ paddingLeft: '1rem' }}>
              <p><strong>Country：</strong>{country.name} ({country.code})</p>
              <p><strong>Capital：</strong>{country.capital}</p>
              <p><strong>Language：</strong>{country.languages.map((lang) => lang.name).join(', ')}</p>
              <p><strong>Provience：</strong>{country.states.map((state) => state.name).join(', ') || '無資料'}</p>
              <hr />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Continents;
