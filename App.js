/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Card, CheckBox, Input, Divider } from 'react-native-elements';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <Card
            title="Tipo de Ocorrência (PRÉ - HOSPITALAR)"
            containerStyle={styles.occurrenceType}>
            <CheckBox title="Causado por animais" checked />
            <CheckBox title="Com meio de transporte" checked />
            <CheckBox title="Desmoronamento/Deslizamento" checked />
            <CheckBox title="Emergência médica" checked />
            <CheckBox title="Queda Altura > 3m" checked />
            <CheckBox title="Tentativa de suicídio" checked />
            <CheckBox title="Queda própria altura" checked />
            <CheckBox title="Afogamento" checked />
            <CheckBox title="Agressão" checked />
            <CheckBox title="Atropelamento" checked />
            <CheckBox title="Choque Elétrico" checked />
            <CheckBox title="Desabamento" checked />
            <CheckBox title="Doméstico" checked />
            <CheckBox title="Esportivo" checked />
          </Card>
          <Card title="Problemas Encontrados Suspeitos">
            <CheckBox title="Psiquiátrico" />
            <CheckBox title="Óbito" />
            <CheckBox title="Diabetes" />
            <CheckBox title="Hiperglicemia" />
            <CheckBox title="Hipoglicemia" />
            <Divider />
            <CheckBox title="Outros" />
            <Input placeholder="Qual?" errorStyle={{ color: 'red' }} />
            <Divider />
          </Card>
          <Card title="Sinais e Sintomas">
            <CheckBox title="Abdomem sensível ou rígido" />
            <CheckBox title="Afundamento de crânio" />
            <CheckBox title="Agitação" />
            <CheckBox title="Amnésia" />
            <CheckBox title="Apineia" />
            <CheckBox title="Bradicardia" />
            <CheckBox title="Bradipineia" />
            <CheckBox title="Bronco-aspirando" />
            <CheckBox title="Cefaleia" />
            <CheckBox title="Cianose" />
            <CheckBox title="Convulsão" />
            <CheckBox title="Desvio de Traqueia" />
          </Card>
          <Card title="Forma de Condução">
            <CheckBox title="Deitada" />
            <CheckBox title="Semi-Sentada" />
            <CheckBox title="Sentada" />
          </Card>
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
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  occurrenceType: {
    flex: 1,
  },
});

export default App;
