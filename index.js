// Function to handle form submission
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = new Date(document.getElementById("dob").value);
    const acceptedTerms = document.getElementById("acceptedTerms").checked;

    // Validate age between 18 and 55
    const age = new Date().getFullYear() - dob.getFullYear();
    if (age < 18 || age > 55) {
        alert("You must be between 18 and 55 years old to register.");
        return;
    }

    // Create a new table row for the entry
    const tableBody = document.getElementById("userTable");
    const newRow = tableBody.insertRow();

    // Add data to the row
    const nameCell = newRow.insertCell();
    const emailCell = newRow.insertCell();
    const passwordCell = newRow.insertCell();
    const dobCell = newRow.insertCell();
    const acceptedTermsCell = newRow.insertCell();

    nameCell.textContent = name;
    emailCell.textContent = email;
    passwordCell.textContent = password;
    dobCell.textContent = dob.toDateString();
    acceptedTermsCell.textContent = acceptedTerms ? "Yes" : "No";

    

    // Clear the form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("acceptedTerms").checked = false;

    // Save the data to localStorage
    const entryData = JSON.parse(localStorage.getItem('entries')) || [];
    entryData.push({ name, email });
    localStorage.setItem('entries', JSON.stringify(entryData));
});

 // Function to load existing entries from localStorage
 function loadEntries() {
    const entryData = JSON.parse(localStorage.getItem('entries')) || [];
    for (const entry of entryData) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${entry.name}</td><td>${entry.email}</td>`;
        entryTableBody.appendChild(newRow);
    }
}

// Event listener for form submission
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    updateTable();
    registrationForm.reset();
});

// Load existing entries on page load
loadEntries();
