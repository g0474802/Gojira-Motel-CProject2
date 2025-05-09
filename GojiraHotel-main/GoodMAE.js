function getTimeBasedMessage() {
  const now = new Date();
  const hour = now.getHours();
  let message = "";

  if (hour >= 5 && hour < 12) {
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

// Original:
// document.getElementById("GoodMAE").innerText = getTimeBasedMessage();
// jQuery replacement:
$("#GoodMAE").text(getTimeBasedMessage());

//---------------------------------

// Original:
// document.addEventListener("DOMContentLoaded", function () {
$(document).ready(function () {
  // Original:
  // document.getElementById("calculateBtn").addEventListener("click", function () {
  $("#calculateBtn").on("click", function () {
      updateGuestCount();
  });

  // Original:
  // document.querySelector(".room-info").style.display = "block";
  $(".room-info").css("display", "block");
});

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
