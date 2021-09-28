<template>
    <div>
        <Header/>
        <h3>Iniciar Sesión</h3>
        <div class="container">
            <form>
            <div class="col-sm-5 mx-auto">
                <label class="form-label">Ingrese su correo electronico</label>
                <input type="email" class="form-control">
            </div>
            <div class="col-sm-5 mx-auto">
                <label class="form-label">Ingrese su contraseña</label>
                <input type="password" class="form-control">
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </div>
            </form> 
        </div>
    </div>
</template>

<script>
 import Header from './Header.vue';

 export default {
     components: {
         Header
     }
 }

</script>


