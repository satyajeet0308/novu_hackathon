document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
  
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
  
    // Convert form data to JSON object
    var jsonObject = {};
    formData.forEach(function(value, key) {
      jsonObject[key] = value;
    });
  
    console.log(jsonObject, "payload");
    
    // Fetch the backend API endpoint
    fetch("/novunotification/send", {  // Assuming the backend API endpoint is /api/submit-form
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonObject)
    })
    .then(function(response) {
      if (response.ok) {
        // Success message
        alert("Form submitted successfully!");
        form.reset(); // Reset the form
      } else {
        // Error message
        alert("Error submitting form. Please try again.");
      }
    })
    .catch(function(error) {
      console.log("Error:", error);
      alert("An error occurred. Please try again later.");
    });
  });
  