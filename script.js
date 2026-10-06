//your JS code here. If required.

document.getElementById("myform").addEventListener("submit" , function (event) {
 event.preventDefault();
	let name=document.getElementById("name").value
	let age=document.getElementById("age").value
	if(name==="" || age===""){
		alert("Please enter valid details.")
	}
	else{
			promise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if(age>18){
		resolve(`Welcome, ${name} You can vote.`)
		}
		else{
			reject(`Oh sorry ${name}. You aren't old enough.`)
		}
	},4000)
})

promise.then((data)=>{
	alert(data)
}).catch((err)=>{
	alert(err)
		}
)}
	
)}

})