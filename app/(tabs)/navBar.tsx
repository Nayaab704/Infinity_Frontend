import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavBar = () => {
    console.log ("navbar is being rendered")
  return (
    <View style={styles.navbar}>
      {/* App Logo or Title */}
      <Text style={styles.logo}>InfinityTravel</Text>

      {/* Navigation Options */}
      <View style={styles.navOptions}>
        <TouchableOpacity onPress={() => alert('Search')}>
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Profile')}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navOptions: {
    flexDirection: 'row',
  },
  navText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#007BFF',
  },
});

export default NavBar;
