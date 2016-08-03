
function Ashland() {
		map.addLayer({
			'id': 'ashlandWetlands',
			'type': 'fill',
			'source': 'ashlandWetlands',
			'layout': {},
			'paint': {
				'fill-color': '#f08',
				'fill-opacity': 0.4
			}
		}, 'water');
		
		map.removeLayer('county-fills');
		
};