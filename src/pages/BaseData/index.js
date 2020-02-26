import React, { useState } from 'react';
import { Input, Card, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const BaseData = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onDateChange = (_, selectedDate) => {
    setDate(selectedDate || date);
    setShow(false);
  };

  const formattedDate = moment(date).format('DD/MM/YYYY');

  return (
    <Card title="Dados do Paciente">
      <Button
        title={`Data da Ocorrência: ${formattedDate}`}
        onPress={() => setShow(true)}
      />
      {show && (
        <DateTimePicker value={date} mode="date" onChange={onDateChange} />
      )}
      <Input placeholder="Nome" />
      <Input placeholder="Endereço da ocorrência" />
      <Input placeholder="Nº" />
      <Input placeholder="Endereço Residencial" />
      <Input placeholder="Nº" />
    </Card>
  );
};

export default BaseData;
