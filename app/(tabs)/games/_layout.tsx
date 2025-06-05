import { Stack } from 'expo-router';

export default function GamesLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#121212',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: '600',
      },
      contentStyle: {
        backgroundColor: '#121212',
      },
    }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Games',
        }}
      />
      <Stack.Screen
        name="trivia"
        options={{
          title: 'Football Trivia',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}