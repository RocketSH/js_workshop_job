const form = document.querySelector("form")
const baseURI = "https://still-spire-37210.herokuapp.com/positions.json"
form?.addEventListener("submit", async function (e) {
  e.preventDefault();
  let inputs = form.elements;
  const params = {
    description: inputs.description.value,
    location: inputs.location.value,
    full_time: inputs.full_time.checked
  }
  const res = await axios.get(baseURI, {params})
  console.log(res)
})