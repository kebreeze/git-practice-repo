const peopleData = [
  { name: "daniel", age: '34y' },
  { name: "Kelley", age: '38y' },
  { name: "elliott", age: '3y' },
  { name: "caroline", age: '10m' },
  { name: "august", age: '36m' },
  { name: "liam", age: '12m' },
  { name: "cole", age: '1y' },
  { name: "ryliegh", age: '5y' }
]
/*
  Given a dataframe with month, day, year...
  1. Write a function that adds a column that would pull out
  the entries with names starting with "d"
  2. Create a new property ... that comes from name + age
  3. Create two new lists that split the ages between kids and adults
  4. Divide the kids into infant(0-2), toddler(2-3), or error if other
*/

// Filter out values that are not years
function filterByYear(dataset) {
  return dataset.filter(entry => entry.age.includes('y'))
}

function printableInfo(dataset) {
  dataset.forEach(entry => entry.info = `Name: ${entry.name}: ${entry.age}`)
}

function kidsAndAdults(dataset) {
  let adults = dataset.filter(entry => entry.age.slice(0, entry.age.length - 1) >= 18)
  let kids = dataset.filter(entry => entry.age.slice(0, entry.age.length - 1) < 18)

  return { adults, kids }
}

function infantsToddlers(dataset) {

  let infants = dataset.filter(entry => {
    let year = entry.age.slice(0, entry.age.length - 1)
    return year >= 0 && year < 2
  })

  let toddlers = dataset.filter(entry => {
    let year = entry.age.slice(0, entry.age.length - 1)
    return year >= 2 && year <= 3
  })

  let errors = dataset.filter(entry => {
    let year = entry.age.slice(0, entry.age.length - 1)
    return year > 3
  })

  return { toddlers, infants, errors }
}


function cleanData(dataset) {
  let filtered = filterByYear(dataset)
  printableInfo(filtered)
  let { kids, adults } = kidsAndAdults(filtered)
  let { toddlers, infants, errors } = infantsToddlers(kids)

  return {
    filtered,
    kids,
    adults,
    toddlers,
    infants,
    errors
  }
}

let fullData = cleanData(peopleData)

console.log(fullData)








