//Sarah Goodwin 3 7 25
function checkCreds() 
//this is function that links into the html
{
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + lastName; //This adds first name and last name 
    var zipCode = document.getElementById("zipcode").value; 
    
    if (fullName.length > 20) //first and last name can not be more than 20 characters
    {
        document.getElementById("loginStatus").innerHTML = "Secret Squirrel keep it short and squeaky- 20 characters max!";
        //if it is they will be met by this error
    }
    
    else if (zipCode.length !== 5) /*zipcode must be 5 digits*/
    {
        document.getElementById("loginStatus").innerHTML = "No classified squirrel operations in that sector. Enter a valid 5-digit coordinate";
        /*if zipcode is not 5 digits user receives this error*/
    }

    else
    {
        document.getElementById("loginStatus").innerHTML = "Agent " + lastName + ", Verified. The Nutwork welcomes you!"; //if user passes the first two
        //requirements they are alerted with their "secret message"
        alert ("You have passed the credentials check");
    }

}