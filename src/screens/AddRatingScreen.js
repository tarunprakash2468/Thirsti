import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddRatingScreen = () => {
  const [placeName, setPlaceName] = useState('');
  const [iceRating, setIceRating] = useState(3);
  const [temperatureRating, setTemperatureRating] = useState(3);
  const [portionRating, setPortionRating] = useState(3);
  const [isPaid, setIsPaid] = useState(false);
  const [aestheticRating, setAestheticRating] = useState(3);
  const [comment, setComment] = useState('');

  const renderRatingStars = (rating, setRating) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setRating(star)}
          >
            <Icon
              name={star <= rating ? 'star' : 'star-outline'}
              size={30}
              color="#FFD700"
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const handleSubmit = () => {
    // Here we'll add the logic to save the rating
    Alert.alert(
      'Success',
      'Your rating has been submitted!',
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Place Name</Text>
        <TextInput
          style={styles.input}
          value={placeName}
          onChangeText={setPlaceName}
          placeholder="Enter place name"
        />

        <Text style={styles.label}>Ice Rating</Text>
        {renderRatingStars(iceRating, setIceRating)}

        <Text style={styles.label}>Temperature Rating</Text>
        {renderRatingStars(temperatureRating, setTemperatureRating)}

        <Text style={styles.label}>Portion Size Rating</Text>
        {renderRatingStars(portionRating, setPortionRating)}

        <Text style={styles.label}>Aesthetic Rating</Text>
        {renderRatingStars(aestheticRating, setAestheticRating)}

        <TouchableOpacity
          style={[styles.paidButton, isPaid && styles.paidButtonActive]}
          onPress={() => setIsPaid(!isPaid)}
        >
          <Text style={[styles.paidButtonText, isPaid && styles.paidButtonTextActive]}>
            {isPaid ? 'Paid' : 'Free'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Comments</Text>
        <TextInput
          style={[styles.input, styles.commentInput]}
          value={comment}
          onChangeText={setComment}
          placeholder="Add your comments..."
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Rating</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  commentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 10,
  },
  paidButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  paidButtonActive: {
    backgroundColor: '#2196F3',
  },
  paidButtonText: {
    fontSize: 16,
    color: '#666',
  },
  paidButtonTextActive: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddRatingScreen; 