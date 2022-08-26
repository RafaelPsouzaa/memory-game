const grid = document.querySelector('.grid');

const createElement = (tag,className) =>{
    const elemement = document.createElement(tag);
    elemement.className = className;
    return elemement;

}

const createCard = () =>{
    const card = createElement('div','card');

    const front = createElement ('div','face front');
    const back = createElement('div','face back');

    card.appendChild(front);
    card.appendChild(back);

    // video 19:28

}