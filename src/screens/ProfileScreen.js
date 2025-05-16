import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    username: '@johndoe',
    totalRatings: 42,
    averageRating: 4.2,
    memberSince: '2024',
  };

  // Mock rating history
  const ratingHistory = [
    {
      id: '1',
      placeName: 'Coffee Shop A',
      date: '2024-03-15',
      rating: 4.5,
      comment: 'Perfect ice ratio!',
    },
    {
      id: '2',
      placeName: 'Restaurant B',
      date: '2024-03-14',
      rating: 4.0,
      comment: 'Good temperature, could use more ice.',
    },
    {
      id: '3',
      placeName: 'Cafe C',
      date: '2024-03-13',
      rating: 4.8,
      comment: 'Best water in town!',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Icon name="person-circle" size={100} color="#2196F3" />
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.totalRatings}</Text>
          <Text style={styles.statLabel}>Ratings</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.averageRating}</Text>
          <Text style={styles.statLabel}>Avg Rating</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.memberSince}</Text>
          <Text style={styles.statLabel}>Member Since</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rating History</Text>
        {ratingHistory.map((rating) => (
          <View key={rating.id} style={styles.ratingItem}>
            <View style={styles.ratingHeader}>
              <Text style={styles.placeName}>{rating.placeName}</Text>
              <View style={styles.ratingStars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    name={star <= rating.rating ? 'star' : 'star-outline'}
                    size={16}
                    color="#FFD700"
                  />
                ))}
              </View>
            </View>
            <Text style={styles.ratingDate}>{rating.date}</Text>
            <Text style={styles.ratingComment}>{rating.comment}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2196F3',
  },
  profileImageContainer: {
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  username: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  ratingItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  ratingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingStars: {
    flexDirection: 'row',
  },
  ratingDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  ratingComment: {
    fontSize: 14,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#2196F3',
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen; 