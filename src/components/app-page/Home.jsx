import {Page, EmptyState} from '@shopify/polaris';
import React, {useEffect, useState} from 'react';
import {ResourcePicker} from '@shopify/app-bridge-react';
import Select from '../app-selection/Select';
import SelectedProducts from '../app-selection/SelectedProducts';

function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [products, setProducts] = useState([]);

	const handleSelection = (payload) => {
		setIsOpen(false)
		console.log(payload);
		setProducts(payload.selection);
	}

	return (
		<>
			<ResourcePicker
				resourceType="Product"
				open={isOpen}
				onCancel={() => setIsOpen(false)}
				onSelection={handleSelection}
			/>


			{
				products.length > 0 ?
					(<SelectedProducts selectedProducts={products} emptyProducts={setProducts}/>)
					:
					(<Select setIsOpen={setIsOpen}/>)
			}
		</>
	)
}

export default Home;
