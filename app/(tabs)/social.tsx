import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Search, MessageCircle, Heart, Share2, ChevronRight } from 'lucide-react-native';
import { Post } from '../../components/Post';
import { CommunityCard } from '../../components/CommunityCard';
import { mockPosts, mockCommunities } from '../../data/mockData';

export default function SocialScreen() {
  const [selectedTab, setSelectedTab] = useState('feed');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[
            styles.tab, 
            selectedTab === 'feed' && styles.selectedTab
          ]}
          onPress={() => setSelectedTab('feed')}
        >
          <Text 
            style={[
              styles.tabText, 
              selectedTab === 'feed' && styles.selectedTabText
            ]}
          >
            Feed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.tab, 
            selectedTab === 'communities' && styles.selectedTab
          ]}
          onPress={() => setSelectedTab('communities')}
        >
          <Text 
            style={[
              styles.tabText, 
              selectedTab === 'communities' && styles.selectedTabText
            ]}
          >
            Communities
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'feed' ? (
        <FlatList
          data={mockPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Post post={item} isDark={true} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.postsList}
          ListHeaderComponent={
            <View style={styles.createPostCard}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
                style={styles.userAvatar}
              />
              <TouchableOpacity style={styles.postInput}>
                <Text style={styles.postInputPlaceholder}>
                  What's on your mind?
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.communitiesSection}>
            <Text style={styles.sectionTitle}>Your Communities</Text>
            
            {mockCommunities.map((community, index) => (
              <CommunityCard 
                key={index} 
                community={community}
                isDark={true}
              />
            ))}
            
            <TouchableOpacity style={styles.discoverButton}>
              <Text style={styles.discoverButtonText}>Discover More Communities</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.spacing} />
        </ScrollView>
      )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#33efff',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#E5E7EB',
  },
  selectedTabText: {
    color: '#33efff',
    fontWeight: '600',
  },
  createPostCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postInput: {
    flex: 1,
    backgroundColor: '#333333',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  postInputPlaceholder: {
    color: '#E5E7EB',
  },
  postsList: {
    paddingBottom: 16,
  },
  communitiesSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  discoverButton: {
    backgroundColor: '#33efff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  discoverButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  spacing: {
    height: 24,
  },
});