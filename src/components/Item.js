import React from 'react';
import {Text, StyleSheet, View} from "react-native";


export default ({item}) => (
	<View style={styles.item}>
		<Text style={styles.itemText}>{item.title}</Text>
	</View>
);

const styles = StyleSheet.create({
	item: {
		height: 72,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 5,
		borderRadius: 8,
		backgroundColor: '#edf3f7',
		marginBottom: 8,
		paddingHorizontal: 36
	},
	itemText: {
		fontSize: 16,
		color: '#08202e',
		fontFamily: 'fira'
	}
});
