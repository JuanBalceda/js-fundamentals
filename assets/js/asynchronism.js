const SW_API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};

function getCharacter(id) {
    return new Promise((resolve, reject) => {
        const url = `${SW_API}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function (person) {
            resolve(person)
        }).fail(function () {
            reject(id)
        })
    })
}

async function getStarWarsCharacter() {
    let ids = [1, 2, 3, 4, 5, 6, 7];
    let promises = ids.map(id => getCharacter(id));
    try{
        let characters = await Promise.all(promises);
        console.log(characters);
    }catch (id) {
        console.log(`Error occurred on id: ${id}`)
    }
}

getStarWarsCharacter();