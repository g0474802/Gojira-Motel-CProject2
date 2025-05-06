function getTimeBasedMessage() {
    const now = new Date();
    const hour = now.getHours();
    let message = "";

    if (hour >= 5 && hour < 12) {//determines what the time is and outputs a message based on the time
      message = "Good morning! Welcome to the Gojira Motel.";
    } else if (hour >= 12 && hour < 17) {
      message = "Good afternoon! Enjoy your stay at the Gojira Motel.";
    } else if (hour >= 17 && hour < 21) {
      message = "Good evening! Kick back and relax with Gojira movies.";
    } else {
      message = "Good night! We hope you sleep well at the Gojira Motel.";
    }

    return message;
  }
  document.getElementById("GoodMAE").innerText = getTimeBasedMessage();
//---------------------------------
document.addEventListener("DOMContentLoaded", function () {//waits for the document to be fully loaded to prevent null errors
  document.getElementById("calculateBtn").addEventListener("click", function () {//event listener for the button click
    updateGuestCost();
  });
});

function GuestMessage() {//function that calculates the total cost for all guests
  const guestCount = parseFloat(document.getElementById("guestInput").value);
  if (!isNaN(guestCount)) {//determines if input is or isn't a number
    const costPerGuest = 50; // declares cost per guest
    return guestCount * costPerGuest;//equation for total cost
  } else {
    return "an invalid number.";
  }
}

function updateGuestCost() {//
  const result = GuestMessage();
  const message = isNaN(result)
    ? "Please enter a valid number of guests."
    : "The total average cost for all guests is $" + result;
  document.getElementById("guestNum").innerHTML = message;
}

document.addEventListener('DOMContentLoaded', function () {
  const zipInput = document.getElementById('zipcode');
  const resultDiv = document.getElementById('zip-result');

  if (zipInput) {
    zipInput.addEventListener('input', function () {
      const zip = this.value;

      if (zip.length === 5 && /^\d+$/.test(zip)) {
        fetch(`https://api.zippopotam.us/us/${zip}`)
          .then(response => {
            if (!response.ok) throw new Error('ZIP not found');
            return response.json();
          })
          .then(data => {
            resultDiv.textContent = `Valid ZIP: ${data.places[0]['place name']}, ${data.places[0]['state abbreviation']}`;
            resultDiv.style.color = 'green';
          })
          .catch(() => {
            resultDiv.textContent = 'Invalid ZIP code.';
            resultDiv.style.color = 'red';
          });
      } else {
        resultDiv.textContent = '';
      }
    });
  }
});
