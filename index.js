const getNombre = require('./github');

console.log('hello js, vamos a hacer un js para explicar al mundo las funciones, async and await, promesas y callbacks')


let suma1 = function(n1,n2) {
    return n1+n2;
};


async function suma2UnosSegundosDespues() {
        
    let resultado = await functionQueTarda2Segundos()
    console.log(resultado);
    return resultado;
}

function functionQueTarda2Segundos (){
    return new Promise(resolve => {
        setTimeout((n2=10, n3=1) => {
            resolve (n2+n3);
        }, 2000);
    })
}



console.log('Resultado suma1 función normal');

console.log(suma1(7,2));

console.log('Resultado Suma con promesa y async and await');
suma2UnosSegundosDespues();


//callbacks 01
function funcionCallback(msn){
    console.log(msn);
}

let saludar = function(s1, s2, callback) {
    let msn = `${s1} ${s2}`;
    //console.log(msn)
    callback(msn)  
}

saludar('Hola ', 'Javier', funcionCallback )


//callbacks 02

let getUsuario = (id, callback) =>{
    let user  ={
        nombre : 'Javier',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${ id }, no  existe en la BD`);
    } else {
        callback(null, user);
    }
}

getUsuario(210, (err, usuario) => {
    if (err) {
        return console.log(err)
    }

    console.log('Usuario de BD', usuario);
});

// let suma2 = suma2UnosSegundosDespues(100,2);
// console.log(suma2)


const myPromise = new Promise((resolve, reject) => {  
    let nombre = 'met99' 

    if(nombre == 'met') {    
        resolve('Promise is resolved successfully.');  
        console.log(nombre)
    } else {    
        reject('Promise is rejected');  
    }
});

const myPromise2 = new Promise(() => {  
    let nombre = 'met' 

    if(nombre == 'met') {    
        // resolve('Promise is resolved successfully.');  
        console.log(nombre)
    } else {    
        // reject('Promise is rejected');  
    }
});

myPromise2.then;

myPromise.then((message) => {console.log(message)})
.catch(err =>{console.log(err)});

getNombre('NimrockDev')
.then(() => 
    console.log(('Usuario Recibido.')))
.then(() => console.log(userGithub))
.catch((e) => console.log(`Error: ${e}`))

  