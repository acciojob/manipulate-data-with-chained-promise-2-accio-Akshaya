function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]); // Step 1: Resolve with an array after 3 seconds
        }, 3000);
    });
}

// Ensure script runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    getNumbers()
        .then((numbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evens = numbers.filter(num => num % 2 === 0); // Filter out odd numbers
                    outputDiv.textContent = evens.join(", "); // Update output
                    resolve(evens);
                }, 1000);
            });
        })
        .then((evenNumbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const doubled = evenNumbers.map(num => num * 2); // Multiply by 2
                    outputDiv.textContent = doubled.join(", "); // Update output
                    resolve(doubled);
                }, 2000);
            });
        })
        .catch(error => console.error("Error:", error));
});

