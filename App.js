import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, AsyncStorage,Alert} from 'react-native';

export default class App extends Component {
    array = ['ssss','sssssddwdwd','ssss','efefef','ewgweg','h5tjrtr','ubou3','grgrg','ssss','sssssddwdwd','ssss','efefef','ewgweg','h5tjrtr','ubou3','grgrg']
    renderItem=(item,index)=> {
        return(
            <View style={{width:item.index*50,borderColor:'black',borderWidth:3}}>
            <Text>
                {item.item}
            </Text>
        </View>)
    };
    render() {
        return (
            <FlatList
                data={this.array}
                renderItem={(item, index) => this.renderItem(item, index)}
                keyExtractor={(item, index) => `flat+${index}`}
                numColumns={2}
                columnWrapperStyle={{flexWrap:'wrap'}}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
