import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";


const Button = ({onPress, title})=>(
	<TouchableOpacity style={styles.button} onPress={onPress}>
		<Text style={styles.buttonText}>
			{title}
		</Text>
	</TouchableOpacity>
);
export default Button;

const styles = StyleSheet.create({
	button:{
		width: 200,
		borderRadius: 15,
		padding: 8,
		backgroundColor: '#FF980C',
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontFamily: 'fira'
	},
});
