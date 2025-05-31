import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Settings, Bell, Shield, CreditCard, Heart, LogOut, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={20} color="#E5E7EB" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
            style={styles.profileAvatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>David Mitchell</Text>
            <Text style={styles.profileUsername}>@davidmitch</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>1,250</Text>
                <Text style={styles.statLabel}>Points</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>8</Text>
                <Text style={styles.statLabel}>Communities</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>24</Text>
                <Text style={styles.statLabel}>Predictions</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.teamsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Favorite Teams</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.teamsScrollContent}
          >
            <View style={styles.teamBadge}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/100px-Manchester_City_FC_badge.png' }}
                style={styles.teamLogo}
              />
              <Text style={styles.teamName}>Man City</Text>
            </View>
            <View style={styles.teamBadge}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/100px-Real_Madrid_CF.png' }}
                style={styles.teamLogo}
              />
              <Text style={styles.teamName}>Real Madrid</Text>
            </View>
            <View style={styles.teamBadge}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/100px-Liverpool_FC.png' }}
                style={styles.teamLogo}
              />
              <Text style={styles.teamName}>Liverpool</Text>
            </View>
            <TouchableOpacity style={styles.addTeamBadge}>
              <Text style={styles.addTeamText}>+ Add</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          <View style={styles.settingCard}>
            <View style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Bell size={20} color="#33efff" />
              </View>
              <Text style={styles.settingText}>Notifications</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
                thumbColor={notificationsEnabled ? '#33efff' : '#F3F4F6'}
              />
            </View>
            
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Shield size={20} color="#00AF41" />
              </View>
              <Text style={styles.settingText}>Privacy</Text>
              <ChevronRight size={20} color="#E5E7EB" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <CreditCard size={20} color="#F59E0B" />
              </View>
              <Text style={styles.settingText}>Payment Methods</Text>
              <ChevronRight size={20} color="#E5E7EB" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Heart size={20} color="#E31B23" />
              </View>
              <Text style={styles.settingText}>Favorite Teams</Text>
              <ChevronRight size={20} color="#E5E7EB" />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.settingItem, styles.noBorder]}>
              <View style={[styles.settingIconContainer, styles.logoutIcon]}>
                <LogOut size={20} color="#EF4444" />
              </View>
              <Text style={styles.logoutText}>Log Out</Text>
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 16,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  profileUsername: {
    fontSize: 14,
    color: '#E5E7EB',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#E5E7EB',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#333333',
  },
  teamsSection: {
    marginBottom: 24,
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
  editText: {
    fontSize: 14,
    color: '#33efff',
  },
  teamsScrollContent: {
    paddingRight: 16,
  },
  teamBadge: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginRight: 12,
    width: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
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
  },
  addTeamBadge: {
    backgroundColor: '#333333',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 92,
  },
  addTeamText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#33efff',
  },
  settingsSection: {
    marginBottom: 24,
  },
  settingCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  settingIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoutIcon: {
    backgroundColor: '#2A1A1A',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  logoutText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#EF4444',
  },
  spacing: {
    height: 24,
  },
});