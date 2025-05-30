import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Settings, Bell, Shield, CreditCard, Heart, LogOut, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      
      <View style={styles.header}>
        <Text style={[styles.headerTitle, isDark && styles.darkText]}>Profile</Text>
        <TouchableOpacity style={[styles.settingsButton, isDark && styles.darkSettingsButton]}>
          <Settings size={20} color={isDark ? '#E5E7EB' : '#6B7280'} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.profileCard, isDark && styles.darkProfileCard]}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
            style={styles.profileAvatar}
          />
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, isDark && styles.darkText]}>David Mitchell</Text>
            <Text style={[styles.profileUsername, isDark && styles.darkSubText]}>@davidmitch</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, isDark && styles.darkText]}>1,250</Text>
                <Text style={[styles.statLabel, isDark && styles.darkSubText]}>Points</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, isDark && styles.darkText]}>8</Text>
                <Text style={[styles.statLabel, isDark && styles.darkSubText]}>Communities</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, isDark && styles.darkText]}>24</Text>
                <Text style={[styles.statLabel, isDark && styles.darkSubText]}>Predictions</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.teamsSection}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Favorite Teams</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.teamsScrollContent}
          >
            <View style={[styles.teamBadge, isDark && styles.darkTeamBadge]}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' }}
                style={styles.teamLogo}
              />
              <Text style={[styles.teamName, isDark && styles.darkText]}>Man City</Text>
            </View>
            <View style={[styles.teamBadge, isDark && styles.darkTeamBadge]}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' }}
                style={styles.teamLogo}
              />
              <Text style={[styles.teamName, isDark && styles.darkText]}>Real Madrid</Text>
            </View>
            <View style={[styles.teamBadge, isDark && styles.darkTeamBadge]}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' }}
                style={styles.teamLogo}
              />
              <Text style={[styles.teamName, isDark && styles.darkText]}>Liverpool</Text>
            </View>
            <TouchableOpacity style={[styles.addTeamBadge, isDark && styles.darkAddTeamBadge]}>
              <Text style={styles.addTeamText}>+ Add</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.settingsSection}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Settings</Text>
          
          <View style={[styles.settingCard, isDark && styles.darkSettingCard]}>
            <View style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Bell size={20} color="#1A78F5" />
              </View>
              <Text style={[styles.settingText, isDark && styles.darkText]}>Notifications</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
                thumbColor={notificationsEnabled ? '#1A78F5' : '#F3F4F6'}
              />
            </View>
            
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Shield size={20} color="#00AF41" />
              </View>
              <Text style={[styles.settingText, isDark && styles.darkText]}>Privacy</Text>
              <ChevronRight size={20} color={isDark ? '#E5E7EB' : '#9CA3AF'} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <CreditCard size={20} color="#F59E0B" />
              </View>
              <Text style={[styles.settingText, isDark && styles.darkText]}>Payment Methods</Text>
              <ChevronRight size={20} color={isDark ? '#E5E7EB' : '#9CA3AF'} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Heart size={20} color="#E31B23" />
              </View>
              <Text style={[styles.settingText, isDark && styles.darkText]}>Favorite Teams</Text>
              <ChevronRight size={20} color={isDark ? '#E5E7EB' : '#9CA3AF'} />
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
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkSettingsButton: {
    backgroundColor: '#333333',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
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
  darkProfileCard: {
    backgroundColor: '#1E1E1E',
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
    color: '#1F2937',
    marginBottom: 4,
  },
  profileUsername: {
    fontSize: 14,
    color: '#6B7280',
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
    color: '#1F2937',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#E5E7EB',
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
    color: '#1F2937',
  },
  editText: {
    fontSize: 14,
    color: '#1A78F5',
  },
  teamsScrollContent: {
    paddingRight: 16,
  },
  teamBadge: {
    backgroundColor: '#FFFFFF',
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
  darkTeamBadge: {
    backgroundColor: '#1E1E1E',
  },
  teamLogo: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  addTeamBadge: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 92,
  },
  darkAddTeamBadge: {
    backgroundColor: '#333333',
  },
  addTeamText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A78F5',
  },
  settingsSection: {
    marginBottom: 24,
  },
  settingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  darkSettingCard: {
    backgroundColor: '#1E1E1E',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  settingIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoutIcon: {
    backgroundColor: '#FEE2E2',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
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