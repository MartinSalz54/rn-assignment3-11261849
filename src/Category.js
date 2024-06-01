




import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Category = ({ name, subtext, icon }) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.subtext}>{subtext}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    icon: {
        width: 80, // Adjust the width of the icon as per your requirement
        height: 80, // Adjust the height of the icon as per your requirement
        resizeMode: 'contain',
    },
    name: {
        marginTop: 8,
        fontSize: 16, // Adjust the font size of the category name as per your requirement
        fontWeight: 'bold',
    },
    subtext: {
        fontSize: 12, // Adjust the font size of the subtext as per your requirement
        color: 'gray',
    },
});

export default Category;