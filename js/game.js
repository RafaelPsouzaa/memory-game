const grid = document.querySelector('.grid');

const characters = [
    'beth',
    'bg',
    'brain',
    'jerry',
    'jessica',
    'meeseeks',
    'pessoa-passaro',
    'pickle-rick',
    'scroopy',
    'summer',

];

const createElement = (tag,className) =>{
    const elemement = document.createElement(tag);
    elemement.className = className;
    return elemement;

}

const createCard = () => {
    const card = createElement('div','card');
    const front = createElement ('div','face front');
    const back = createElement('div','face back');
    card.appendChild(front);
    card.appendChild(back);

    // video 26:48

    return card;
}

const loadGame = () =>{

    characters.forEach((character)=>{
        const card = createCard();
        grid.appendChild(card);
    });
}

loadGame();