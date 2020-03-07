import React from 'react';
import {Text, StyleSheet, View} from "react-native";

const Header = ()=> (
	<View style={styles.header}>
		<Text style={styles.headerTitle}>
			Películas
		</Text>
	</View>
);

export default Header;

const styles = StyleSheet.create({
	header:{
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '15%',
		paddingTop: 30,
		backgroundColor: '#08202e',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerTitle: {
		fontSize: 24,
		color: 'white',
		fontFamily: 'josefin'
	},
});
