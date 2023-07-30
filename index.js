document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTerms = document.getElementById("acceptedTerms").checked;

    const tableBody = document.querySelector("#userTable tbody");
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${acceptedTerms ? 'Yes' : 'No'}</td>`;

    // Clear the form
    document.getElementById("registrationForm").reset();
});
