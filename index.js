const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah','Bobby']

function findMatching (drivers, string){
    let Task1 = drivers.filter(element => element.toUpperCase() === string.toUpperCase())
    return Task1
}


  function fuzzyMatch(drivers, letters) {
      let Task2 = drivers.filter(element => element.startsWith(letters))
      return Task2
  }

  function matchName(drivers,string){
      let Task3 = drivers.filter(element => element.name === string)
      return Task3
  }