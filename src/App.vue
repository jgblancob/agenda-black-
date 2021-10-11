<template> 
  <div> 
    <!-- Nav bar --> 
    <nav class="navbar navbar-dark bg-dark justify-content-between flexnowrap flex-row"> 
      <div class="container"> 
        <a class="navbar-brand float-left">AGENDA TELEFÓNICA</a>
        <!--<a class="navbar-brand float-left">MEVN Stack Example</a>-->
        <ul class="nav navbar-nav flex-row float-right"> 
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Agregar contacto</router-link>
            <!--<router-link class="nav-link pr-3" to="/">Create Student</router-link>-->
          </li>
          &nbsp;&nbsp;
          <li class="nav-item"> 
            <router-link class="nav-link" to="/view">Consulta contacto</router-link>
            <!--<router-link class="nav-link" to="/view">View Students</router-link>-->
          </li> 
        </ul> 
      </div> 
    </nav> 
 
    <!-- Router view --> 
    <div class="container mt-5"> 
      <router-view></router-view> 
      
    </div> 
  </div> 
</template>