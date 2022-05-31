import React from 'react'
import {Page, ResourceList, ResourceItem, Card, Thumbnail, Stack, TextStyle} from '@shopify/polaris';
import ActionListInPopover from '../base/ActionListInPopOver';


function SelectedProducts({selectedProducts, emptyProducts}) {
	console.log(selectedProducts);
	// console.log(emptyProducts);
	const renderCard = (product) => {
		const id = product.variants[0].displayName;
		const image = product.images[0] ?
			(
				<Thumbnail source={product.images[0].originalSrc} alt={'thumbnail'}/>
			)
			:
			(
				<Thumbnail source={'../../src/assets/placeholder.jpg'} alt={'thumbnail'}/>
			);

		return (
			<Card>
				<ResourceItem id={id} media={image}>
					<Stack>
						<Stack.Item>
							<TextStyle variation="strong"> {product.variants[0].displayName} </TextStyle>
						</Stack.Item>
						<Stack.Item>
							<TextStyle variation="strong"> {product.variants[0].price} </TextStyle>
						</Stack.Item>
					</Stack>
				</ResourceItem>
			</Card>
		)
	}

	return (
		<Page primaryAction={{
			content: "Go back",
			onAction() {
				emptyProducts([]);
			}
		}}
		>
			<ActionListInPopover data={ selectedProducts }/>
			<ResourceList
				showHeader
				resourceName={{singular: "Product", plural: "Products"}}
				items={selectedProducts}
				renderItem={renderCard}
			/>
		</Page>
	)
}

export default SelectedProducts;
