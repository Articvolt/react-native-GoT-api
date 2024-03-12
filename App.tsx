import React from 'react';
import {View, Text} from 'react-native';
import { NativeRouter, Link, Route, Routes } from 'react-router-native';
import  HomeScreen from './src/screens/Home/HomeScreen';
import CharactersList from './src/screens/CharactersList/CharactersList';
import {Provider} from "react-redux";
import store from "./store";
import {globalStyles} from "./src/globals/styles";
import {CharacterDetails} from "./src/screens/CharacterDetails/CharacterDetails";

const App = () => (
    <Provider store={store}>
        <NativeRouter>
            <View style={globalStyles.container}>
                <View style={globalStyles.navBar}>
                    <Link to="/">
                        <Text style={globalStyles.navBarTitle}>Home</Text>
                    </Link>
                    <Link to="/characters">
                        <Text style={globalStyles.navBarTitle}>Characters</Text>
                    </Link>
                </View>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/characters" element={<CharactersList />} />
                    <Route path="/character/:id" element={<CharacterDetails />} />
                </Routes>
            </View>
        </NativeRouter>
    </Provider>

);

export default App;