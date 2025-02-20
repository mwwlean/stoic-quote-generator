async function fetchQuote() {
    try {
        const response = await fetch('https://stoic-quotes.com/api/quote');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        document.querySelector('.quote').textContent = `"${data.text}"`;
        document.querySelector('.author').textContent = `- ${data.author}`;
    } catch (error) {
        document.querySelector('.quote').textContent = "Failed to fetch quote. Try again.";
        document.querySelector('.author').textContent = "";
    }
}
