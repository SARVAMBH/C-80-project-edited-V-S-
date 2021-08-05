var names_of_people = [];
var display_guest_array = [];
var name_of_the_guest_array = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	// use the push function as - names_of_people.push(GuestName);
	names_of_people.push(GuestName);
	console.log(names_of_people);
	console.log(GuestName);
	document.getElementById("label").innerHTML=names_of_people;
	// display the name in the id= sort_button
	document.getElementById("sort_button").innerHTML=names_of_people;
	document.getElementById("sort_button").textContent="Sorted List";
	}


function sorting()
	{
		names_of_people
		// add the sort function
		// .the sort function is .sort();
		names_of_people.sort();
		names_of_people.sort();
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
	}
function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}

function show()
{
	var i= names_of_people.join("<br>");
		console.log(names_of_people);	
		document.getElementById("sort_button").style.display="block";	
		document.getElementById("p1").innerHTML=i.toString();
}
