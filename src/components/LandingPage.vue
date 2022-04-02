<template>
  <div class="home">
    <img src="../assets/logo.svg" alt="Space 36 Logo">
    <h2>El toque de dulzura que necesitas</h2>
  </div>  
</template>

<style scoped>
.home{
    background: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/fondo-landing.jpg');
    background-size: cover;
    height: calc(100vh - 73px);
}

.home img{
    display: flex;
    height: 30%;
}

.home h2{
    text-align: center;
    font-size: 3.5em;
    padding-bottom: 20px;
    color: #111B1E;
    border-bottom: 3px solid #111B1E;
}
</style>
