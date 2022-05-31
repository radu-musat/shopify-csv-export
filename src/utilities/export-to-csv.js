export default function csvExport (array) {
	let csvContent = "data:text/csv;charset=utf-8,";
	csvContent = "data:text/csv;charset=utf-8," + array.map(e => e.join(",")).join("\n");
	console.log(csvContent)

	let encodedUri = encodeURI(csvContent);
	window.open(encodedUri)
}
