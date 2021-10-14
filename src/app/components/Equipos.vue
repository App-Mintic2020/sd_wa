<template>
    

    <div>
        <div class="container-fluid col-md-12">
            <div class="row">
                <div class="col-md-12">
                    <img src="images/header.jpg" style="width: 100%">
                </div>
            </div>
        </div>

        <h3>Registro de nueva planilla</h3>

        <div class="container col-md-12">

            <form @submit.prevent="adicionar_partido" class="row g-3">
                <div class="col-md-6">
                    <label class="form-label; text-center">Equipo Local</label>
                    <input type="text" class="form-control" placeholder="Ingrese el nombre del equipo local" v-model="partido.local">
                </div>
                <div class="col-md-6">
                    <label class="form-label; text-center">Equipo Visitante</label>
                    <input type="text" class="form-control" placeholder="Ingrese el nombre del equipo visitante" v-model="partido.visitante">
                </div>

                <div class="col-md-6" v-if="showInfo">
                    <label class="form-label; text-center">Goles Local</label>
                    <input type="text" class="form-control" v-model="partido.goles_l">
                </div>
                
                <div class="col-md-6" v-if="showInfo">
                    <label class="form-label; text-center">Goles visitante</label>
                    <input type="text" class="form-control" v-model="partido.goles_v">
                </div>


                <div class="container col-md-2">
                <button class="btn btn-primary" style="background-color: #007400">Guardar Partido</button>
                </div>

            </form>
                <hr>
                <div class="container col-md-12">
                        <button type="button" class="btn btn-secondary" style="background-color: #0D0D20">
                            <router-link class="text-white" to="/">Descartar</router-link>	
                         </button>
                </div>

        </div>
    </div>
</template>


<script>
    class DatosPartido {
        constructor(local,visitante,goles_l, goles_v){
            this.local = local;
            this.visitante = visitante;
            this.goles_l = goles_l;
            this.goles_v = goles_v;
        }
    }
    export default{
        data(){
            return {
                partido: new DatosPartido(),
                showInfo: false
            }
        },
        methods: {
            adicionar_partido () {
                fetch('/routes',{
                    method: 'POST',
                    body: JSON.stringify(this.partido),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })

                .then(res => res.json())
                .then(data => console.log(data));

                this.showInfo = true;

                this.$emit('comenzoPartido');

                // this.partido = new DatosPartido;
            }
        }

    }
</script>