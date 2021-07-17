console.log("loging");
document.querySelector('#btn').addEventListener('click', () =>{
    getDinoName();
});


const getDinoName = async () =>{
    const res = await fetch('/dinoname');
    const data = await res.json();
    let dinoName = data[0].join(' ')
    console.log(dinoName);
}