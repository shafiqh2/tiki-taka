import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { database } from '../../../config/firebase';
import { ref, update, get } from 'firebase/database';
import { useAuth } from '../../../contexts/AuthContext';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const mockQuestions: Question[] = [
  {
    question: "Which team has won the most Premier League titles?",
    options: ["Manchester United", "Liverpool", "Chelsea", "Arsenal"],
    correctAnswer: 0
  },
  {
    question: "Who holds the record for most Premier League goals in a single season?",
    options: ["Alan Shearer", "Mohamed Salah", "Erling Haaland", "Harry Kane"],
    correctAnswer: 2
  },
  {
    question: "Which player has the most Premier League assists of all time?",
    options: ["Ryan Giggs", "Cesc Fabregas", "Kevin De Bruyne", "Frank Lampard"],
    correctAnswer: 0
  },
  {
    question: "What year was the Premier League founded?",
    options: ["1990", "1991", "1992", "1993"],
    correctAnswer: 2
  },
  {
    question: "Which team went unbeaten for an entire Premier League season in 2003-04?",
    options: ["Manchester United", "Chelsea", "Arsenal", "Liverpool"],
    correctAnswer: 2
  }
];

export default function TriviaScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { user } = useAuth();
  const router = useRouter();

  const handleAnswer = async (selectedIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);
    
    if (selectedIndex === mockQuestions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 10);
    }

    setTimeout(() => {
      if (currentQuestion < mockQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setQuizCompleted(true);
        updateUserPoints();
      }
    }, 1000);
  };

  const updateUserPoints = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const userRef = ref(database, `users/${user.uid}/profile`);
      const snapshot = await get(userRef);
      const userData = snapshot.val();
      
      const updatedPoints = (userData.points || 0) + score;
      const quizResult = {
        date: new Date().toISOString(),
        score,
        type: 'trivia'
      };

      await update(userRef, {
        points: updatedPoints,
        quizHistory: [...(userData.quizHistory || []), quizResult]
      });
    } catch (error) {
      console.error('Error updating points:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizCompleted(false);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#33efff" />
      </View>
    );
  }

  if (quizCompleted) {
    return (
      <View style={styles.container}>
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Quiz Completed!</Text>
          <Text style={styles.scoreText}>Your Score: {score}</Text>
          <Text style={styles.bonusText}>
            {score === 50 ? '🎉 Perfect Score! +50 Bonus Points!' : ''}
          </Text>
          
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={[styles.button, styles.playAgainButton]} 
              onPress={handlePlayAgain}
            >
              <Text style={styles.buttonText}>Play Again</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.homeButton]} 
              onPress={() => router.back()}
            >
              <Text style={styles.buttonText}>Back to Games</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%` }
          ]} 
        />
      </View>

      <Text style={styles.questionCount}>
        Question {currentQuestion + 1} of {mockQuestions.length}
      </Text>

      <View style={styles.questionCard}>
        <Text style={styles.questionText}>
          {mockQuestions[currentQuestion].question}
        </Text>

        <View style={styles.optionsContainer}>
          {mockQuestions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === index && styles.selectedOption,
                isAnswered && index === mockQuestions[currentQuestion].correctAnswer && styles.correctOption,
                isAnswered && selectedAnswer === index && 
                index !== mockQuestions[currentQuestion].correctAnswer && styles.wrongOption
              ]}
              onPress={() => handleAnswer(index)}
              disabled={isAnswered}
            >
              <Text style={[
                styles.optionText,
                selectedAnswer === index && styles.selectedOptionText,
                isAnswered && index === mockQuestions[currentQuestion].correctAnswer && styles.correctOptionText,
                isAnswered && selectedAnswer === index && 
                index !== mockQuestions[currentQuestion].correctAnswer && styles.wrongOptionText
              ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Text style={styles.scoreText}>Current Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#333333',
    borderRadius: 4,
    marginBottom: 16,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#33efff',
    borderRadius: 4,
  },
  questionCount: {
    color: '#E5E7EB',
    fontSize: 16,
    marginBottom: 24,
  },
  questionCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  questionText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#333333',
    padding: 16,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: '#33efff',
  },
  correctOption: {
    backgroundColor: '#00AF41',
  },
  wrongOption: {
    backgroundColor: '#E31B23',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  selectedOptionText: {
    color: '#000000',
    fontWeight: '600',
  },
  correctOptionText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  wrongOptionText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  resultCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  resultTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  bonusText: {
    color: '#F59E0B',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
  },
  playAgainButton: {
    backgroundColor: '#33efff',
  },
  homeButton: {
    backgroundColor: '#333333',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});