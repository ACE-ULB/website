import React, { useState } from 'react';
import { filterYears } from "../utils/content";

export default () => {
  const yearsDirectory = filterYears('src/assets/comite');
  const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const comiteMembers = comiteData[selectedYear] || [];

  return (
    <div>
      <h2>Comité {selectedYear}</h2>
      <YearSelector years={Object.keys(yearsDirectory)} onSelect={handleYearChange} />
      <ul>
        {`../assets/comite/${years}/comite.json`.map((member) => (
          <li key={member.id}>
            {/* Afficher les détails du membre */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const YearSelector = ({ years, onSelect }) => {
  return (
    <div>
      <label>Sélectionnez une année :</label>
      <select onChange={(e) => onSelect(e.target.value)}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};