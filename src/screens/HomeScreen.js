import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Thirsti</Text>
        <Text style={styles.subtitle}>Find the best water near you</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Rated Places</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
          {/* Placeholder for top rated places */}
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item} style={styles.card}>
              <View style={styles.cardContent}>
                <Icon name="water" size={24} color="#2196F3" />
                <Text style={styles.cardTitle}>Place {item}</Text>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={16} color="#FFD700" />
                  <Text style={styles.rating}>4.5</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Ratings</Text>
        {/* Placeholder for recent ratings */}
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.ratingItem}>
            <View style={styles.ratingHeader}>
              <Text style={styles.ratingPlace}>Place {item}</Text>
              <View style={styles.ratingStars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="star" size={16} color="#FFD700" />
                ))}
              </View>
            </View>
            <Text style={styles.ratingComment}>Great water temperature and perfect ice ratio!</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#2196F3',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 150,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
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
  ratingPlace: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingStars: {
    flexDirection: 'row',
  },
  ratingComment: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen; 