// Function to handle form submission

let userform = document.getElementById("user_form");
const retrieveEntries = () => {
    let entries = localStorage.getItem("user");
    if (entries) {
        entries = JSON.parse(entries);
    }
    else {
        entries = [];
    }
    return entries;
}
let userEntries = retrieveEntries();

const displayEntries = () => {
    // const entries = retrieveEntries();
    const entries = userEntries;
    const tableEntries = entries.map((entry) => {
        const namecell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailcell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordcell = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobcell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptedTermscell = `<td class='border px-4 py-2'>${entry.acceptedTerms}</td>`;
        const row = `<tr>${namecell} ${emailcell} ${passwordcell} ${dobcell} ${acceptedTermscell}</tr>`;
        return row;
    })
    .join("\n");

    const table = `<table class="table-auto w-full"><tr>
    
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">acceptedTerms</th>
 </tr>${tableEntries} </table>`;
 let deatils = document.getElementById("user");
 deatils.innerHTML = table;
}

const saveUserForm = (event) => {
    event.preventDefault();
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = new Date(document.getElementById("DOB").value);
    const acceptedTerms = document.getElementById("acceptedTerms").checked;

    // Validate age between 18 and 55
    const age = new Date().getFullYear() - dob.getFullYear();
    if (age < 18 || age > 55) {
        alert("You must be between 18 and 55 years old to register.");
        return;
    }

    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTerms
    };
    
    userEntries = retrieveEntries();
    userEntries.push(entry);

    localStorage.setItem("user", JSON.stringify(userEntries));
    displayEntries();
    userform.reset();
}
userform.addEventListener("submit", saveUserForm)

displayEntries();
