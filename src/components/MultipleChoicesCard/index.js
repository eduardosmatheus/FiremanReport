import React from 'react';
import { CheckBox, Card } from 'react-native-elements';

function MultipleChoicesCard({
  title,
  options,
  selectedOptions,
  onSelectOption,
}) {
  return (
    <Card title={title}>
      {options.map((option, idx) => {
        const isChecked = selectedOptions.includes(option);
        return (
          <CheckBox
            key={idx}
            title={option}
            checked={isChecked}
            onPress={() => onSelectOption(option, !isChecked)}
          />
        );
      })}
    </Card>
  );
}

export default MultipleChoicesCard;
