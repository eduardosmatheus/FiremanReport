import React from 'react';
import MultipleChoicesCard from '../../components/MultipleChoicesCard';

const options = [
  'Causado por animais',
  'Com meio de transporte',
  'Desmoronamento/Deslizamento',
  'Emergência médica',
  'Queda Altura > 3m',
  'Tentativa de suicídio',
  'Queda própria altura',
  'Afogamento',
  'Agressão',
  'Atropelamento',
  'Choque Elétrico',
  'Desabamento',
  'Doméstico',
  'Esportivo',
  'Intoxicação',
  'Queda Bicicleta',
  'Queda Moto',
  'Queda Nível < 2m',
  'Trabalho',
  'Transferência',
];

function PreHospital(props) {
  return (
    <MultipleChoicesCard
      title="Tipo de Ocorrência (Pré-hospitalar)"
      options={options}
      {...props}
    />
  );
}

export default PreHospital;
