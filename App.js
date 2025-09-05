import { Text, View, StyleSheet, Pressable } from 'react-native';
import styles from './styles'; 

export default function App() {
  const handlePress = (value) => {
    const operators = { '×': '*', '÷': '/' };
    alert(`Pressed: ${operators[value] || value}`);
  };

  const operatorsUpper = ['c', '÷', '×', '←'];
  const matrixCentral = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Calculator App!</Text>

      {/* Top row */}
      <View style={styles.row}>
        {operatorsUpper.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handlePress(item)}
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
                  onPress={() => handlePress(item)}
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
              onPress={() => handlePress(0)}
              style={[styles.button, styles.zeroButton]}
            >
              <Text style={styles.number}>0</Text>
            </Pressable>
            <Pressable
              onPress={() => handlePress('.')}
              style={styles.button}
            >
              <Text style={styles.number}>.</Text>
            </Pressable>
          </View>
        </View>

        {/* Operators */}
        <View>
          <Pressable
            onPress={() => handlePress('-')}
            style={styles.button}
          >
            <Text style={styles.number}>-</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress('+')}
            style={styles.button}
          >
            <Text style={styles.number}>+</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress('=')}
            style={[styles.button, styles.equalButton]}
          >
            <Text style={styles.number}>=</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
