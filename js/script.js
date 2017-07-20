var password; 
var password_confirm;

$("#pass, #pass-confirm").attr("type", "password");

function emptyInput(id){
	if($("#" + id).val() == ""){
		return true;
	}
	return false;
}

function generateErrorMsg(){
	var errorMsgString = "";
	if(emptyInput("email")){
		errorMsgString += generatePTags("email")
	}
	if(emptyInput("phone")){
		errorMsgString += generatePTags("phone number");
	}
	if(emptyInput("pass")){
		errorMsgString += generatePTags("password");
	}
	if(emptyInput("pass-confirm")){
		errorMsgString += generatePTags("password confirmation");
	}
	return errorMsgString;
}

function generatePTags(string){
	return("<p>" + string + "</p>");
}

function passwordCompare(pass, pass_confirm){
	if(pass == "" && pass_confirm == ""){
		return ""
	}
	if(pass != pass_confirm){
		return generatePTags("Your passwords don't match");
	} else {
		return "";
	};
}

function isEmail(email){
	var regex= /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(email)){
		return generatePTags("Email is not good.");
	} else{
		return "";
	}
}

$("#submit").click(function() {
    var string = "The following field(s) are missing:";
    password = $("#pass").val();
    password_confirm = $("#pass-confirm").val();
    string += isEmail($("#email").val());
    string += generateErrorMsg();
    string += passwordCompare(password, password_confirm);
    if(string == "The following field(s) are missing:"){
    	$("#messages").css("color", "green");
    	$("#messages").html("success");
    } else {
    	$("#messages").css("color","red");
    	$("#messages").html(string);
    }
});