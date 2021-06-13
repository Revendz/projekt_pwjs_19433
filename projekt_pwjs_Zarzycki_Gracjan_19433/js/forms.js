function checkForm(){
    var error=false; 
    var contactName = document.getElementById("contactName");
    var contactEmail = document.getElementById("contactEmail");
    var contactInfo = document.getElementById("contactInfo");
    

 if (contactName.value == ""){
        document.getElementById("name").className="form-group has-error";
        document.getElementById("errorName").className="alert alert-danger";
        error=true;
    }
    else
    {
        document.getElementById("errorName").className="hide";
        document.getElementById("name").className="form-group has-success";
    }
    if(contactEmail.value == ""){
        document.getElementById("mail").className="form-group has-error";
        document.getElementById("errorEmail").className="alert alert-danger"; 
        error=true;
    } 
    else
    {
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
    if(regex.test(email)==false)
    {
        document.getElementById("mail").className="form-group has-error";
        document.getElementById("errorEmail").innerHTML="Podaj prawidłowy adres email";
        document.getElementById("errorEmail").className="alert alert-danger"; 
        error=true;
    }
    else
    {
        document.getElementById("errorEmail").className="hide";
        document.getElementById("mail").className="form-group has-success";
    }
    }
    if (contactInfo.value == "")
    {
        document.getElementById("info").className="form-group has-error";
        document.getElementById("errorInfo").className="alert alert-danger"; 
        error=true;
    }
    else
    {
        document.getElementById("errorName").className="hide";
        document.getElementById("info").className="form-group has-success";
    }
    if (!error) return true; 
    else return false;
    }


 

