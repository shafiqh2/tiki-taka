import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Users } from 'lucide-react-native';

interface CommunityProps {
  community: {
    id: number;
    name: string;
    image: string;
    members: number;
    unread: number;
  };
  isDark: boolean;
}

export function CommunityCard({ community, isDark }: CommunityProps) {
  return (
    <TouchableOpacity style={[styles.container, isDark && styles.darkContainer]}>
      <Image source={{ uri: community.image }} style={styles.image} />
      
      <View style={styles.content}>
        <View>
          <Text style={[styles.name, isDark && styles.darkText]}>{community.name}</Text>
          <View style={styles.membersContainer}>
            <Users size={14} color={isDark ? '#E5E7EB' : '#6B7280'} />
            <Text style={[styles.membersText, isDark && styles.darkSubText]}>
              {community.members.toLocaleString()} members
            </Text>
          </View>
        </View>
        
        {community.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{community.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  image: {
    width: 80,
    height: 80,
  },
  content: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 6,
  },
  darkText: {
    color: '#FFFFFF',
  },
  membersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  membersText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 6,
  },
  darkSubText: {
    color: '#E5E7EB',
  },
  unreadBadge: {
    backgroundColor: '#EF4444',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});