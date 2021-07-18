
console.log("loging");
document.querySelector('#btn').addEventListener('click', () =>{
    getDinoName();
    getDinoImage();
});


const getDinoName = async () =>{
    const res = await fetch('/dinoname');
    const data = await res.json();
    let dinoName = data[0].join(' ')
    console.log(dinoName);
    document.querySelector('#dinoname').textContent = dinoName;
}

const getDinoImage = async () =>{
    const res = await fetch('/dinoimage');
    const data = await res.json();
    let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
    let dinoImageUrl = dinoImage.thumbnailUrl;
   // let dinoAlt = dinoImage.name;
    console.log(dinoImage);

    //create an image
    let img = document.createElement('img');
    img.src = dinoImageUrl;
   // img.alt = dinoAlt;
    document.querySelector('body').appendChild(img);
}