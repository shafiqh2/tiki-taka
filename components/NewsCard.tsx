import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Clock } from 'lucide-react-native';

interface NewsProps {
  news: {
    id: number;
    title: string;
    description: string;
    image: string;
    source: string;
    time: string;
  };
  isDark: boolean;
}

export function NewsCard({ news, isDark }: NewsProps) {
  return (
    <TouchableOpacity style={[styles.container, isDark && styles.darkContainer]}>
      <Image source={{ uri: news.image }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={[styles.title, isDark && styles.darkText]} numberOfLines={2}>
          {news.title}
        </Text>
        
        <Text style={[styles.description, isDark && styles.darkSubText]} numberOfLines={2}>
          {news.description}
        </Text>
        
        <View style={styles.footer}>
          <Text style={[styles.source, isDark && styles.darkSubText]}>{news.source}</Text>
          
          <View style={styles.timeContainer}>
            <Clock size={12} color={isDark ? '#E5E7EB' : '#6B7280'} />
            <Text style={[styles.time, isDark && styles.darkSubText]}>{news.time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
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
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  darkText: {
    color: '#FFFFFF',
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  darkSubText: {
    color: '#E5E7EB',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  source: {
    fontSize: 12,
    color: '#6B7280',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
});