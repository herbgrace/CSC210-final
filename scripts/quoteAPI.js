document.addEventListener('DOMContentLoaded', function() {
    fetchQuote();

    const image=document.getElementById("slideshow-image");
    const img_array=["images/cleo.jpg", "images/tonk1.jpg", "images/tonk2.jpg", "images/tonk3.jpg", "images/random1.jpg", "images/random2.jpg"];
    var index=1;
    const interval = 2000;
    function slide() {
        image.src = img_array[index++%img_array.length];
    }

    setInterval(slide, interval);


    async function fetchQuote() {
        try{
            // Pretty please don't take, random people on the internet.
            // I need this for my assignment, and it's limited anyway (it won't charge me and will just break my website). 
            const API_KEY = "PUT API KEY HERE"
            const LINK = "https://api.api-ninjas.com/v1/quotes?X-Api-Key=" + API_KEY;
            const response = await fetch(LINK);

            if (!response.ok) {
                if (response.status === 404) {
                    document.getElementById("quote-text").textContent = "API Quota Limit Reached, please try again later."
                    document.getElementById("author").textContent = "This was a calculated risk... Too Bad!"
                }
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