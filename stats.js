function calculateStats(numbers) {
  let arrayOfNumbers = numbers.split(" ")
  let parsedNumbers = parseNumbers(arrayOfNumbers)
  let mean = calculateMean(parsedNumbers)
  let min = calculateMin(parsedNumbers)
  let max = calculateMax(parsedNumbers)
  let median = calculateMedian(parsedNumbers)
  let sum = calculateSum(parsedNumbers)
  let standardDeviation = calculateStandardDeviation(parsedNumbers)

  displayResults(mean, min, max, median, sum, standardDeviation)
}

function parseNumbers(numbers) {
  let parsedNumbers = []
  numbers.forEach(number => parsedNumbers.push(parseInt(number)))
  return parsedNumbers
}

function displayResults(mean, min, max, median, sum, standardDeviation) {
  console.log(`
    Mean: ${mean} 
    Min: ${min}
    Max: ${max}
    Median: ${median}
    Sum: ${sum}
    Standard Deviation: ${standardDeviation}
  `)
}

function calculateMean(numbers) {
  let total = 0
  numbers.forEach(number => {
    total += number
  })

  return total / numbers.length
}

function calculateMin(numbers) {
  let min = null
  numbers.forEach(number => {
    if (!min) {
      min = number
    } else if (min > number) {
      min = number
    }
  })

  return min
}

function calculateMax(numbers) {
  let max = null
  numbers.forEach(number => {
    if (!max) {
      max = number
    } else if (max < number) {
      max = number
    }
  })

  return max
}

function calculateMedian(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b)

  if (sortedNumbers.length % 2 === 0) {
    return calculateMean([
      sortedNumbers[sortedNumbers.length / 2 - 1],
      sortedNumbers[sortedNumbers.length / 2]
    ])
  } else {
    return sortedNumbers[Math.round(sortedNumbers.length / 2 - 1)]
  }
}

function calculateSum(numbers) {
  let total = 0
  numbers.forEach(number => {
    total += number
  })
  return total
}

function calculateStandardDeviation(numbers) {
  let mean = calculateMean(numbers)

  let meanSquaredArray = []
  numbers.forEach(number => {
    meanSquaredArray.push(squareNumber(number - mean))
  })

  return Math.sqrt(calculateMean(meanSquaredArray))
}

function squareNumber(number) {
  return Math.round(number * number)
}

calculateStats("9 2 1 5 4 12 7 8 11 9 3 7 4 12 5 4 10 9 36 9 34")
