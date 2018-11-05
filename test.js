function table() {
var dataJson = './data.json';
$.get(dataJson)
	.done(function(data) {
		$.each(data, function (index, value) {
			Object.keys(value).forEach(function(key) {
				if(value[key] === null || value[key] === "") {
				value[key] = "-";
			};
			})
			var tblRow = "<tr>" + 
			"<td style=\"display:none\">" + value.id + "</td>" +
			"<td>" + value.firstName + "</td>" +
			"<td>" + value.surname + "</td>" + 
			"<td>" + value.age + "</td>" + 
			"<td>" + value.gender + "</td>" + "</tr>"
			$(tblRow).appendTo("#users tbody");
			var table = document.getElementById("users");
			var rows = table.getElementsByTagName("tr");
			for (i = 1; i < rows.length; i++) {
				row = table.rows[i];
				row.onclick = function(){
                          var cell = this.getElementsByTagName("td")[0];
                          var id = cell.innerHTML;           
						  window.location.href = 'user.html' + '#' + id;
                };	
			}
		})
				
	})
	.fail(function (error) {
				console.log(error);	
	});
}
window.onload = table();