import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Crown, Award, Grid2x2X as Grid2X2, BrainCircuit } from 'lucide-react-native';
import { GameCard } from '../../components/GameCard';
import { LeaderboardItem } from '../../components/LeaderboardItem';
import { mockLeaderboard } from '../../data/mockData';

export default function GamesScreen() {
  // Force dark theme
  const isDark = true;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.gamesGrid}>
          <GameCard 
            title="Score Predictions" 
            description="Predict match outcomes and win points"
            icon={<Crown size={24} color="#FFFFFF" />}
            color="#33efff"
            isDark={isDark}
          />
          <GameCard 
            title="Fantasy Mini-League" 
            description="Build your daily dream team"
            icon={<Award size={24} color="#FFFFFF" />}
            color="#E31B23"
            isDark={isDark}
          />
          <GameCard 
            title="Match Bingo" 
            description="Track live match events in real-time"
            icon={<Grid2X2 size={24} color="#FFFFFF" />}
            color="#00AF41"
            isDark={isDark}
          />
          <GameCard 
            title="Football Trivia" 
            description="Test your football knowledge"
            icon={<BrainCircuit size={24} color="#FFFFFF" />}
            color="#F59E0B"
            isDark={isDark}
          />
        </View>
        
        <View style={styles.leaderboardSection}>
          <Text style={styles.sectionTitle}>Weekly Leaderboard</Text>
          
          <View style={styles.leaderboardCard}>
            <View style={styles.leaderboardHeader}>
              <Text style={styles.leaderboardHeaderText}>Rank</Text>
              <Text style={styles.leaderboardHeaderText}>Player</Text>
              <Text style={styles.leaderboardHeaderText}>Points</Text>
            </View>
            
            {mockLeaderboard.map((item, index) => (
              <LeaderboardItem key={index} player={item} position={index + 1} isDark={isDark} />
            ))}
            
            <TouchableOpacity style={styles.viewMoreButton}>
              <Text style={styles.viewMoreText}>View Full Leaderboard</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.upcomingChallengesSection}>
          <Text style={styles.sectionTitle}>Upcoming Challenges</Text>
          
          <View style={styles.challengeCard}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeTitle}>Weekend Special</Text>
              <View style={styles.challengeBadge}>
                <Text style={styles.challengeBadgeText}>2X POINTS</Text>
              </View>
            </View>
            
            <Text style={styles.challengeDescription}>
              Predict all Premier League matches this weekend for double points!
            </Text>
            
            <TouchableOpacity style={styles.joinChallengeButton}>
              <Text style={styles.joinChallengeButtonText}>Join Challenge</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.spacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  leaderboardSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  leaderboardCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
  leaderboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    marginBottom: 8,
  },
  leaderboardHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  viewMoreButton: {
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 8,
  },
  viewMoreText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#33efff',
  },
  upcomingChallengesSection: {
    marginTop: 24,
  },
  challengeCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  challengeBadge: {
    backgroundColor: '#FFEDD5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  challengeBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F97316',
  },
  challengeDescription: {
    fontSize: 14,
    color: '#E5E7EB',
    marginBottom: 16,
  },
  joinChallengeButton: {
    backgroundColor: '#33efff',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinChallengeButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  spacing: {
    height: 24,
  },
});