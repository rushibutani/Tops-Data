document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  const mobileInput = document.querySelector('input[placeholder="Mobile:"]');

  mobileInput.addEventListener("input", function (event) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/\D/g, "");
  });

  function validateForm() {
    const nameInput = document.querySelector('input[placeholder="Name:"]');
    const mobileInput = document.querySelector('input[placeholder="Mobile:"]');

    const nameRegex = /^[a-zA-Z]{3,6}$/;
    if (!nameRegex.test(nameInput.value)) {
      alert("Name field must contain 3 to 6 alphabets only.");
      return false;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileInput.value)) {
      alert(
        "Mobile field must contain 10 digits only and accept only numbers."
      );
      return false;
    }

    const otherInputs = form.querySelectorAll(
      'input:not([placeholder="Name:"]):not([placeholder="Mobile:"])'
    );
    for (const input of otherInputs) {
      if (input.value.trim() === "") {
        alert("All form fields must be filled out.");
        return false;
      }
    }

    return true;
  }
});
