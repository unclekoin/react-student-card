const getData = () => {
  return JSON.parse(localStorage.getItem('student'));
}

export default getData;