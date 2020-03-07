import React, {useState,} from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	Text,
	Modal
} from 'react-native';
import {
	Item,
	Button,
	Input,
	Header
} from "./components/Index";


const Index = ()=> {

	const [isVisible, setIsVisible] = useState(false);
	const [value, setValue] = useState('');
	const [data, setData] = useState([]);

	const handlePress = ()=>{
		setIsVisible(!isVisible);
	};

	const handleChange = text=>{
		setValue(text);
	};

	const handleSave = ()=>{

		if (value === ''){
			alert("You have put some on the input");
		}else{
			const dato = [{key: Math.random().toString(), title: value}].concat(data);
			setData(dato);
			setValue('');
			setIsVisible(false);
		}
	};

	return (
		<View style={styles.container}>
			<Header/>
			<View style={styles.body}>
				<Button
					title="Agregar"
					onPress={handlePress}
				/>
				<FlatList
					style={styles.list}
					data={data}
					renderItem={Item}
				/>
				<Modal
					animationType="slide"
					visible={isVisible}
				>
					<View style={styles.modal}>
						<Text
							style={styles.close}
							onPress={handlePress}
						>X</Text>
						<Input
							placeholder="Agreagar una película"
							onChange={handleChange}
							value={value}
							close={handlePress}
						/>
						<Button
							title="Agregar"
							onPress={handleSave}
						/>
					</View>
				</Modal>
			</View>
		</View>
	);

};
export default Index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},

	body: {
		position: 'absolute',
		bottom: 0,
		height: '85%',
		width: '100%',
		backgroundColor: '#08202e',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	list: {
		width: '100%',
		paddingHorizontal: 16,
		marginTop: 15,
		paddingBottom: 15
	},
	modal: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#08202e',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
	close: {
		color: '#FFF',
		fontSize: 36,
		position: 'absolute',
		fontFamily: 'fira',
		top: 10,
		right: 20,
	}
});
