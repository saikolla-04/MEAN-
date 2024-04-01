// Function to calculate days between two dates
function calculateDays() {
    // Get the inputted joining date
    let joinDateInput = document.getElementById('joiningDate').value;
  
    // Convert the input string to a Date object
    let joinDate = new Date(joinDateInput);
  
    // Get today's date
    let today = new Date();
  
    // Calculate the difference in milliseconds
    let timeDifference = today - joinDate;
  
    // Convert milliseconds to days
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    // Display the result
    document.getElementById('output').innerHTML = `
      Joining Date: ${joinDate.toLocaleDateString()}<br>
      Today's Date: ${today.toLocaleDateString()}<br>
      Days Since Joining: ${daysDifference} days
    `;
  }
  