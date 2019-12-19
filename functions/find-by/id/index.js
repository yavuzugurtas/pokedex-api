
const id = (pokeData, id) => {

  let newpokeData =pokeData.filter(data => data.id === id);
  if(newpokeData.length !== 0) {
      return newpokeData[0];
  }else {
      return {};
  }

}
