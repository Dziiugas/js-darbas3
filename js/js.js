document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector(".form-control").value;
    const apiUrl = `https://strangerthings-quotes.vercel.app/api/quotes/50`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);

            if (data.Quote) {
                showQuote(data);
              } else {
                showError(data);
              }
            });
        });
        
const showQuote = (data) => {
          document.querySelector(".quote").textContent = data.quote;
          document.querySelector(".author").textContent = data.author;
};
const showError = (data)=>{
    document.querySelector("table").style.display = "none";
    document.querySelector('.alert').style.display='block';
    document.querySelector(".alert-danger").textContent = data.Error;
}

