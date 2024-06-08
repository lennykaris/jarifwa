document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signinForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Retrieve saved credentials from localStorage
      var savedEmail = localStorage.getItem('email');
      var savedPassword = localStorage.getItem('password');
      
      // Validate input credentials
      var inputEmail = document.getElementById('email').value;
      var inputPassword = document.getElementById('password').value;
      if (inputEmail === savedEmail && inputPassword === savedPassword) {
        // Redirect to main website upon successful sign-in
        window.location.href = "index.html";
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
    var navList = document.getElementById("navList");
    var isLoggedIn = false; // Assume user is not logged in
  
    // Check if user is logged in (you might need to adjust this logic)
    // Example: If user is logged in, set isLoggedIn to true
    // isLoggedIn = true;
  
    if (isLoggedIn) {
      // If user is logged in, remove the sign-up button and add the profile icon
      var signUpBtn = navList.querySelector(".signup-btn");
      if (signUpBtn) {
        signUpBtn.parentNode.removeChild(signUpBtn);
      }
  
      var profileIcon = document.createElement("li");
      profileIcon.innerHTML = '<a href="profile.html" class="profile-icon">' + getFirstLetter("user@example.com") + '</a>';
      navList.appendChild(profileIcon);
    } else {
      // If user is not logged in, keep the sign-up button
      // You can customize this further as needed
    }
  
    // Function to get the first letter of the email (example)
    function getFirstLetter(email) {
      return email.charAt(0).toUpperCase();
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var navList = document.getElementById("navList");
  
    // Create Sign Up button
    var signUpButton = document.createElement("a");
    signUpButton.setAttribute("href", "signup.html");
    signUpButton.setAttribute("class", "round-button");
    signUpButton.textContent = "Sign Up";
  
    // Create Log Out button
    var logoutButton = document.createElement("a");
    logoutButton.setAttribute("href", "signup.html");
    logoutButton.setAttribute("class", "round-button");
    logoutButton.textContent = "Log Out";
  
    // Create list item to hold buttons
    var navButtons = document.createElement("li");
    navButtons.setAttribute("class", "nav-buttons");
    navButtons.appendChild(signUpButton);
    navButtons.appendChild(logoutButton);
  
    // Append the list item with buttons to the navbar
    navList.appendChild(navButtons);
  });
  