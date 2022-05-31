import React, {useCallback, useState} from 'react';
import {ActionList, Button, Popover} from '@shopify/polaris';
import csvExport from "../../utilities/export-to-csv";


function ActionListInPopover({ data }) {
	const [active, setActive] = useState(true);

	const toggleActive = useCallback(() => setActive((active) => !active), []);

	const handleExportedAction = useCallback(
		() => {

			const csvHeadings = ['id', 'name', 'total inventory', 'vendor', 'price'];
			const exportDataRows = data.map( item => {
				return [
					item.id,
					item.handle,
					item.totalInventory.toString(),
					item.vendor,
					item.variants[0].price
				]
			})

			exportDataRows.unshift(csvHeadings);
			csvExport(exportDataRows)
		},
		[],
	);

	const activator = (
		<Button onClick={toggleActive} disclosure>
			More actions
		</Button>
	);

	return (
		<div style={{marginBottom: '20px'}}>
			<Popover
				active={active}
				activator={activator}
				autofocusTarget="first-node"
				onClose={toggleActive}
			>
				<ActionList
					actionRole="menuitem"
					items={[
						{
							content: 'Export data',
							onAction: handleExportedAction,
						},
					]}
				/>
			</Popover>
		</div>
	);
}

export default ActionListInPopover;
