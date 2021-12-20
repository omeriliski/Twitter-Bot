import React,{useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Card, Text, ListItem, Avatar, ThemeConsumer} from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Context } from '../App';

const comments = [{
    username: '@AKurucan',
    avatar_url:
      'https://pbs.twimg.com/profile_images/1371630095790706688/5XQXwR3F_400x400.jpg',
    comment: "That's a very good Application, gratuliatiton!",
  },
];
const Home = () => {
  const consumer=useContext(Context);
  return (
    <ScrollView>
      <Text h4 h4Style={styles.header}>
        Home Page
      </Text>
      {/* <Button onPress={()=>consumer.twit("test")} title="test" style={styles.testButton}/> */}
      <Card>
        <Card.Title>HOME</Card.Title>
        <Card.Divider />
        <Card.Image source={require('../images/logo.jpg')}></Card.Image>
        <Text style={styles.subHeader}>
          Easy Way to Control Your Twitter Account
        </Text>
        <Card.Divider />
        <Text>
          If you don't want to Retweet manually or to Follow each Person a
          hundred times everyday, Twitterbot makes it for you!
        </Text>
        <Card.Divider />
        <Text>
          1- After you had a twitter account you need to get your keys from this
          address. https://developer.twitter.com/ Type your keys in Settings.
          And arrange the Settings. How many rt, follow, like do you want.
        </Text>
        <Card.Divider />
        <Text>
          2- If you want you can choose the people, who you want to follow, when
          they tweetted something, you will tweet it automaticly too.
        </Text>
        <Card.Divider />
        <Text>
          3- You can see the all statistics from your statistics page. Good
          Luck!
        </Text>
      </Card>
      <View>
        <ListItem bottomDivider>
          <Avatar source={{uri: comments[0].avatar_url}} />
          <ListItem.Content>
            <ListItem.Title>{comments[0].username}</ListItem.Title>
            <ListItem.Subtitle>{comments[0].comment}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  testButton:{
    width:100,
    height:10
  },
  header: {
    margin: 10,
  },
  subHeader: {
    marginTop: 5,
  },
});

export default Home;
