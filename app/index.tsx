import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { Image, View, StyleSheet } from 'react-native';

export default function Index() {
  useEffect(() => {
    // Simulate splash screen delay
    const timer = setTimeout(() => {
      // Redirect to tabs after splash screen
      router.replace('/(tabs)');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: '60%',
  },
});