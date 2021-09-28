<template>
    <div>
        
        <Header/>
        <h3>Registro de nuevo usuario</h3>
        <div class="container">
            <form>
            <div class="col-sm-5 mx-auto">
                <label class="form-label">Ingrese su nombre completo</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-sm-5 mx-auto">
                <label class="form-label">Ingrese su correo electronico</label>
                <input type="email" class="form-control">
            </div>
            <div class="col-sm-5 mx-auto">
                <label class="form-label">Ingrese su contraseña</label>
                <input type="password" class="form-control">
            </div>
            <div class="col-sm-5 mx-auto">
                <label class="form-label">Confirmación de contraseña</label>
                <input type="password" class="form-control">
                <button type="submit" class="btn btn-primary">Registrarse</button>
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