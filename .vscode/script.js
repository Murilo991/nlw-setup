const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já registrado")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWsetup@habits", JSON.stringify(nlwSetup.data))
}

// run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09", "01-10"],
//water: ["01-01", "01-03"],
//food: ["01-01", "01-06"],
// journal: ["01-01", "01-05"],
// takePills: ["01-01", "01-04"],
//}

const data = JSON.parse(localStorage.getItem("NLWsetup@habits"))
nlwSetup.setData(data)
nlwSetup.load()
