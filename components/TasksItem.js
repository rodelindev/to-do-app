import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';

const TasksItem = ({ navigation }) => {
    const [tasks, setTasks] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setTasks(json);
                console.log(json);
            })
    }, []);

    const deleteTask = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        }).then((exit) => {
            console.log('Exito al eliminar');
        });
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Detail', { item: item })}>
                <View style={styles.item}>
                    <Text style={styles.text}>{item.title}</Text>
                    <View style={styles.option}>
                        <Icon style={styles.icon} name="delete"
                            onPress={() => {
                                deleteTask(item.id)
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View>
            <ScrollView>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginTop: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    option: {
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        fontWeight: 'bold',
        width: 200,
    },
    icon: {
        margin: 4
    }
});

export default TasksItem
