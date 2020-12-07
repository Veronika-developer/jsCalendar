const btn = document.querySelector('.btn-start');
const container = document.querySelector('.container');
const months = 24;

const openDoor =(path,event)=>{
    event.target.parentNode.style.backgroundImage = `url("${path}")`;
    event.target.style.backgroundColor = "#333";
    event.target.style.opacity = 0;

}

const createCalender = () =>{
    console.log('test');

    for(let i = 0; i < months; i++){
        const calendarDoor = document.createElement('div');
        calendarDoor.classList.add('img');
        calendarDoor.style.gridArea = "door" + (i+1);
        container.appendChild(calendarDoor);

        const calendarDoorText = document.createElement('div');
        calendarDoorText.classList.add('text');
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        let picNumber = i+1;
        let picPath = `./img/pic${picNumber}.jpg`;

        calendarDoorText.addEventListener('click',openDoor.bind(null,picPath));

    }
}

btn.addEventListener('click', createCalender);