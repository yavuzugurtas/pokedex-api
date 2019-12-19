const weakness = (pokeArray, type) => {
    let emptyArray = [];
    let filterArray = pokeArray.filter(data => data.weaknesses.includes(type) === true);
    
    for(let i = 0 ; i<filterArray.length;i++){
      let emptyObject = {};
      emptyObject.name = filterArray[i].name;
      emptyObject.num = filterArray[i].num;
      emptyArray.push(emptyObject);
  
    }
    return emptyArray;
  
  
  
  };

module.exports = weakness;