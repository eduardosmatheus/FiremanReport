import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Card, CheckBox, Input } from 'react-native-elements';
import PreHospital from './src/pages/PreHospital';
import SuspiciousProblems from './src/pages/SuspiciousProblems';
import Syntoms from './src/pages/Syntoms';
import MultipleChoicesCard from './src/components/MultipleChoicesCard';
import BaseData from './src/pages/BaseData';

class App extends React.Component {
  state = {
    occurrencyTypes: [],
    suspiciousProblems: [],
    syntoms: [],
    carryMode: [],
  };

  handleCheckOptions = (fieldName, option, checked) => {
    this.setState(state => {
      const data = checked
        ? [...state[fieldName], option]
        : state[fieldName].filter(x => x !== option);
      return { [fieldName]: data };
    });
  };

  render() {
    const {
      occurrencyTypes,
      suspiciousProblems,
      syntoms,
      carryMode,
    } = this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <BaseData />
          <PreHospital
            selectedOptions={occurrencyTypes}
            onSelectOption={(option, checked) =>
              this.handleCheckOptions('occurrencyTypes', option, checked)
            }
          />
          <SuspiciousProblems
            selectedOptions={suspiciousProblems}
            onSelectOption={(option, checked) =>
              this.handleCheckOptions('suspiciousProblems', option, checked)
            }
          />
          <Syntoms
            selectedOptions={syntoms}
            onSelectOption={(option, checked) =>
              this.handleCheckOptions('syntoms', option, checked)
            }
          />
          <MultipleChoicesCard
            title="Forma de Condução"
            options={['Deitada', 'Semi-Sentada', 'Sentada']}
            selectedOptions={carryMode}
            onSelectOption={(option, checked) =>
              this.handleCheckOptions('carryMode', option, checked)
            }
          />
          <Card title="Vítima era:">
            <CheckBox title="Ciclista" />
            <CheckBox title="Condutor Moto" />
            <CheckBox title="Passageiro Moto" />
            <CheckBox title="Gestante" />
            <CheckBox title="Condutor Carro" />
            <CheckBox title="Passageiro Banco da Frente" />
            <CheckBox title="Passageiro Banco de Trás" />
            <CheckBox title="Clínico" />
            <CheckBox title="Trauma" />
            <CheckBox title="Pedestre" />
          </Card>
          <Card title="Objetos Recolhidos">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input placeholder="Nome Receptor:" />
          </Card>
          <Card title="Equipe de Atendimento">
            <Input label="M.:" />
            <Input label="S1.:" />
            <Input label="S2.:" />
            <Input label="S3.:" />
            <Input label="Demandante:" />
            <Input label="Equipe:" />
            <Input label="Unidade:" />
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
