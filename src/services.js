const URL_BASE = 'https://api-medium.mybluemix.net/' // constant de ambito global

async function logIn (data) {
  console.log(data)
  const URL = `${URL_BASE}auth/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  const response = await window.fetch(URL, options)
  const dataResponse = await response.json()
  return dataResponse
}

export { logIn }
