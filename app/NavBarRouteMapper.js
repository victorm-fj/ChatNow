import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  navText: {
    color: '#4b70a7',
    letterSpacing: 2,
    fontSize: Platform.OS === 'ios' ? 16 : 24,
    fontWeight: Platform.OS === 'ios' ? '500' : '300',
    marginVertical: 10,
  },
  backText: {
    fontSize: 36,
    marginTop: Platform.OS === 'ios' ? -5 : 5,
    marginLeft: 10,
  },
});

// Component to show NavBar LeftButton, RightButtom, and Title
const NavBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) return null; // If stack index route is equal to zero, don't render back button

    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Text style={[styles.backText, styles.navText]}>‹</Text>
      </TouchableOpacity>
    );
  },

  RightButton: (route, navigator, index, navState) => {},

  Title: (route, navigator, index, navState) => (
    <Text style={styles.navText}>
      {/* if there's a route title render it, else render route name */}
      {(route.title ? route.title : route.name).toUpperCase()}
    </Text>
  ),
};

export default NavBarRouteMapper;
