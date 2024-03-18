let books = [
    { title: "Chandalika", author: "Rabindra Nath Tagore", price: "$100" },
    { title: "Anandmath", author: "Bankim Chandra Chatterjee", price: "$150" },
    { title: "Conquest of self", author: "Mahatma Gandhi", price: "$290" },
    { title: "Bunch of old letters", author: "Jawahar Lal Nehru", price: "$230" }
  ];
  
  function displayBooks() {
    const booksTableBody = document.getElementById("booksTableBody");
    booksTableBody.innerHTML = "";
    books.forEach(book => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price}</td>
      `;
      booksTableBody.appendChild(row);
    });
  }
  
  function PromptaddBook() {
    const title = prompt("Enter the title of the book:");
    const author = prompt("Enter the author of the book:");
    const price = prompt("Enter the price of the book:");
    if (title && author && price) {
      books.push({ title, author, price });
      displayBooks();
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const price = document.getElementById("price").value;
    if (title && author && price) {
      books.push({ title, author, price });
      displayBooks();
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("price").value = "";
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  function searchBook() {
    const searchTitle = prompt("Enter the title of the book you're searching for:");
    if (searchTitle) {
      const searchResults = books.filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase()));
      const resultsTableBody = document.getElementById("resultsTableBody");
      resultsTableBody.innerHTML = "";
      if (searchResults.length > 0) {
        searchResults.forEach(book => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.price}</td>
          `;
          resultsTableBody.appendChild(row);
        });
        document.getElementById("searchResults").style.display = "block";
      } else {
        alert("No matching books found.");
      }
    }
  }
  
  window.addEventListener('load', displayBooks);

  