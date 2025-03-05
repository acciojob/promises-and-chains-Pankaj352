document.addEventListener("DOMContentLoaded", () => {
    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");
    const subBtn = document.getElementById("btn");

    subBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validation: Ensure both fields are filled
        if (!ageInput.value || nameInput.value.trim() === "") {
            window.alert("Please enter valid details"); // ✅ Removed extra period (.)
            return;
        }

        new Promise((resolve, reject) => {
            const age = parseInt(ageInput.value);
            if (age > 18) {
                setTimeout(() => {
                    resolve(`Welcome, ${nameInput.value}. You can vote.`);
                }, 4000);
            } else {
                setTimeout(() => {
                    reject(`Oh sorry ${nameInput.value}. You aren't old enough.`); // ✅ Removed extra comma
                }, 4000);
            }
        })
        .then((message) => {
            window.alert(message);
        })
        .catch((message) => {
            window.alert(message);
        });
    });
});
