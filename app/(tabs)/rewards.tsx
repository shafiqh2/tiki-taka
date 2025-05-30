import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Gift, ChevronRight, Tag, ShoppingBag, Ticket, Coins } from 'lucide-react-native';
import { RewardCard } from '../../components/RewardCard';
import { mockRewards } from '../../data/mockData';

export default function RewardsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Merchandise', 'Tickets', 'Digital'];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.pointsCard}>
        <View style={styles.pointsContent}>
          <View>
            <Text style={styles.pointsLabel}>Your Points Balance</Text>
            <View style={styles.pointsRow}>
              <Coins size={24} color="#F59E0B" />
              <Text style={styles.pointsValue}>2,450</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.historyButton}>
            <Text style={styles.historyButtonText}>History</Text>
            <ChevronRight size={16} color="#7291E1" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categorySelector}
        contentContainerStyle={styles.categorySelectorContent}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category}
            style={[
              styles.categoryButton, 
              selectedCategory === category && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text 
              style={[
                styles.categoryButtonText, 
                selectedCategory === category && styles.selectedCategoryButtonText
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rewardsGrid}>
          {mockRewards.map((reward, index) => (
            <RewardCard 
              key={index} 
              reward={reward}
              isDark={true}
            />
          ))}
        </View>
        
        <View style={styles.dailyRewardsSection}>
          <Text style={styles.sectionTitle}>Daily Rewards</Text>
          
          <View style={styles.dailyRewardCard}>
            <View style={styles.dailyRewardContent}>
              <View style={styles.dailyRewardIcon}>
                <Gift size={24} color="#FFFFFF" />
              </View>
              <View style={styles.dailyRewardInfo}>
                <Text style={styles.dailyRewardTitle}>Daily Login Bonus</Text>
                <Text style={styles.dailyRewardDescription}>Claim your 50 points for today!</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.claimButton}>
              <Text style={styles.claimButtonText}>Claim</Text>
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
  pointsCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  pointsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsLabel: {
    fontSize: 14,
    color: '#E5E7EB',
    marginBottom: 4,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7291E1',
    marginRight: 4,
  },
  categorySelector: {
    marginBottom: 16,
  },
  categorySelectorContent: {
    paddingRight: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#333333',
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: '#7291E1',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#E5E7EB',
  },
  selectedCategoryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dailyRewardsSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  dailyRewardCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  dailyRewardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dailyRewardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dailyRewardInfo: {
    flex: 1,
  },
  dailyRewardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  dailyRewardDescription: {
    fontSize: 14,
    color: '#E5E7EB',
  },
  claimButton: {
    backgroundColor: '#7291E1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  claimButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  spacing: {
    height: 24,
  },
});