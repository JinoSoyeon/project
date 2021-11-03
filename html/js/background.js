const images =["aida.jpg", "02.jpg", "03.jpg", "05.jpg" ];

const choseImage = images[Math.floor(Math.random()*images.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${choseImage}`;


document.body.appendChild(bgImages);

bgImages.id = 'bgImage';