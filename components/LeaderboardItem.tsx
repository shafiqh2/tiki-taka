import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface LeaderboardItemProps {
  player: {
    name: string;
    avatar: string;
    points: number;
  };
  position: number;
  isDark: boolean;
}

export function LeaderboardItem({ player, position, isDark }: LeaderboardItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.rankContainer}>
        <Text style={[
          styles.rankText, 
          isDark && styles.darkText,
          position === 1 && styles.firstRank,
          position === 2 && styles.secondRank,
          position === 3 && styles.thirdRank,
        ]}>
          {position}
        </Text>
      </View>
      
      <View style={styles.playerContainer}>
        <Image source={{ uri: player.avatar }} style={styles.avatar} />
        <Text style={[styles.playerName, isDark && styles.darkText]}>{player.name}</Text>
      </View>
      
      <Text style={[styles.pointsText, isDark && styles.darkText]}>{player.points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  rankContainer: {
    width: 30,
    alignItems: 'center',
  },
  rankText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
  },
  firstRank: {
    color: '#F59E0B',
  },
  secondRank: {
    color: '#9CA3AF',
  },
  thirdRank: {
    color: '#B45309',
  },
  darkText: {
    color: '#FFFFFF',
  },
  playerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  playerName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  pointsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
});