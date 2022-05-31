import  React, { useState, useCallback } from 'react';
import {
	EmptyState, Page, Layout, Button, ButtonGroup, Spinner, Form, FormLayout, TextField
} from "@shopify/polaris";

import {gql, useQuery} from "@apollo/client";
import SelectForm from './SelectForm';

function Select({setIsOpen}) {

	const openResourcePicker = () => {
		console.log('open picker');
		setIsOpen(true);
	}

	return (
		<Page title="Products CSV Export">
			<Layout>
				<Layout.Section oneHalf>
					<h2 style={{ paddingBottom: '4px' }}> Specifc exports </h2>
					<Button primary onClick={openResourcePicker}>
						Export specific products
					</Button>
				</Layout.Section>
				<Layout.Section oneHalf>
					<SelectForm/>
				</Layout.Section>
			</Layout>
		</Page>
	)
}

export default Select;

