import React from 'react';
import TasksItem from '../components/TasksItem';
import { StyleSheet, View } from 'react-native';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            {/*Today's Tasks*/}
            <View style={styles.content}>
                <TasksItem />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },       
    content: { 
        padding: 30,
    },
});
