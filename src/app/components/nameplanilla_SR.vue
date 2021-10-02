<template>
    <div>
        <Header_sin_registro/>
        <hr>
        <div class="container">
            <form>
            <div class="col-sm-5 mx-auto">
                <label class="form-label">Ingrese nombre de la planilla</label>
                <input type="email" class="form-control">
								<button type="submit" class="btn btn-success">Continuar</button>
            </div>
            </form> 
        </div>
    </div>
</template>


<script>
 import Header_sin_registro from './Header_sin_registro.vue';

 export default {
     components: {
         Header_sin_registro,
     }
 }

</script>