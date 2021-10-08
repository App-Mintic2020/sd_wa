<template>
    

    <div>
        <div class="container-fluid col-md-12">
            <div class="row">
                <div class="col-md-11">
                    <img src="images/header.jpg" style="width: 100%">
                </div>
                <div class="col-md-1">
                    <div class="d-grid gap-1">
                    <hr/>
                    <button type="button" class="btn btn-success" style="background-color: #071D48">Cerrar sesión</button>
                    </div>
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
                <div class="col-md-6">
                    <label class="form-label; text-center">Goles Local</label>
                    <input type="text" class="form-control" v-model="partido.goles_l">
                </div>
                
                <div class="col-md-5">
                    <label class="form-label; text-center">Goles visitante</label>
                    <input type="text" class="form-control" v-model="partido.goles_v">
                </div>
                <div class="container col-md-1">
                <button class="btn btn-primary" style="background-color: #007400">Guardar Partido</button>
                </div>


                <div class="col-md-3">
                    <label class="form-label">Nombre jugador local</label>
                    <input type="text" class="form-control" placeholder="Jugador local" style="background-color: #DAFFB0; border: 1px solid green">
                </div>
                <div class="col-md-1">
                    <label class="form-label">N°Camiseta</label>
                    <input type="text" class="form-control" style="background-color: #DAFFB0; border: 1px solid green">
                </div>
                <div class="col-md-1">
                    <label class="form-label">Goles</label>
                    <select class="form-select" style="background-color: #DAFFB0; border: 1px solid green">
                    <option selected></option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                    <option value="6">5</option>
                    </select>
                </div>
                <div class="col-md-1">
                    <label class="form-label">Tarjetas</label>
                    <select class="form-select" style="background-color: #DAFFB0; border: 1px solid green">
                    <option selected></option>
                    <option value="1">-</option>
                    <option value="2">Amarilla</option>
                    <option value="3">Roja</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Nombre jugador visitante</label>
                    <input type="text" class="form-control" placeholder="Jugador visitante" style="background-color: #E8E8E8; border: 1px solid black">
                </div>
                <div class="col-md-1">
                    <label class="form-label">N°Camiseta</label>
                    <input type="text" class="form-control" style="background-color: #E8E8E8; border: 1px solid black">
                </div>
                <div class="col-md-1">
                    <label class="form-label">Goles</label>
                    <select class="form-select" style="background-color: #E8E8E8; border: 1px solid black">
                    <option selected></option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                    <option value="6">5</option>
                    </select>
                </div>
                <div class="col-md-1">
                    <label class="form-label">Tarjetas</label>
                    <select class="form-select" style="background-color: #E8E8E8; border: 1px solid black">
                    <option selected></option>
                    <option value="1">-</option>
                    <option value="2">Amarilla</option>
                    <option value="3">Roja</option>
                    </select>
                </div>               
                <button type="button" class="btn btn-primary" style="background-color: #007400">Añadir Jugador</button>
                

                  <hr>


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
                partido: new DatosPartido()

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

                this.partido = new DatosPartido;
            }
        }

    }
</script>