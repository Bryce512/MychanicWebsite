document.addEventListener("DOMContentLoaded", () => {
    let url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScZXGbCSGwHqBFkdk9cnGg0gM-7oylFr0k38D0evfRNlJTB_Q/formResponse"; // Action URL
    let form = document.querySelector("#contactForm"); // Form element

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent default form submission behavior

            fetch(url, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: getInputData()
            })
            .then(() => {
                console.log("Form submitted successfully");
                alert("Success! Thank you for signing up!");
                // Optionally, reset the form after successful submission
                form.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error signing up! Please Try again.");
            });
        });
    } else {
        console.error("Form not found. Make sure the form element ID matches the one in the JavaScript code.");
    }

    // Populating input data
    function getInputData() {
        let dataToPost = new URLSearchParams(); // URLSearchParams for x-www-form-urlencoded

        // Fill name attributes to corresponding values
        dataToPost.append("entry.1466549678", document.querySelector("#name").value);
        dataToPost.append("entry.238486940", document.querySelector("#email").value);
        dataToPost.append("entry.602600403", document.querySelector("#phone").value);

        return dataToPost.toString(); // Convert URLSearchParams to string for body
    }
});
