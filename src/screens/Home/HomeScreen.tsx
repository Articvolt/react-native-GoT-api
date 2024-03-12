import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import { Link } from 'react-router-native';
import { globalStyles } from "../../globals/styles";

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={globalStyles.bloc}>
                <Text style={globalStyles.h1}>Game of Thrones Characters</Text>
                <Text style={globalStyles.content}>List of all Game of Thrones characters</Text>
                <Link to="/characters">
                    <Text style={globalStyles.button}>Go to list"</Text>
                </Link>
            </View>
        </ScrollView>
    );
};

export default  HomeScreen;
