const fetch = require('node-fetch');

/*npm install node-fetch --save*/
const getNombre = async function getNombre(username) {
    const url = `http://api.github.com/users/${username}`
    const respuesta = await fetch(url)
    const json = await respuesta.json()


    console.log(respuesta.status);
    if (respuesta.status !== 200){
        throw Error('El usuario no existe')
    }
               

    return userGithub = {
                            username,
                            name:json.name,
                            id: json.id
                        }
}

module.exports = getNombre;