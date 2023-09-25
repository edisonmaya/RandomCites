const getRandomData = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length)
    return data[randomIndex];
  }
  export default getRandomData