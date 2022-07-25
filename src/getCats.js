const getCats = async() => {
  const response = await fetch('https://api.api-ninjas.com/v1/cats?playfulness=5', {
    headers: { 
      'X-Api-Key': 'nQBIrzqSOqUK8zDmuTBkrw==Ng6tKGAI9cHzhz07'
    },
    contentType: 'application/json',
  })
  const data = await response.json()
  console.log(data)
}

export default getCats