import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card ,Text,ListItem,Avatar} from 'react-native-elements'

const Statistics=()=>{
    const activeAccount=[{
        name: 'Akin Erciyes',
        avatar_url: 'https://pbs.twimg.com/profile_images/1245408866571091971/JTH3ddCx_400x400.jpg',
        subtitle: '@akinerciyes1'
    }]
    return(
        <ScrollView>
            <Text h4 h4Style={styles.header}>Statistics</Text>
            <ListItem bottomDivider>
                <Avatar rounded source={{uri: activeAccount[0].avatar_url}} />
                <ListItem.Content>
                  <ListItem.Title>{activeAccount[0].name}</ListItem.Title>
                  <ListItem.Subtitle>{activeAccount[0].subtitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            <Card>
                <Text>Today</Text>
                <Card.Divider/>
                <Text>Retweet:10</Text>
                <Text>Like:10</Text>
                <Text>Follow:10</Text>
            </Card>
            <Card>
                <Text>This Week</Text>
                <Card.Divider/>
                <Text>Retweet:70</Text>
                <Text>Like:70</Text>
                <Text>Follow:70</Text>
            </Card>
            <Card>
                <Text>Total</Text>
                <Card.Divider/>
                <Text>Retweet:2320</Text>
                <Text>Like:2345</Text>
                <Text>Follow:1246</Text>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        margin: 10
    }
})

export default Statistics;