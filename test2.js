function details() {
var dataJson = './data.json';
$.get(dataJson)
	.done(function(data) {
			$.each(data, function (index, value) {
				Object.keys(value).forEach(function(key) {
				if(value[key] === null || value[key] === "") {
				value[key] = "-";
				};
				})
			})
			setTimeout( function() {		
				var user = window.location.hash.substring(1) - 1;
				var tblRow = "<tr>" + 
				"<td>" + data[user].firstName + "</td>" +
				"<td>" + data[user].surname + "</td>" + 
				"<td>" + data[user].age + "</td>" + 
				"<td>" + data[user].gender + "</td>" + "</tr>"
				$(tblRow).appendTo("#user tbody");	
				var friends1 = data[user].friends;
				console.log(friends1);
				for(i=0; i < friends1.length; i++) {
					var tblRow = "<tr>" + 
					"<td>" + data[friends1[i] - 1].firstName + "</td>" +
					"<td>" + data[friends1[i] - 1].surname + "</td>" + 
					"<td>" + data[friends1[i] - 1].age + "</td>" + 
					"<td>" + data[friends1[i] - 1].gender + "</td>" + "</tr>"
					$(tblRow).appendTo("#friends tbody");
				}			
			}, 1000)
	})
	.fail(function (error) {
				console.log(error);
	});
}
window.onload = details();

