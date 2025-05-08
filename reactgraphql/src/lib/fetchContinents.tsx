export const fetchContinents = async () => {
      const QUERY = `
        query {
          continents {
            code
            name
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
    
      return json.data.continents as {
        code: string;
        name: string;
        countries: {
          code: string;
          name: string;
          capital: string;
          languages: { code: string; name: string; native: string }[];
          states: { name: string }[];
        }[];
      }[];
};
    