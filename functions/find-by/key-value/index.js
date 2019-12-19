// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
    let emptyArray =[];
    let filterArray =pokeArray.filter(data =>data[key] == value);
    if(filterArray.length !== 0) {

        for(let i = 0 ; i<filterArray.length; i++){
        let emptyObject = {};
        emptyObject.num =filterArray[i].num;
        emptyObject.name=filterArray[i].name;
        emptyArray.push(emptyObject);
    }
    return emptyArray;

  }else {
      return emptyArray;
  }
   

};


module.exports = keyValue;