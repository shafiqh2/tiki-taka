import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface RewardProps {
  reward: {
    id: number;
    title: string;
    image: string;
    points: number;
    type: string;
  };
  isDark: boolean;
}

export function RewardCard({ reward, isDark }: RewardProps) {
  return (
    <TouchableOpacity style={[styles.container, isDark && styles.darkContainer]}>
      <Image source={{ uri: reward.image }} style={styles.image} />
      
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{reward.type}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.title, isDark && styles.darkText]} numberOfLines={2}>
          {reward.title}
        </Text>
        
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{reward.points} pts</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: '48%',
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  image: {
    width: '100%',
    height: 120,
  },
  badgeContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    height: 40,
  },
  darkText: {
    color: '#FFFFFF',
  },
  pointsContainer: {
    backgroundColor: '#EBF5FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  pointsText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A78F5',
  },
});