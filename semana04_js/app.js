const dataInput = document.getElementById('dataSearch');
const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');

/* POKEMON ATRIBUTES */ 
const pokeName = document.getElementById('pokeName');
const pokeImage = document.getElementById('pokeImage');
const pokeID = document.getElementById('pokeID');
const pokeWeight = document.getElementById('pokeWeight');
const pokeHeight = document.getElementById('pokeHeight');
const pokeType = document.getElementById('pokeType');
const poke1 = document.getElementById('poke1');
const poke2 = document.getElementById('poke2');
const pokeEvo = document.getElementById('pokeEvo');


const pokeData = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => {
            pokeName.innerHTML = data.name;
            pokeImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
            pokeID.innerHTML = `ID ${data.id}`;
            pokeHeight.innerHTML = `HEIGHT ${data.height * 10}cms`;
            pokeWeight.innerHTML = `WEIGHT ${data.weight / 10}kg`;
            pokeType.innerHTML = `TYPE ${data.types[0].type.name}`;
            pokeEvo.innerHTML = `EVO ${data.base_experience}`;
            poke1.innerHTML = `MOV 01 ${data.abilities[0].ability.name}`
            poke2.innerHTML = `MOV 02 ${data.abilities[1].ability.name}`
            dataInput.value = '';
        });
}

searchButton.addEventListener('click', () => pokeData(dataInput.value));
resetButton.addEventListener('click', () => pokeData(dataInput.value));
