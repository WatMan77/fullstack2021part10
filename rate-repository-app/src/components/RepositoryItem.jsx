import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const Descritpions = ({ fullName, description, language }) => {

  const styles = StyleSheet.create({
    flexContainer: {
      padding: 5,
      alignItems: 'flex-start' // <-- Blocks background color expansion
    },
  
    fullName: {
      fontWeight: 'bold'
    },
    description: {
      color: theme.colors.textSecondary
    },

    language: {
      backgroundColor: '#0366d6',
      color: 'white',
      padding: 5,
      marginTop: 10
    }
  })

  return (
    <View style={styles.flexContainer}>
      <Text style={styles.fullName}> {fullName}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.language}>{language}</Text>
    </View>
  );
};


const RepositoryItem = ({ item }) => {


  const styles = StyleSheet.create({
    up: {
      flexDirection: 'row'
    },
    down: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    sItem: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 5
    },
    item: {
      flex: 0,
      padding: 10
    },
    image: {
      width: 50,
      height: 50,
      padding: 5,
      borderRadius: 10
    }
  })

  const kSuffix = (n) => {
    if (n >= 1000){
      const x = String(Math.round(n / 100))
      const y = x.slice(0, x.length - 1).concat('.')
      if(x[x.length - 1] === '0'){
        return y.slice(0, y.length - 1).concat('k')
      }
      return y.concat(x[x.length - 1] + 'k')
    }
    return n
  }


  return (
    <View style={styles.item}>
      <View style={styles.up}>
        <View style={{ display: 'flex' }}>
          <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <Descritpions fullName={item.fullName} description={item.description} language={item.language} />
      </View>

      <View style={styles.down}>
        <View style={styles.sItem}>
          <Text style={{ fontWeight: 'bold'}}>{kSuffix(item.stargazersCount)}</Text>
          <Text style={theme.colors.textSecondary}>Stars</Text>
        </View>
        <View style={styles.sItem}>
          <Text style={{ fontWeight: 'bold'}}>{kSuffix(item.forksCount)}</Text>
          <Text style={theme.colors.textSecondary}>Forks</Text>
        </View>
        <View style={styles.sItem}>
          <Text style={{ fontWeight: 'bold'}}>{kSuffix(item.reviewCount)}</Text>
          <Text style={theme.colors.textSecondary}>Reviews</Text>
        </View>
        <View style={styles.sItem}>
          <Text style={{ fontWeight: 'bold'}}>{kSuffix(item.ratingAverage)}</Text>
          <Text style={theme.colors.textSecondary}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;