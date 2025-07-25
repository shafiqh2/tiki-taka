import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  Bell,
  ChevronDown,
  Trophy,
  Users,
  Timer,
  ChevronRight,
} from 'lucide-react-native';
import GradientBackground from '../../components/GradientBackground';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const matchTime = new Date('2024-03-10T20:00:00Z');

    const updateTimer = () => {
      const now = new Date();
      const diff = matchTime.getTime() - now.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${hours}h ${minutes}m`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar style="light" backgroundColor="#121212" translucent={false} />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.tagline}>Play. Predict. Win.</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="#E5E7EB" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
            }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* League Selector */}
      <TouchableOpacity style={styles.leagueSelector}>
        <Text style={styles.leagueSelectorText}>Premier League</Text>
        <ChevronDown size={20} color="#9CA3AF" />
      </TouchableOpacity>

      {/* Featured Match */}
      <TouchableOpacity style={styles.featuredMatch}>
        <Text style={styles.featuredLabel}>Featured Match</Text>
        <View style={styles.matchDetails}>
          <View style={styles.team}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/100px-Manchester_City_FC_badge.png',
              }}
              style={styles.teamLogo}
            />
            <Text style={styles.teamName}>Man City</Text>
          </View>
          <View style={styles.matchInfo}>
            <Text style={styles.matchTime}>20:00</Text>
            <View style={styles.timer}>
              <Timer size={16} color="#EF4444" />
              <Text style={styles.timerText}>{timeLeft}</Text>
            </View>
          </View>
          <View style={styles.team}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/100px-Arsenal_FC.png',
              }}
              style={styles.teamLogo}
            />
            <Text style={styles.teamName}>Arsenal</Text>
          </View>
        </View>
        <GradientBackground>
          <TouchableOpacity style={styles.predictButton}>
            <Text style={styles.predictButtonText}>Predict Now</Text>
          </TouchableOpacity>
        </GradientBackground>
      </TouchableOpacity>

      {/* Latest News */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Latest News</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
            <ChevronRight size={16} color="#33efff" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item} style={styles.newsCard}>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
                }}
                style={styles.newsImage}
              />
              <View style={styles.newsContent}>
                <Text style={styles.newsTitle} numberOfLines={2}>
                  Manchester City edges closer to Premier League title
                </Text>
                <View style={styles.newsFooter}>
                  <Text style={styles.newsSource}>Sky Sports</Text>
                  <Text style={styles.newsTime}>2h ago</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Leaderboard Preview */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Weekly Leaderboard</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
            <ChevronRight size={16} color="#33efff" />
          </TouchableOpacity>
        </View>
        <View style={styles.leaderboard}>
          {[1, 2, 3].map((rank) => (
            <View key={rank} style={styles.leaderboardItem}>
              <Text style={[styles.rank, rank === 1 && styles.firstRank]}>
                {rank}
              </Text>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
                }}
                style={styles.leaderAvatar}
              />
              <Text style={styles.leaderName}>John Doe</Text>
              <Text style={styles.points}>2,450 pts</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Quick Games */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Games</Text>
        <View style={styles.gamesGrid}>
          <TouchableOpacity style={styles.gameCard}>
            <Trophy size={24} color="#F59E0B" />
            <Text style={styles.gameTitle}>Daily Trivia</Text>
            <Text style={styles.gameDescription}>
              Test your football knowledge
            </Text>
            <Text style={styles.playNow}>Play Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gameCard}>
            <Users size={24} color="#33efff" />
            <Text style={styles.gameTitle}>Prediction Duel</Text>
            <Text style={styles.gameDescription}>Challenge other fans</Text>
            <Text style={styles.playNow}>Play Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Fan Zone */}
      <View style={[styles.section, styles.fanZone]}>
        <Text style={styles.sectionTitle}>Fan Zone</Text>
        <View style={styles.fanZoneContent}>
          <View style={styles.fanZoneStats}>
            <Text style={styles.activeUsers}>2.5K fans online</Text>
            <Text style={styles.discussions}>150 active discussions</Text>
          </View>
          <GradientBackground>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Fan Zone</Text>
            </TouchableOpacity>
          </GradientBackground>
        </View>
      </View>

      <View style={styles.spacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  tagline: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  leagueSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
  leagueSelectorText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  featuredMatch: {
    backgroundColor: '#1E1E1E',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
  featuredLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 12,
  },
  matchDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  team: {
    alignItems: 'center',
    width: '30%',
  },
  teamLogo: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  matchInfo: {
    alignItems: 'center',
  },
  matchTime: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  timerText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#EF4444',
    marginLeft: 4,
  },
  predictButton: {
    fontSize: 18,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  predictButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: '#33efff',
    marginRight: 4,
  },
  newsCard: {
    width: 280,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    marginRight: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
  newsImage: {
    width: '100%',
    height: 140,
  },
  newsContent: {
    padding: 12,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newsSource: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  newsTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  leaderboard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  rank: {
    width: 24,
    fontSize: 16,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  firstRank: {
    color: '#F59E0B',
  },
  leaderAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  leaderName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  points: {
    fontSize: 14,
    fontWeight: '600',
    color: '#33efff',
  },
  gamesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  gameCard: {
    width: '48%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 12,
    marginBottom: 4,
  },
  gameDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 12,
  },
  playNow: {
    fontSize: 14,
    fontWeight: '500',
    color: '#33efff',
  },
  fanZone: {
    marginTop: 24,
  },
  fanZoneContent: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
  fanZoneStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  activeUsers: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  discussions: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  joinButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  spacing: {
    height: 24,
  },
});
