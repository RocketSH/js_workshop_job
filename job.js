document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let form = document.querySelector("form")
  let allInputValues = form.elements;
  fetch(`https://still-spire-37210.herokuapp.com/positions.json?description=${allInputValues.description.value}&location=${allInputValues.location.value}&full_time=${allInputValues.full_time.checked}`)
    .then((response) => {
      // 為什麼不能做變數，而要用function(response)
      // console.log(response)
      return response.json()})
    .then((data) => {
      data.map(result => {
        console.log(result)
      })
    }).catch((err) => {
      console.log('error');
  });
})
