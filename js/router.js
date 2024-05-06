
export class Router {

  routes = {}
  
  add(routeName, page){
    this.routes[routeName] = page
  }


  route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    //muda os conteúdos pegando as paginas

    this.handle() //o this é referencia a instancia criada
  }

  handle(){
    //descructor
    const {pathname} = window.location
    const route = this.routes[pathname] || this.routes[404]

    //fecth em sua tradução é vai buscar e then é então ou senja então volta com os dados
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}
