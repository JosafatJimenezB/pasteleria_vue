<template>
    <div class="contacto">
        <h2>Contactanos</h2>
            <div class="container-contacto">
                <div id="info-contacto">
                    <h3><i class="uil-map uil-map-marker"></i> Dirección</h3>
                    <p>Boulevard Moncalian No. 244, Melilla, España. <br>
                        Horario de atención a clientes: <br>
                        Lunes a Sábado: 8 a.m. - 8 p.m. <br>
                        Domingos: 9 a.m. - 8 p.m.
                    </p>
                    <br>
                    <br>
                    <h3><i class="uil-tel uil-calling"></i> Cotizaciones especiales</h3>
                    <p>Ventas y cotizaciones:<br>
                        Lunes a Domingo: 8 a.m. – 5 p.m.<br>
                        (22)-2222-2222 ext 135
                    </p>
                </div>
                <img src="../assets/ubicacion.png" alt="Ubicacion imagen">
            </div>    
    </div>    
</template>

<style scoped>
.contacto{
    height: auto;
    display: flex;
    background-color: #d4a886;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 130px);
}

.contacto h2{
    text-align: center;
    width: 30%;
    font-size: 3em;
    color: #111B1E;
    border-bottom:2px solid #111B1E;
    padding-bottom: 20px;
}

.contacto img{
    width: 30%;
}

.container-contacto{
    display: flex;
    align-items: center;
    justify-content: center;
}

.uil-map , .uil-tel{
    color: #111B1E;
}

#info-contacto{
    text-align: initial;
    color: #111B1E;
}
</style>