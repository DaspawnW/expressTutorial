function storeForm() {
	$.post('/address', $('#address').serialize(), function(data) {
		addAddressToTable({
			name: $('#address').find('[name="name"]').val(),
			strasse: $('#address').find('[name="strasse"]').val(),
			ort: $('#address').find('[name="ort"]').val(),
			id: data.id
		})
	});
}

function getAddresses() {
	$.get('/address', function(data) {
		if(data.length != 0) {
			$.each(data, function(i, value) {
				addAddressToTable(value);
			});
		}
	});
}

function addAddressToTable(value) {
	$('#data-body').append('<tr data-id="' + value.id + '"><td>' + value.name + '</td><td>' + value.strasse + '</td><td>' + value.ort + '</td><td><a href="javascript:deleteAddress(' + value.id + ');">Löschen</a></a></td></tr>');
}

function deleteAddress(id) {
	$.get('/deleteAddress/' + id, function(data) {
		$('#data-body').find('tr[data-id="' + id + '"]').remove();
	});
}