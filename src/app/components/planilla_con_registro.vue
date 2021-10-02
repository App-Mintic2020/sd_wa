<template>
    <div>
        <Header_con_registro/>
        <planilla/>
        
        <hr>
        
        <div class="container col-md-12">
            <form class="row g-3">             
                <div class="container col-md-4">
                    <div class="row">
                        <div class="d-grid gap-3 d-md-block mx-auto">
                            <button type="button" class="btn btn-secondary" style="background-color: #007400">Guardar</button>
                            <button type="button" class="btn btn-secondary" style="background-color: #499E0B">Descargar</button>
                            <button type="button" class="btn btn-secondary" style="background-color: #0D0D20">Descartar</button>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
 import Header_con_registro from './Header_con_registro.vue';
 import planilla from './planilla.vue';

 export default {
     components: {
         Header_con_registro,
         planilla
     }
 }

</script>