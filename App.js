import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.container}>
      <Text style={isDarkMode? styles.whiteText : styles.darkText}>Hey</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText :{
    color:' #ffffff'
  },
  darkText :{
    color : '#000000'
  }
});
