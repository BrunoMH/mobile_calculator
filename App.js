import React, { useState } from 'react';
import { Text, View, Pressable, Switch } from 'react-native';
import styles from './styles';
import { handlePress } from './calculatorLogic';

export default function App() {
  const [input, setInput] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((prev) => !prev);
  
  const handleButtonPress = (value) => {
    setInput((prev) => handlePress(prev, value));
  };

  const operatorsUpper = ['C', '÷', '×', '←'];
  const matrixCentral = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
  ];


  return (
    <View style={[
      styles.container,
      { backgroundColor: isEnabled ? '#fff' : '#000' },
    ]}>
      <Switch
        trackColor={{ false: '#66be14ff', true: 'tomato' }}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      >

      </Switch>
      <Text style={[
        styles.title,
        { color: isEnabled ? '#000' : '#fff' },
      ]}>Welcome to Calculator App!</Text>
      <Text style={[
        styles.input,
        { color: isEnabled ? '#000' : '#fff' },
      ]}>{input}</Text>

      {/* Top row */}
      <View style={styles.row}>
        {operatorsUpper.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handleButtonPress(item)}
            style={styles.button}
          >
            <Text style={styles.number}>{item}</Text>
          </Pressable>
        ))}
      </View>

      {/* Main grid */}
      <View style={styles.mainGrid}>
        {/* Numbers grid */}
        <View>
          {matrixCentral.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((item, colIndex) => (
                <Pressable
                  key={colIndex}
                  onPress={() => handleButtonPress(item)}
                  style={styles.button}
                >
                  <Text style={styles.number}>{item}</Text>
                </Pressable>
              ))}
            </View>
          ))}

          {/* Last row with 0 and . */}
          <View style={styles.row}>
            <Pressable
              onPress={() => handleButtonPress(0)}
              style={[styles.button, styles.zeroButton]}
            >
              <Text style={styles.number}>0</Text>
            </Pressable>
            <Pressable
              onPress={() => handleButtonPress('.')}
              style={styles.button}
            >
              <Text style={styles.number}>.</Text>
            </Pressable>
          </View>
        </View>

        {/* Operators */}
        <View>
          <Pressable
            onPress={() => handleButtonPress('-')}
            style={styles.button}
          >
            <Text style={styles.number}>-</Text>
          </Pressable>
          <Pressable
            onPress={() => handleButtonPress('+')}
            style={styles.button}
          >
            <Text style={styles.number}>+</Text>
          </Pressable>
          <Pressable
            onPress={() => handleButtonPress('=')}
            style={[styles.button, styles.equalButton]}
          >
            <Text style={styles.number}>=</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
