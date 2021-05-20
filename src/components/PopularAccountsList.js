import React from "react";
import {View,StyleSheet} from "react-native";
import { ListItem, Avatar, Input, Button } from 'react-native-elements'

const list = [
    {
      name: 'Ahmet Kurucan',
      avatar_url: 'https://pbs.twimg.com/profile_images/1371630095790706688/5XQXwR3F_400x400.jpg',
      subtitle: '@AKurucan'
    },
    {
      name: 'Osman Şimşek',
      avatar_url: 'https://pbs.twimg.com/profile_images/1360546012725714944/Yj63wmQI_400x400.jpg',
      subtitle: '@osimsek_herkul'
    }
  ]

const PopularAccountsList=()=>{
    return(
        <View>
            <Input
                placeholder='@username'
            />
            <Button title="Save" buttonStyle={styles.saveButton}/>
          {
            list.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <Avatar rounded source={{uri: l.avatar_url}} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>
        // <View>
        //     <Text>Popular Accounts</Text>
        //     <FlatList 
        //         data={data}
        //         renderItem={renderItem}
        //         keyExtractor={item => item.id}
        //     />
                
        // </View>
    )
}

const styles=StyleSheet.create({
    saveButton:{
        width:150,
        marginBottom:10,
        marginLeft:10
    }
})

export default PopularAccountsList;
