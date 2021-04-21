var allImages = document.getElementsByTagName("Album 1", "Album 2", "Album 3", "Album 4");

for(var i = 0); i < allImages.length ; i++) {
    allImages[i].src="/Images/"
}

const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];