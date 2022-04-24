var json = [{
    "name" : "Mano S", 
    "Age"   : 26,
    "Designation" : "Full Stack Developer",
    "Email": "manokcg@gmail.com"
},
{
    "name" : "Madhan", 
    "Age"   : 23,
    "Designation" : "Technical Support",
    "Email": "madhan123@gmail.com"
}];
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.Age);
    console.log(obj.Designation);
    console.log(obj.Email);

}
json.forEach(function(obj) { console.log(obj.Email); });

for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].name);
  console.log(json[key].Age);
 
}
}
let details = "";
for (let x of json[key].name) {
 details += x; 
}
 console.log(details);
