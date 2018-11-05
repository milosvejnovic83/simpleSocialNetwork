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
					for(i=0; i < friends1.length; i++) {
						var tblRow = "<tr>" + 
						"<td>" + data[friends1[i] - 1].firstName + "</td>" +
						"<td>" + data[friends1[i] - 1].surname + "</td>" + 
						"<td>" + data[friends1[i] - 1].age + "</td>" + 
						"<td>" + data[friends1[i] - 1].gender + "</td>" + "</tr>"
						$(tblRow).appendTo("#friends tbody");
					}			
			}, 1000)		
			setTimeout( function() {	
				function notContainedIn(arr) {
					return function arrNotContains(element) {
						return arr.indexOf(element) === -1;
					};
				}
				var user = window.location.hash.substring(1) - 1;
				var friends1 = data[user].friends;
				var allFriends = new Array;				
					for (i=1; i<=Object.keys(data).length; i++) {
						allFriends.push(i);	
					} 				
				var filtered = allFriends.filter(notContainedIn(friends1));
				var friendsFriends = new Array;
					for (i=0; i<friends1.length; i++) {					
						if (i != user){ 					
						var x=0;
						friendsFriends = data[friends1[i] - 1].friends;						
							for(i1=0; i1<friendsFriends.length; i1++) {								
								var id1 = friendsFriends[i1];
								for(i2=0; i2<filtered.length; i2++) {									
									id2 = filtered[i2]									
									if (id1 == id2) {
										x = x+1;
									}														
								}								
							}								
							if (x > 1) {
								var tblRow = "<tr>" + 
								"<td>" + data[i].firstName + "</td>" +
								"<td>" + data[i].surname + "</td>" + 
								"<td>" + data[i].age + "</td>" + 
								"<td>" + data[i].gender + "</td>" + "</tr>"
								$(tblRow).appendTo("#suggested tbody");			
							}	
						}					
					}							
			}, 1500)			
	})
	.fail(function (error) {
				console.log(error);
	});
}
window.onload = details();

