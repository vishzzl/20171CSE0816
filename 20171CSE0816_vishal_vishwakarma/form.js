function validate(){
	
	var Fname=document.getElementById("Fname").value;
	var Lname=document.getElementById("Lname").value;
	var age=document.forms["jobfair"]["age"].value;
	var mail=document.forms["jobfair"]["mail"].value;
	var phno=document.getElementById("phno").value;
	var TmarksP=document.getElementById("TmarksP").value;
	var TmarksC=document.getElementById("TmarksC").value;
	var PmarksP=document.getElementById("PmarksP").value;
	var PmarksC=document.getElementById("PmarksC").value;
	var DmarksP=document.getElementById("DmarksP").value;
	var DmarksC=document.getElementById("DmarksC").value;
	var Spec=document.getElementById("Spec").value;
	var dob=document.getElementById("dob").value;
	var yop=document.getElementById("yop").value;
	var s1=document.getElementById("s1");
	var s2=document.getElementById("s2");
	var s3=document.getElementById("s3");
	var s4=document.getElementById("s4");
	var s5=document.getElementById("s5");
	var pic=document.getElementById("pic").value;
	var sign=document.getElementById("sign").value;
	var resume=document.getElementById("resume").value;

	
	
	if(Fname=="" ){
		alert("first name cannot be empty");
		document.getElementById("Fname").focus();
		return false;
	}
	if(Fname.length<3){
		alert("Enter valid name");
		document.getElementById("Fname").focus();
		return false;
		
	}
	if(Lname=="" ){
		alert("last name cannot be empty");
		document.getElementById("Lname").focus();
		return false;
	}
	
	
	
	if(dob==null || dob=="")
	{
		alert("enter DOB");
		document.getElementById("dob").focus();
		return false;
		
	}
	
	
	if(age==""){
		alert("Age cannot be empty");
		document.getElementById("age").focus();
		return false;
	}
	if(mail==""){
		alert("mail cannot be empty");
		document.getElementById("mail").focus();
		return false;
	}
	if(!phno.match(/^\d{10}$/)){
		alert("ph no is invalid");
		document.getElementById("phno").focus();
		return false;
	}
			
	
	if ((TmarksP=="" && TmarksC=="")||(TmarksP!=="" && TmarksC!=="")){
	alert("enter marks percentage or Cgpa not both!!!");
		document.getElementById("TmarksP").focus();
		return false
	}
	
	if ((PmarksP=="" && PmarksC=="")||(PmarksP!=="" && PmarksC!=="")){
	alert("enter marks percentage or Cgpa not both!!!");
		document.getElementById("PmarksP").focus();
		return false
	}
	if ((DmarksP=="" && DmarksC=="")||(DmarksP!=="" && DmarksC!=="")){
	alert("enter marks percentage or Cgpa not both!!!");
		document.getElementById("DmarksP").focus();
		return false
	}
	if(Spec=="0"){
		alert("select branch");
		document.getElementById("Spec").focus();
		return false;
	}
	if(yop=="0"){
		alert("select branch");
		document.getElementById("yop").focus();
		return false;
	}
	if(!s1.checked&&!s2.checked&&!s3.checked&&!s4.checked&&!s5.checked){
		alert("select atleast one technical skill")
		document.getElementById("s1").focus;
		return false;
		
	}
	if(pic==""){
		alert("upload photo");
		document.getElementById("pic").focus;
		return false;
	}
	if(sign==""){
		alert("upload sign");
		document.getElementById("sign").focus;
		return false;
	}
	if(resume==""){
		alert("upload resume");
		document.getElementById("resume").focus;
		return false;
	}

	alert("sucessfully registered");
	
	
}