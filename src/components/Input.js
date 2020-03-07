import React from 'react';
import {Text, TextInput, View, StyleSheet} from "react-native";

const Input = ({placeholder, onChange, value})=>{
	return(
		<>
			<View style={styles.container}>
				<Text style={styles.title}>
					Ingresar Película
				</Text>
				<TextInput
					autofocus={true}
					style={styles.input}
					onChangeText={onChange}
					placeholder={placeholder}
					value={value}
				/>
			</View>
		</>
	);
};

export default Input;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 101,
		paddingHorizontal: 16,
		justifyContent: 'space-between'
	},
	input: {
		width: '100%',
		borderRadius: 10,
		backgroundColor: 'black',
		paddingHorizontal: 15,
		paddingVertical: 8,
		marginBottom: 10,
		fontSize: 16,
		color: '#fff',
		fontFamily: 'josefin'
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		color: '#fff',
		fontFamily: 'josefin'
	}
});
