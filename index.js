fetch('https://thronesapi.com/api/v2/Characters')
  .then((res) => res.json())
  .then((caractheres) => console.log(caractheres))
  .catch((error) => console.log(error))
