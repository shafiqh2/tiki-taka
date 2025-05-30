import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface MatchProps {
  match: {
    homeTeam: {
      name: string;
      logo: string;
      score: number;
    };
    awayTeam: {
      name: string;
      logo: string;
      score: number;
    };
    time: string;
    league: string;
  };
  isDark: boolean;
}

export function LiveMatch({ match, isDark }: MatchProps) {
  return (
    <TouchableOpacity style={[styles.container, isDark && styles.darkContainer]}>
      <Text style={[styles.leagueText, isDark && styles.darkSubText]}>{match.league}</Text>
      
      <View style={styles.teamsContainer}>
        <View style={styles.teamContainer}>
          <Image source={{ uri: match.homeTeam.logo }} style={styles.teamLogo} />
          <Text style={[styles.teamName, isDark && styles.darkText]} numberOfLines={1}>
            {match.homeTeam.name}
          </Text>
        </View>
        
        <View style={styles.scoreContainer}>
          <Text style={[styles.scoreText, isDark && styles.darkText]}>
            {match.homeTeam.score} - {match.awayTeam.score}
          </Text>
          <View style={styles.liveIndicator}>
            <View style={styles.liveIndicatorDot} />
            <Text style={styles.liveText}>{match.time}'</Text>
          </View>
        </View>
        
        <View style={styles.teamContainer}>
          <Image source={{ uri: match.awayTeam.logo }} style={styles.teamLogo} />
          <Text style={[styles.teamName, isDark && styles.darkText]} numberOfLines={1}>
            {match.awayTeam.name}
          </Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.watchButton}>
        <Text style={styles.watchButtonText}>Watch Live</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  leagueText: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  darkSubText: {
    color: '#E5E7EB',
  },
  darkText: {
    color: '#FFFFFF',
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  teamContainer: {
    alignItems: 'center',
    width: 80,
  },
  teamLogo: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 14,
    textAlign: 'center',
    color: '#1F2937',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  liveIndicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444',
    marginRight: 4,
  },
  liveText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#EF4444',
  },
  watchButton: {
    backgroundColor: '#7291E1',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  watchButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});