document.addEventListener('DOMContentLoaded', function() {
    fetchQuote();

    async function fetchQuote() {
        try{
            const API_KEY = "PUT API KEY HERE"
            const LINK = "https://api.api-ninjas.com/v1/quotes?X-Api-Key=" + API_KEY;
            const response = await fetch(LINK);

            if (!response.ok) {
                throw new Error("Unable to fetch the quote of the day, please try again later.")
            }
            const quote = await response.json();
            console.debug(quote);
            document.getElementById("quote-text").textContent = "\"" + quote[0].quote + "\"";
            document.getElementById("author").textContent = "-" + quote[0].author;
        } catch (err) {
            console.debug(err);
        }
    }
})