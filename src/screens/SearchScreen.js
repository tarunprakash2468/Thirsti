import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock data for demonstration
  const mockPlaces = [
    {
      id: '1',
      name: 'Coffee Shop A',
      rating: 4.5,
      latitude: 37.7749,
      longitude: -122.4194,
    },
    {
      id: '2',
      name: 'Restaurant B',
      rating: 4.2,
      latitude: 37.7833,
      longitude: -122.4167,
    },
    {
      id: '3',
      name: 'Cafe C',
      rating: 4.8,
      latitude: 37.7855,
      longitude: -122.4067,
    },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Mock search functionality
    const filtered = mockPlaces.filter(place =>
      place.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity style={styles.resultItem}>
      <View style={styles.resultContent}>
        <Text style={styles.resultName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search places..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {mockPlaces.map(place => (
            <Marker
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
              title={place.name}
              description={`Rating: ${place.rating}`}
            />
          ))}
        </MapView>
      </View>

      {searchQuery.length > 0 && (
        <View style={styles.resultsContainer}>
          <FlatList
            data={searchResults}
            renderItem={renderSearchResult}
            keyExtractor={item => item.id}
            style={styles.resultsList}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    margin: 10,
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  mapContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  resultsContainer: {
    position: 'absolute',
    top: 70,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resultsList: {
    maxHeight: 200,
  },
  resultItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  resultContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultName: {
    fontSize: 16,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
  },
});

export default SearchScreen; 