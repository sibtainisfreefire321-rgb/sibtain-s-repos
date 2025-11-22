let birthdayInput = document.querySelector('#birthday'); // Renamed for clarity
let button = document.querySelector('button');
let msg = document.querySelector('#msg');

button.addEventListener('click', function () {
  if (birthdayInput && birthdayInput.value) { // Check if element exists and has a value
    const birthDate = new Date(birthdayInput.value);
    const currentdate = new Date();
    let age = currentdate.getFullYear() - birthDate.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    if (currentdate.getMonth() < birthDate.getMonth() ||
        (currentdate.getMonth() === birthDate.getMonth() && currentdate.getDate() < birthDate.getDate())) {
      age--;
    }
    msg.textContent = `Your age is: ${age}`; // Display the age, assuming #msg is for messages
    console.log(age);
  } else {
    msg.textContent = "Please enter your birthday.";
  }
});
