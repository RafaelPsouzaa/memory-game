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

let firstCard = '';
let secondCard ='';

const checkCards = ()=>{

}


const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')){
        return;
    }   
    
    if(firstCard === ''){
        target.parentNode.className.includes('reveal-card');
        firstCard = target.parentNode;

    }else if(secondCard ===''){
        target.parentNode.className.includes('reveal-card');
        secondCard = target.parentNode;
        checkCards();
    }
    

   
}

const createCard = (character) => {
    const card = createElement('div','card');
    const front = createElement ('div','face front');
    const back = createElement('div','face back');

    front.style.backgroundImage = `url('../assets/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click',revealCard)
    card.setAttribute('data-character',character)

return card;
}
 // video 47:13

const loadGame = () =>{

    const duplicateCharacters = [...characters,...characters];
    const shuffledArray = duplicateCharacters.sort(()=> Math.random()- 0.5);
    shuffledArray.forEach((character)=>{
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();