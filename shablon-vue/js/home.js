export default{
    name: "Home",
    data(){
        return{
            name: '',
            email: '',
            "cards": [
                {
                    "name": "Название",
                    "description":"Описаниие",
                    "img":"",
                    "price":"",
                    "vid":""
                },
                {
                    "name": "Название",
                    "description":"Описаниие",
                    "img":"",
                    "price":"",
                    "vid":""
                },
                {
                    "name": "Название",
                    "description":"Описаниие",
                    "img":"",
                    "price":"",
                    "vid":""
                    
                },
                {
                    "name": "Название",
                    "description":"Описаниие",
                    "img":"",
                    "price":"",
                    "vid":""
                    
                },
                {
                    "name": "Название",
                    "description":"Описаниие",
                    "img":"",
                    "price":"",
                    "vid":""
                    
                },
                {
                    "name": "Название",
                    "description":"Описаниие",
                    "img":"",
                    "price":"",
                    "vid":""
                    
                }
            ],
            "prem":[
                {
                    "name":"Преимущество №",
                    "description":"Описаниие",
                    "img":"",
                },
                {
                    "name":"Преимущество №",
                    "description":"Описаниие",
                    "img":"",
                },
                {
                    "name":"Преимущество №",
                    "description":"Описаниие",
                    "img":"",
                }
                
            ],
            "work":[
                {
                    "name":"Имя",
                    "img":"",
                    "stage":"Стаж:",
                    "position":"Должность:",
                    "sphere":"Чем занимается",
                },
                {
                    "name":"Имя",
                    "img":"",
                    "stage":"Стаж:",
                    "position":"Должность:",
                    "sphere":"Чем занимается",
                },
                {
                    "name":"Имя",
                    "img":"",
                    "stage":"Стаж:",
                    "position":"Должность:",
                    "sphere":"Чем занимается",
                },
                {
                    "name":"Имя",
                    "img":"",
                    "stage":"Стаж:",
                    "position":"Должность:",
                    "sphere":"Чем занимается",
                },
                {
                    "name":"Имя",
                    "img":"",
                    "stage":"Стаж:",
                    "position":"Должность:",
                    "sphere":"Чем занимается",
                },
                {
                    "name":"Имя",
                    "img":"",
                    "stage":"Стаж:",
                    "position":"Должность:",
                    "sphere":"Чем занимается",
                },
            ]
        }

    },
    template:`<nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container  row row-cols-1 row-cols-md-3"> 
      <div class="logo"></div>
      
      <a class="navbar-brand" href="tel:+79308351978">+7 930 835 19 78</a>

      
      <button type="button" class="btn btn-primary "><a class="navbar-brand m-0 text-white" href="tel:+79308351978">Заказать звонок</a></button>
      
    </div>
  </nav>
        
  <section class="pb-5 pt-5">
    <div class="container mt-5 mb-5 pb-5">
      
      <div class="row align-items-center">
        <div class="position-relative col-12 col-lg-6 order-last order-lg-first mt-5 mt-lg-0">
          <img class="img-fluid position-relative mx-auto rounded w-100" style="z-index:10" src="https://images.unsplash.com/photo-1484308129484-ff3063eea281?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1080&amp;h=1200&amp;q=80" alt="">
          
        </div>
        <div class="col-12 col-lg-6 ">
          <div class="row">
            <div class="col-12 col-lg-8 mx-auto">
              
              <h2 class="mt-3 mb-5 fs-1 fw-bold">Преимущества компаниии</h2>
              <div class="d-flex mb-4 pb-1 align-items-center" v-for="options in prem">
                <span class="me-4 text-primary">
                  <div class="verif"></div>
                </span>
                <div class="prem">
                  <h5>{{options.name}}</h5>
                  <p class="mb-0 text-muted lh-lg">{{options.description}}</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pb-5 pt-5">
    <div class="container mt-5 mb-5 pb-5">
      <h1 class="text-center py-5">Секция №3</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="card in cards">
          <div class="card">
            <img :src="card.img" class="card-img-top" alt="..." >
          
            <div class="card-body">
              <h5 class="card-title">{{card.name}}</h5>
              <p class="card-text">{{card.description}}</p>
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
  </section>
  <section class="pb-5 pt-5">
    <div class="container mt-5 mb-5 pb-5">
      <h1 class="text-center py-5">Секция №4</h1>
      <div class="card-group d-grid">
      
        <div class="card"  v-for="job in work">
          <img :src="job.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{job.name}}</h5>
            <p class="card-text">{{job.sphere}}</p>
            <p class="card-text">{{job.position}}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{job.stage}}</small>
          </div>
        </div>

      </div>
  </section>
  <section class="pb-5 pt-5">
    <div class="container">
      <form class="row row-cols-1 row-cols-md-1 text-center">
        
        <div class="mb-3">
          <label for="validationCustom01" class="form-label">Имя</label>
          <input type="text" v-model="name" class="form-control" id="validationCustom01" >
         
          
        </div>
        <div class="mb-3">
          <label for="validationCustom02" class="form-label">Email</label>
          <input type="email" v-model="email" class="form-control" id="validationCustom02" >
          
        </div>
        <div class="mb-3">
        <button type="button" class="btn btn-primary w-100" @click="Send()">Подписаться</button>
        </div>
      </form>
    </div>
  </section>`,
  methods:{
      Send(){
       if(this.name == '' | this.email== ''){
        alert('Проверьте правильность введенных данных')
       }else{
        alert(`Спасибо,${this.name}, вы подписались на рассылку!
На почту ${this.email} пришло новое сообщениие`);
       }
        
      }
  }
}