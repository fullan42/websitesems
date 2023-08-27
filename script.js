// Create an array named "books" with 10 books about Şems Tabrizi and Mevlana Celaleddin Rumi
// JavaScript code to populate the book list with images
const imageUrls = [
    "assets/images/mesnevi.jpg",
    "assets/images/notdefteri.jpg",
    "assets/images/askingozyaslari.jpg",
    "assets/images/askiala.jpg",
    "assets/images/askinsonnefesi.jpg",
    "assets/images/dostvemevlana.jpg",
    "assets/images/mesnevideinsan.jpg",
    "assets/images/benruzgarimsenates.jpg",
    "assets/images/gonullersultani.jpg",
];

const books = [
    { title: "Mesnevi", author: "Mevlana Celaleddin Rumi", imageSrc: imageUrls[0] },
    { title: "Şems-i Tebrizi'nin Not Defteri ", author: "(Mehmet Hakan Alşan)", imageSrc: imageUrls[1] },
    { title: "Şems Tebrizi - Aşkın Gözyaşları", author: "Sinan Yağmur", imageSrc: imageUrls[2] },
    { title: "Aşk-I Ala", author: "Şems-i Tebrizi", imageSrc: imageUrls[3] },
    { title: "Aşkın Son Nefesi", author: "Hasan Arif", imageSrc: imageUrls[4] },
    { title: "Dost, Mevlana", author: "Yakup Şafak", imageSrc: imageUrls[5] },
    { title: "Mesnevi'de İnsan", author: "Mevlana Celaleddin Rumi", imageSrc: imageUrls[6] },
    { title: "Ben Rüzgarım Sen Ateş", author: "Mevlana Celaleddin Rumi", imageSrc: imageUrls[7] },
    { title: "Gönüller Sultanı", author: "Turan Bozkurt", imageSrc: imageUrls[8] },
    // Diğer Türkçe kitapları ve yazarları eklemeye devam edebilirsiniz.
];

  


let bookList = document.getElementById("bookList");

books.forEach(function(book) {
    let listItem = document.createElement("li");
    let bookImage = document.createElement("img");
    bookImage.src = book.imageSrc;
    bookImage.alt = book.title;

    let bookInfo = document.createElement("div");
    bookInfo.innerHTML = `<strong>${book.title}</strong> - ${book.author}`;

    listItem.appendChild(bookImage);
    listItem.appendChild(bookInfo);
    bookList.appendChild(listItem);
});
