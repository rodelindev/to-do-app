import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

const Detail = ({ route, navigation }) => {
    const { item } = route.params;

    const [tasks, setTasks] = useState({
        title: item.title,
        body: item.body,
        userId: 1,
    });

    const updateTask = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+item.id, {
            method: 'PUT',
            body: JSON.stringify({
                title: tasks.title,
                body: tasks.body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    const onChangeTitle = (value) => {
        setTasks({ ...tasks, title: value });
    };

    const onChangeBody = (value) => {
        setTasks({ ...tasks, body: value });
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Datos de la tarea</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => onChangeTitle(value)}
                    value={tasks.title}
                />

                <TextInput
                    style={styles.inputDescription}
                    onChangeText={(value) => onChangeBody(value)}
                    value={tasks.body}
                />
                <Button
                    style={styles.button}
                    title='Add todo'
                    color='blue'
                    onPress={updateTask} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    input: {
        padding: 10,
        margin: 14,
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 6
    },
    content: {
        padding: 20,
    },
    title: {
        padding: 15,
        fontSize: 25
    },
    inputDescription: {
        padding: 10,
        margin: 14,
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 6,
        height: 50
    },
    button: {
        padding: 25,
        paddingTop: 15
    }
});

export default Detail
