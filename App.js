import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import * as Font from 'expo-font';
import Index from './src/Index';

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async ()=>{
    await Font.loadAsync({
      'josefin': require('./assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf'),
      'fira': require('./assets/fonts/Fira_Code/FiraCode-VariableFont_wght.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(()=>{
    loadFont();
  },[]);

  if(fontLoaded){
    return (
      <Index/>
    );
  }else{
    return (
      <Text>Cargando ...</Text>
    )
  }

}
