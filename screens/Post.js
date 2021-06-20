import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';


const Post = ({ navigation }) => {

    const [task, setTask] = useState({
        name: '',
        gender: '',
        email: '',
        status: '',
    });

    const onChangeTitle = (value) => {
        setTask({ ...task, title: value });
    };

    const onChangeBody = (value) => {
        setTask({ ...task, body: value });
    };

    const saveTask = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: task.title,
                body: task.body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                response.json();
            })
            .then((json) => console.log(json));
    }


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Datos de la tarea</Text>
                <TextInput
                    placeholder={"Titlo de la tarea"}
                    style={styles.input}
                    onChangeText={(value) => onChangeTitle(value)}
                />

                <TextInput
                    placeholder={"Descripcion de la tarea"}
                    style={styles.inputDescription}
                    onChangeText={(value) => onChangeBody(value)}
                />
                <Button
                    style={styles.button}
                    title='Add todo'
                    color='blue'
                    onPress={saveTask} />
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

export default Post