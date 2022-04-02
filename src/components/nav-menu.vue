<template>
    <header>
    <h2>Space 36</h2>
  <nav>
    <router-link class="nav-item" to="/">Home</router-link>
    <router-link class="nav-item" to="/pastel">Pasteles</router-link>
    <router-link class="nav-item" to="/adornos">Adornos</router-link>
    <router-link class="nav-item" to="/contacto">Contacto</router-link>
    <router-link class="nav-item" to="/pedido">Realizar Pedido</router-link>
    <router-link class="nav-item" to="/adornos">Dashboard</router-link>
  </nav>

  </header>
</template>

<style scoped>
header{
    padding-right: 50px;
    background-color: #111B1E;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #d4a886;
    margin: 0;
}

header h2{
    padding-left: 50px;
    display: flex;
    font-size: 2em;
    color: #d4a886;
}

.nav-item{
    float: left;
    list-style: none;
}

.nav-item{
    margin-top: none;
    transition: all 0.3s ease;
    display: block;
    font-weight: 600;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
    color: #d4a886;
}

.nav-item:hover{
    border-radius: 5px;
    background-color: #d4a886;
    color: #111B1E;
}
</style>