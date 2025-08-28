import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function App() {
  const handlePress = () => {
    alert("boton pressed");
  }

  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <View style={styles.container}>
      <Text>Welcome to calculator App!</Text>
      {matrix.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((element, colIndex) => (
            <View key={colIndex} style={styles.cell}>
              <Pressable onPress={handlePress} style={styles.button}>
                <Text style={styles.number}>{element}</Text>
              </Pressable>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  number: {
    color: 'white',
    fontSize: 25
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  }
});
