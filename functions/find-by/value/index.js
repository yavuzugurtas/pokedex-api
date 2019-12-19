// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const value = (pokeArray, value) => {

    let emptyArray = [];

    for (let i = 0 ; i<pokeArray.length; i++) {
  
      let valuesOfPokearray =Object.values(pokeArray[i]);
     
      if (valuesOfPokearray.includes(Number(value)) || valuesOfPokearray.includes(value)=== true) {
        let emptyObject = {};
        emptyObject.name = pokeArray[i].name;
        emptyObject.num = pokeArray[i].num;
        emptyArray.push(emptyObject);
        
       }
      
  
    }
    return emptyArray;

};


module.exports = value;