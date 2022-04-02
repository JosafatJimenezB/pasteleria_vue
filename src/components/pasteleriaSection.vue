<template>
    <div class="pastel-cajas">
        <h2>Pasteles</h2>
            <div class="pasteles-container">
                <div class="pastel-card">
                    <img src="../assets/fresa.jpg" alt="">
                    <h3>Pastel de Fresa</h3>
                    <h3>Precio: $300</h3>
                </div>
                <div class="pastel-card">
                    <img src="../assets/chocolate.jpg" alt="">
                    <h3>Pastel de Chocolate</h3>
                    <h3>Precio: $350</h3>
                </div>
                <div class="pastel-card">
                    <img src="../assets/vainilla.jpg" alt="">
                    <h3>Pastel de Vainilla</h3>
                    <h3>Precio: $400</h3>
                </div>
            </div>
    </div>
</template>

<style>
.pastel-cajas{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #d4a886;
    height: calc(100vh - 73px);
}

.pastel-cajas h2{
    font-size: 3em;
    text-align: center;
    width: 30%;
    border-bottom: 2px solid #111B1E;
    padding-bottom: 20px;
}

.pasteles-container{
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px;
}

.pastel-card{
    transition:all 0.4s ease;
    justify-content: center;
    overflow: hidden;
    width: 20%;
    padding: 30px;

    background-color: #111B1E;
    border-radius: 20px;
    box-shadow: 10px 10px 20px rgb(65, 65, 65);
}

.pastel-card img{
    width: 100%;
    height:300px;
    border-radius: 10px;
    padding-bottom: 5px;
}

.pastel-card h3{
    color: #d4a886;
    border-top: 2px double #d4a886;
    margin: 5px;
    padding: 10px;
}



@media screen and (max-width: 1100px){
    .pastel-cajas{
        background: #d4a886;
        height: auto;

    }

    .pasteles-container{
        width: 100%;
        margin: 20px;
        justify-content: space-around;
        height: 100vh;
    }
    
    .pastel-card{
        width: 30%;
    }
}
    
@media screen and (max-width: 785px){
    .pastel-cajas{
        background: #d4a886;
        height: auto;

    }

    .pasteles-container{
        width: 100%;
        margin: 20px;
        justify-content: space-around;
        height: auto;
    }
    
    .pastel-card{
        width: 80%;
        margin-bottom: 50px;
    }
}
</style>
