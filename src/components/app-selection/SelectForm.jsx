import React, {useCallback, useState} from 'react'
import {Button, Form, FormLayout, TextField} from "@shopify/polaris";
import {gql, useQuery} from "@apollo/client";

function SelectForm() {
	// const getProducts = () => {
	// 	const GET_PRODUCTS = gql`{
	// 	products(first: 10) {
	// 		edges {
	// 			node {
	// 				id
	// 				title
	// 				description
	// 			}
	// 		}
	// 	}
	// }
	// `
	// 	const {loading, data} = useQuery(GET_PRODUCTS);
	// 	//if (loading) return <Spinner size="large"/>
	// 	console.log(loading)
	// 	console.log(data)
	// }
	//
	// getProducts()



	const [number, setNumber] = useState('');

	const handleNumberChange = useCallback( async (value) => {
		setNumber(value);
		console.log(number);
	}, []);

	const handleSubmit = useCallback((event) => {
		event.preventDefault();
		console.log(number);
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			<FormLayout>

				<TextField
					value={number}
					onChange={handleNumberChange}
					type="number"
					autoComplete=""
					label="Export first N product"
					helpText={
						<span>Enter a value {number}</span>
					}
				/>

				<Button submit primary>Submit</Button>
			</FormLayout>
		</Form>
	)
}

export default SelectForm;
