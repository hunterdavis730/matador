const axios = require("axios")

const askRandomAdvice = () => {
  const randomAdviceEndpoint = "https://api.adviceslip.com/advice"
  getAdviceData(randomAdviceEndpoint)
}

const adviceSearch = userInquiry => {
  const customAdviceEndpoint = "https://api.adviceslip.com/advice/search/"
  let url = customAdviceEndpoint + userInquiry
  getAdviceData(url)
}

const displayAdvice = advice => {
  if (advice) {
    console.log(advice)
  } else {
    console.log("No advice could be found for that phrase")
  }
}

let getAdviceData = async url => {
  await axios
    .get(url)
    .then(advice => {
      if (advice.data.slips) {
        displayAdvice(advice.data.slips[0].advice)
      } else if (advice.data.slip) {
        displayAdvice(advice.data.slip.advice)
      } else {
        displayAdvice(undefined)
      }
    })
    .catch(err => {
      console.log(err)
    })
}

askRandomAdvice()
askRandomAdvice()
adviceSearch("spider")
adviceSearch("love")
adviceSearch(1)
adviceSearch("123214asdf")
