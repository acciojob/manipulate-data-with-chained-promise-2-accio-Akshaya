function getNumbers() {
    return new Promise((resolve) => {  // Capitalized 'Promise'
        setTimeout(() => {
            resolve([1, 2, 3, 4]); // Step 1: Return the array after 3 seconds
        }, 3000);
    });
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    getNumbers()
        .then((numbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evens = numbers.filter(num => num % 2 === 0); // Step 2: Filter out odd numbers
                    outputDiv.textContent = evens.join(", ");
                    resolve(evens);
                }, 1000);
            });
        })
        .then((evenNumbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const doubled = evenNumbers.map(num => num * 2); // Step 3: Multiply even numbers by 2
                    outputDiv.textContent = doubled.join(", ");
                    resolve(doubled);
                }, 2000);
            });
        })
        .catch(error => console.error("Error:", error));
});
