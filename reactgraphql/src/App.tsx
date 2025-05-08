import React, { useState, Suspense, use } from 'react';
import { fetchContinents } from './lib/fetchContinents';
import ContinentSelector from './components/ContinentSelector';
import ContinentDetails from './components/ContientDetail';

const continentsPromise = fetchContinents();

const App: React.FC = () => {
  const continents = use(continentsPromise);
  const [selectedCode, setSelectedCode] = useState<string>('');

  const selectedContinent = continents.find((c) => c.code === selectedCode);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🌍 Information of Continent and Countries</h1>
      <ContinentSelector
        continents={continents.map(({ code, name }) => ({ code, name }))}
        selectedCode={selectedCode}
        onSelect={setSelectedCode}
      />
      <Suspense fallback={<p>Data Loading...</p>}>
        {selectedContinent && <ContinentDetails continent={selectedContinent} />}
      </Suspense>
    </div>
  );
};

export default App;


// import Contents from "./components/FetchCountry"

// const App = () => {
//   return (
//     <div style={{padding:'2rem'}}>
//       <Contents />
//     </div>
//   )
// }

// export default App

