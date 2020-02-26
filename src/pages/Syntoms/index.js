import React from 'react';
import MultipleChoicesCard from '../../components/MultipleChoicesCard';

const options = [
  'Abdomem sensível ou rígido',
  'Afundamento de crânio',
  'Agitação',
  'Amnésia',
  'Apineia',
  'Bradicardia',
  'Bradipineia',
  'Bronco-aspirando',
  'Cefaleia',
  'Cianose',
  'Convulsão',
  'Desvio de Traqueia',
];

function Syntoms(props) {
  return (
    <MultipleChoicesCard
      title="Problemas encontrados suspeitos"
      options={options}
      {...props}
    />
  );
}

export default Syntoms;
