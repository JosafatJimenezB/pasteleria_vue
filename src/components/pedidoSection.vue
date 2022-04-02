<template>
    <div class="pedido" id="pedido">
            <h2>Pedidos</h2>
            <div class="container-pedido">
                <img src="../assets/pedido-sin-fondo.png" alt="Pedido">

            <form action="">
                <h2 id="titulo-form">Generar Orden</h2>
                <label for="nombre">Nombre</label>
                <input id="nombre" type="text" placeholder="fulanito..." required>

                <label for="telefono">Telefono</label>
                <input id="telefono" type="tel" placeholder="(000)0000000" maxlength="10" required>

                <label for="email">Email</label>
                <input id="email" type="text" placeholder="hola@hola.com..." required>

                <label for="especs">Especificaciones de sus pastel</label>
                <input id="especs" type="text" placeholder="Especificaciones extra en su pedido">

                <h3>Selecciones sus sabores y adornos</h3>

                <label id="lbl-sabor" for="sabor">Sabor de Pastel</label>
                <select id="sabor" name="sabor">
                    <option value="default">Seleccione una opción</option>
                    <option value="fresa">Fresa</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="Vainilla">Vainilla</option>
                    <option value="fresa+choco">50% Fresa + 50% Chocolate</option>
                    <option value="fresa+vaini">50% Fresa + 50% Vainilla</option>
                    <option value="choco+vaini">50% Chocolate + 50% Vainilla</option>
                    <option value="combinado">Tres sabores</option>
                </select>

                <label id="lbl-adorno" for="adorno">Adorno para su pastel</label>
                <select id="adorno" name="adorno">
                    <option value="adorno-opcion">Seleccione una opción</option>
                    <option value="adorno-opcion">Ninguno</option>
                    <option value="adorno-opcion">Velas</option>
                    <option value="adorno-opcion">Muñecos</option>
                    <option value="adorno-opcion">Impresión Comestible</option>
                </select>

                <input id="send" type="submit" value="Enviar" onclick="alert('gracias por su pedido')">
                <input id="clear" type="reset" value="Limpiar">
            </form>
        </div>
    </div>
</template>

<style scoped>
.pedido{
    height: auto;
    display: flex;
    background-color: #d4a886;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.pedido h2{
    text-align: center;
    width: 30%;
    font-size: 3em;
    color: #111B1E;
    border-bottom:2px solid #111B1E;
    padding-bottom: 20px;
}

.container-pedido{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 40px 0px 70px 0px;
}

.container-pedido img{
    width: 30%;
}

.pedido form{
    width: 40%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    background-color: #111B1E;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 10px 10px 20px rgb(65, 65, 65);
}

#titulo-form{
    color: #d4a886;
    font-size: 2em;
}

.pedido form label{
    padding: 15px 0px 0px 0px;
    font-size: 1.3em;
    font-weight: bold;
    color: #d4a886;
    text-align: initial;
}

#nombre, #email, #telefono{
    color: #d4a886;
    font-size: 1em;
    margin: 5px 0px 10px 0px;
    background-color: #111B1E;
    outline: none;
    padding: 4px;
    width: 60%;
    border: none;
    border-bottom: 1px solid #d4a886;
}

#send, #clear{
    transition: all 0.3s ease;
    background-color: #d4a886;
    border: 1px solid #111B1E;
    color: #111B1E;
    width: 60px;
    padding: 5px;
    border-radius: 5px;

    margin: 10px 10px 10px 0px;
}

#send:hover, #clear:hover{
    border: 1px solid #d4a886;
    background-color: #111B1E;
    color: #d4a886;
    cursor: pointer;
}

#especs{
    outline: none;
    border-radius: 5px;
    background-color: #d4a886;
    height: 70px;
}

.pedido form h3{
    text-align: center;
    padding-bottom: 20px;
    color: #d4a886;
    border-bottom: 2px solid #d4a886;
}

#lbl-sabor{
    padding-bottom: 10px;
}

#sabor{
    text-align: center;
    font-weight: 600;
    padding: 5px;
    background-color: #d4a886;
    outline: none;
}

#lbl-adorno{
    padding-top: 30px;
    padding-bottom: 5px;
}

#adorno{
    margin-top: 5px;
    text-align: center;
    font-weight: 600;
    padding: 5px;
    background-color: #d4a886;
    outline: none;
}
</style>

<script>
</script>



