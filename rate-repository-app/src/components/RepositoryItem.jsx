import React from 'react';
import { View, Image } from 'react-native';
import Text from './Text';

const Descritpions = ({ fullName, description}) => {
  return (
    <View>
      <Text>{fullName}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const BasicInfo = (props) => {
  return(
    <View>
      <Descritpions fullName={props.fullName} description={props.description} />
      <View style={{flexDirection: 'row'}}>
        <Text>Full name: {props.fullName}</Text>
        <Text>Descritpion: {props.description}</Text>
        <Text>Language: {props.language}</Text>
        <Text>Stars: {props.stargazersCount}</Text>
        <Text>Forks: {props.forksCount}</Text>
        <Text>Reviews:{props.reviewCount}</Text>
        <Text>Rating: {props.ratingaverage}</Text>
      </View>
  </View>
  );
};

const RepositoryItem = ({ item }) => {
  const styles = {
    image: {
      width: 50,
      height: 50
    }
  };

  return (
    <View>
      <Image style={styles.image}  source={{ uri: item.ownerAvatarUrl}} />
      <BasicInfo {...item} /> 
    </View>
  );
};

export default RepositoryItem;