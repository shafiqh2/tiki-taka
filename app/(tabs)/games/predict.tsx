import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { database } from '../../../config/firebase';
import { ref, update, get } from 'firebase/database';
import { useAuth } from '../../../contexts/AuthContext';

interface Match {
  id: string;
  homeTeam: {
    name: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    logo: string;
  };
  date: string;
  time: string;
  venue: string;
}

const upcomingMatch: Match = {
  id: 'match1',
  homeTeam: {
    name: 'Manchester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
  },
  awayTeam: {
    name: 'Arsenal',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
  },
  date: '2024-03-10',
  time: '20:00',
  venue: 'Etihad Stadium'
};

export default function PredictScreen() {
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!user || !homeScore || !awayScore) return;

    try {
      const userRef = ref(database, `users/${user.uid}/profile`);
      const snapshot = await get(userRef);
      const userData = snapshot.val();

      const prediction = {
        matchId: upcomingMatch.id,
        homeScore: parseInt(homeScore),
        awayScore: parseInt(awayScore),
        timestamp: new Date().toISOString(),
        status: 'pending'
      };

      await update(userRef, {
        predictions: [...(userData.predictions || []), prediction]
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting prediction:', error);
    }
  };

  if (submitted) {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.successTitle}>Prediction Submitted!</Text>
          <Text style={styles.successText}>
            You predicted: {upcomingMatch.homeTeam.name} {homeScore} - {awayScore} {upcomingMatch.awayTeam.name}
          </Text>
          <Text style={styles.pointsText}>You'll earn points based on accuracy after the match!</Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Back to Games</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Predict the Score</Text>
        <Text style={styles.subtitle}>{upcomingMatch.date} • {upcomingMatch.time}</Text>
        <Text style={styles.venue}>{upcomingMatch.venue}</Text>

        <View style={styles.matchContainer}>
          <View style={styles.team}>
            <Image 
              source={{ uri: upcomingMatch.homeTeam.logo }}
              style={styles.teamLogo}
            />
            <Text style={styles.teamName}>{upcomingMatch.homeTeam.name}</Text>
            <TextInput
              style={styles.scoreInput}
              keyboardType="number-pad"
              maxLength={2}
              value={homeScore}
              onChangeText={setHomeScore}
              placeholder="0"
              placeholderTextColor="#666"
            />
          </View>

          <Text style={styles.vs}>vs</Text>

          <View style={styles.team}>
            <Image 
              source={{ uri: upcomingMatch.awayTeam.logo }}
              style={styles.teamLogo}
            />
            <Text style={styles.teamName}>{upcomingMatch.awayTeam.name}</Text>
            <TextInput
              style={styles.scoreInput}
              keyboardType="number-pad"
              maxLength={2}
              value={awayScore}
              onChangeText={setAwayScore}
              placeholder="0"
              placeholderTextColor="#666"
            />
          </View>
        </View>

        <View style={styles.pointsInfo}>
          <Text style={styles.pointsTitle}>Points System:</Text>
          <Text style={styles.pointsDetail}>• Correct Score: 50 points</Text>
          <Text style={styles.pointsDetail}>• Correct Result: 20 points</Text>
          <Text style={styles.pointsDetail}>• Correct Goal Difference: 10 points</Text>
        </View>

        <TouchableOpacity 
          style={[
            styles.submitButton,
            (!homeScore || !awayScore) && styles.disabledButton
          ]}
          onPress={handleSubmit}
          disabled={!homeScore || !awayScore}
        >
          <Text style={styles.submitButtonText}>Submit Prediction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E5E7EB',
    textAlign: 'center',
  },
  venue: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  team: {
    alignItems: 'center',
    flex: 1,
  },
  teamLogo: {
    width: 64,
    height: 64,
    marginBottom: 12,
  },
  teamName: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  vs: {
    fontSize: 18,
    color: '#666',
    marginHorizontal: 16,
  },
  scoreInput: {
    backgroundColor: '#333333',
    borderRadius: 8,
    width: 60,
    height: 60,
    textAlign: 'center',
    fontSize: 24,
    color: '#FFFFFF',
  },
  pointsInfo: {
    backgroundColor: '#333333',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  pointsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  pointsDetail: {
    fontSize: 14,
    color: '#E5E7EB',
    marginBottom: 4,
  },
  submitButton: {
    backgroundColor: '#33efff',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  submitButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  successTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  successText: {
    fontSize: 16,
    color: '#E5E7EB',
    textAlign: 'center',
    marginBottom: 8,
  },
  pointsText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#33efff',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});