document.addEventListener("DOMContentLoaded", function () {
    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");
    const subBtn = document.getElementById("btn");

    subBtn.addEventListener("click", (e) => {
        e.preventDefault(); 

        if (!ageInput.value || nameInput.value.trim() === "") {
            window.alert("Please enter valid details.");
            return; 
        }

        new Promise((resolve, reject) => {
            if (parseInt(ageInput.value) > 18) {
                setTimeout(() => {
                    resolve(`Welcome, ${nameInput.value}. You can vote.`);
                }, 4000);
            } else {
                setTimeout(() => {
                    reject(`Oh sorry, ${nameInput.value}. You aren't old enough.`);
                }, 4000);
            }
        })
        .then((message) => {
            console.log(message);
            window.alert(message);
        })
        .catch((message) => {
            console.log(message);
            window.alert(message);
        });
    });
});
