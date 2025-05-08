import React from 'react';
interface ContinentSelectorProps {
  continents: { code: string; name: string }[];
  selectedCode: string;
  onSelect: (code: string) => void;
}

const ContinentSelector: React.FC<ContinentSelectorProps> = ({ continents, selectedCode, onSelect }) => {
  return (
    <select value={selectedCode} onChange={(e) => onSelect(e.target.value)}>
      <option value="">Please Select Continent</option>
      {continents.map((continent) => (
        <option key={continent.code} value={continent.code}>
          {continent.name}
        </option>
      ))}
    </select>
  );
};

export default ContinentSelector;
