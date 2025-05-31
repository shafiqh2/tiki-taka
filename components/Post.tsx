import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';

interface PostProps {
  post: {
    id: number;
    user: {
      name: string;
      avatar: string;
      verified?: boolean;
    };
    content: string;
    image?: string;
    likes: number;
    comments: number;
    time: string;
  };
  isDark: boolean;
}

export function Post({ post, isDark }: PostProps) {
  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <View style={styles.header}>
        <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
        
        <View style={styles.userInfo}>
          <View style={styles.nameContainer}>
            <Text style={[styles.userName, isDark && styles.darkText]}>{post.user.name}</Text>
            {post.user.verified && <View style={styles.verifiedBadge} />}
          </View>
          <Text style={[styles.timeText, isDark && styles.darkSubText]}>{post.time}</Text>
        </View>
      </View>
      
      <Text style={[styles.content, isDark && styles.darkText]}>{post.content}</Text>
      
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.postImage} />
      )}
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Heart size={20} color={isDark ? '#E5E7EB' : '#6B7280'} />
          <Text style={[styles.actionText, isDark && styles.darkSubText]}>{post.likes}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={20} color={isDark ? '#E5E7EB' : '#6B7280'} />
          <Text style={[styles.actionText, isDark && styles.darkSubText]}>{post.comments}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Share2 size={20} color={isDark ? '#E5E7EB' : '#6B7280'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginRight: 4,
  },
  darkText: {
    color: '#FFFFFF',
  },
  verifiedBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#33efff',
  },
  timeText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  darkSubText: {
    color: '#E5E7EB',
  },
  content: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 12,
    lineHeight: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 6,
  },
});