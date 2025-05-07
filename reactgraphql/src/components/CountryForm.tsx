
import React, { useState } from 'react';
import CountrySelect from './CountrySelect';
import CountryDetails from './CountryDetails';

const CountryForm: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState('');
  const [submittedCode, setSubmittedCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedCode(selectedCode);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CountrySelect selectedCode={selectedCode} onChange={setSelectedCode} />
        <button type="submit" disabled={!selectedCode}>
             Search
        </button>
      </form>

      <CountryDetails code={submittedCode} />
    </>
  );
};

export default CountryForm;
