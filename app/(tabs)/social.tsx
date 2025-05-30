import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, FlatList, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Search, MessageCircle, Heart, Share2, ChevronRight } from 'lucide-react-native';
import { Post } from '../../components/Post';
import { CommunityCard } from '../../components/CommunityCard';
import { mockPosts, mockCommunities } from '../../data/mockData';

export default function SocialScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [selectedTab, setSelectedTab] = useState('feed');

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      
      <View style={styles.header}>
        <Text style={[styles.headerTitle, isDark && styles.darkText]}>Social</Text>
        <TouchableOpacity style={[styles.searchButton, isDark && styles.darkSearchButton]}>
          <Search size={20} color={isDark ? '#E5E7EB' : '#6B7280'} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[
            styles.tab, 
            selectedTab === 'feed' && styles.selectedTab,
            isDark && styles.darkTab,
            selectedTab === 'feed' && isDark && styles.darkSelectedTab
          ]}
          onPress={() => setSelectedTab('feed')}
        >
          <Text 
            style={[
              styles.tabText, 
              selectedTab === 'feed' && styles.selectedTabText,
              isDark && styles.darkTabText,
              selectedTab === 'feed' && isDark && styles.darkSelectedTabText
            ]}
          >
            Feed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.tab, 
            selectedTab === 'communities' && styles.selectedTab,
            isDark && styles.darkTab,
            selectedTab === 'communities' && isDark && styles.darkSelectedTab
          ]}
          onPress={() => setSelectedTab('communities')}
        >
          <Text 
            style={[
              styles.tabText, 
              selectedTab === 'communities' && styles.selectedTabText,
              isDark && styles.darkTabText,
              selectedTab === 'communities' && isDark && styles.darkSelectedTabText
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
          renderItem={({ item }) => <Post post={item} isDark={isDark} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.postsList}
          ListHeaderComponent={
            <View style={[styles.createPostCard, isDark && styles.darkCreatePostCard]}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
                style={styles.userAvatar}
              />
              <TouchableOpacity style={[styles.postInput, isDark && styles.darkPostInput]}>
                <Text style={[styles.postInputPlaceholder, isDark && styles.darkSubText]}>
                  What's on your mind?
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.communitiesSection}>
            <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Your Communities</Text>
            
            {mockCommunities.map((community, index) => (
              <CommunityCard 
                key={index} 
                community={community}
                isDark={isDark}
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
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 16,
  },
  darkContainer: {
    backgroundColor: '#121212',
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
    color: '#1F2937',
  },
  darkText: {
    color: '#FFFFFF',
  },
  darkSubText: {
    color: '#E5E7EB',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkSearchButton: {
    backgroundColor: '#333333',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  darkTab: {
    borderBottomColor: '#333333',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1A78F5',
  },
  darkSelectedTab: {
    borderBottomColor: '#1A78F5',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  selectedTabText: {
    color: '#1A78F5',
    fontWeight: '600',
  },
  darkTabText: {
    color: '#E5E7EB',
  },
  darkSelectedTabText: {
    color: '#1A78F5',
  },
  createPostCard: {
    backgroundColor: '#FFFFFF',
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
  darkCreatePostCard: {
    backgroundColor: '#1E1E1E',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postInput: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  darkPostInput: {
    backgroundColor: '#333333',
  },
  postInputPlaceholder: {
    color: '#6B7280',
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
    color: '#1F2937',
    marginBottom: 12,
  },
  discoverButton: {
    backgroundColor: '#1A78F5',
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