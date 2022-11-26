const lista = ["Nader", "John", "Rich", "Sean", "Dan", "Kyle"]

function tresAleatorios(lista) {
  return [...lista].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 3)

}
document.write(tresAleatorios(lista))
   

    

    

