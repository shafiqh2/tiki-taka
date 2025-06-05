import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Crown, Award, Grid2x2X as Grid2X2, BrainCircuit } from 'lucide-react-native';
import { GameCard } from '../../../components/GameCard';
import { LeaderboardItem } from '../../../components/LeaderboardItem';
import { mockLeaderboard } from '../../../data/mockData';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthPrompt } from '../../../components/AuthPrompt';

export default function GamesScreen() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const handleGamePress = (route: string) => {
    if (isAuthenticated) {
      router.push(route);
    } else {
      router.push('/auth/login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gamesGrid}>
        <TouchableOpacity onPress={() => handleGamePress('/games/predict')}>
          <GameCard 
            title="Score Predictions" 
            description="Predict match outcomes and win points"
            icon={<Crown size={24} color="#FFFFFF" />}
            color="#33efff"
            isDark={true}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleGamePress('/games/trivia')}>
          <GameCard 
            title="Football Trivia" 
            description="Test your football knowledge"
            icon={<BrainCircuit size={24} color="#FFFFFF" />}
            color="#F59E0B"
            isDark={true}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.leaderboardSection}>
        <Text style={styles.sectionTitle}>Weekly Leaderboard</Text>
        
        <View style={styles.leaderboardCard}>
          {!isAuthenticated ? (
            <AuthPrompt message="Sign in to compete in the leaderboard" />
          ) : (
            <>
              <View style={styles.leaderboardHeader}>
                <Text style={styles.leaderboardHeaderText}>Rank</Text>
                <Text style={styles.leaderboardHeaderText}>Player</Text>
                <Text style={styles.leaderboardHeaderText}>Points</Text>
              </View>
              
              {mockLeaderboard.map((item, index) => (
                <LeaderboardItem key={index} player={item} position={index + 1} isDark={true} />
              ))}
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
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
});