import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface GameCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isDark: boolean;
}

export function GameCard({ title, description, icon, color, isDark }: GameCardProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        isDark && styles.darkContainer,
        { width: '48%', marginBottom: 16 }
      ]}
    >
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        {icon}
      </View>
      
      <Text style={[styles.title, isDark && styles.darkText]}>{title}</Text>
      <Text style={[styles.description, isDark && styles.darkSubText]} numberOfLines={2}>
        {description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  darkText: {
    color: '#FFFFFF',
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
  },
  darkSubText: {
    color: '#E5E7EB',
  },
});