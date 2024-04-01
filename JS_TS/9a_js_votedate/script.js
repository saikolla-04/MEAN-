// Function to validate age for voting
function validateAge() {
  // Get the inputted name and date of birth
  let name = document.getElementById('name').value;
  let dobInput = document.getElementById('dob').value;
  let doeInput = document.getElementById('doe').value;

  // Convert the input string to a Date object
  let dob = new Date(dobInput); //data of birth
  let doe = new Date(doeInput); //date of election

  // Calculate the age
  let ageInMilliseconds = doe - dob;
  let ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  let remainedMonths = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  let remainedDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

  // Check eligibility
  let eligibilityStatus = (ageInYears >= 18) ? 'Qualified to Vote' : 'Not Qualified to Vote';

  // Display the result
  document.getElementById('output').innerHTML = `
    Name: ${name}<br>
    Age: ${ageInYears} years ${remainedMonths} mos ${remainedDays} days<br>
    Eligibility Status: ${eligibilityStatus}
  `;
}
