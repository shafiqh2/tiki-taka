import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  children?: React.ReactNode;
  style?: ViewStyle;
};

export default function GradientBackground({ children, style }: Props) {
  return (
    <LinearGradient
      colors={['#33efff', '#f659fd']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: 10
  },
});
