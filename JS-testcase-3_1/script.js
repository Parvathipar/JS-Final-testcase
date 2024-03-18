function validation() {
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let phone_number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password_check = document.getElementById("pw2").value;

    let namePattern = /^[a-zA-Z]+$/;
    let phonePattern = /^\d{10}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if (!namePattern.test(first_name) || !namePattern.test(last_name))
     {
        alert("Please enter characters only for first and last name.");
    }
     else if (!phonePattern.test(phone_number))
      {
        alert("Invalid phone number");
       } 
       else if (!emailPattern.test(email)) 
       {
        alert("Invalid email address");
       } 
       else if (!passwordPattern.test(password)) 
       {
        alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.");
       } 
       else if (password !== password_check) 
       {
        alert("Passwords do not match");
        } 
        else {
        alert("Successfully submitted");
       }
}





