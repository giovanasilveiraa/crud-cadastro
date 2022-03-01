import React from 'react';
import { View, Text, FlatList } from 'react-native';
import users from '../data/users'
import { ListItem } from 'react-native-elements'

export default props => {

    function getUserItem({ item: user }) {
        return (
           <ListItem
            leftAvatar={{source: {uri: user.avatarUrl}}}
            key={user.id}
            title={user.name}
           
           />

        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}