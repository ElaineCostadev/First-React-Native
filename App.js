import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title.js';
import Form from './src/components/Form.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E3D4',
    paddingTop: 80,
  },
});
