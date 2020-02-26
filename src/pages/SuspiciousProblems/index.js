import React from 'react';
import MultipleChoicesCard from '../../components/MultipleChoicesCard';

const options = [
  'Psiquiátrico',
  'Óbito',
  'Diabetes',
  'Hiperglicemia',
  'Hipoglicemia',
  'Parto Emergencial',
  'Gestante',
  'Hemorragia Excessiva',
  'Transporte Aéreo',
  'Transporte Clínico',
  'Transporte Emergencial',
  'Transporte Pós-trauma',
  'Transporte SAMU',
  'Sem Remoção',
];

function SuspiciousProblems(props) {
  return (
    <MultipleChoicesCard
      title="Problemas encontrados suspeitos"
      options={options}
      {...props}
    />
  );
}

export default SuspiciousProblems;
