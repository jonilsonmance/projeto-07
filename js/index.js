    import {Router} from './router.js'

    const router = new Router()

    router.add('/', "/pages/home.html")
    router.add("/about", "/pages/about.html")
    router.add("/contact", "/pages/contact.html")
    router.add(404, "/pages/404.html")

    // As propriedades estão com aspas por conta que não s epode criar variaveis iniciando com barras 
    //criando as rotas da aplicação => mapeamento das rotas
  
    router.handle()

    window.onpopstate = () => router.handle()
    window.route = () => router.route()