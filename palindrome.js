function isPalindrome(number) {
  if (checkIfPositiveInteger(number)) {
    let numberPartsArray = number.toString().split()
    if (numberPartsArray === numberPartsArray.reverse()) {
      return true
    }
    return false
  }
  return false
}

function checkIfPositiveInteger(number) {
  if (Math.sign(number) >= 0) {
    if (Number.isInteger(number)) {
      return true
    }
    return false
  }
  return false
}

console.log(isPalindrome(1))
console.log(isPalindrome(11211))
console.log(isPalindrome(0.12321))
console.log(isPalindrome(-1212))
console.log(isPalindrome("asfd"))
