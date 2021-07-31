
console.log("loging");
document.querySelector('#btn').addEventListener('click', () =>{
     //check if the current name is already exist..
     if(document.querySelector('#dinoNmame') !== null){
        document.querySelector('#dinoName').remove();
    }
     //check if the current img is already exist..
     if(document.querySelector('#dinoImage') !== null){
        document.querySelector('#dinoImage').remove();
    }
    getDinoName();
    getDinoImage();
});


const getDinoName = async () =>{
    const res = await fetch('/dinoname');
    const data = await res.json();
    let dinoName = data[0].join(' ')
    console.log(dinoName);

    let dinoNameDiv = document.createElement('div');
    dinoNameDiv.id = 'dinoName';
    dinoNameDiv.textContent = dinoName;

    document.querySelector('#dinoWrapper').appendChild(dinoNameDiv);
}

const getDinoImage = async () =>{
    const res = await fetch('/dinoimage');
    const data = await res.json();
    let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
    let dinoImageUrl = dinoImage.thumbnailUrl;
    let dinoAlt = dinoImage.name;
    console.log(dinoImage);

    /*
    //check if the current img is already exist..
    if(document.querySelector('#dinoImage') !== null){
        document.querySelector('#dinoImage').remove();
    }
    */

    //create an image
    let img = document.createElement('img');
    img.id = 'dinoImage';
    img.src = dinoImageUrl;
    img.alt = dinoAlt;
    document.querySelector('#dinoWrapper').appendChild(img);
}