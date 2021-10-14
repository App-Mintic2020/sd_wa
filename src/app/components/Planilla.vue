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

            <form @submit.prevent="sendTask" class="row g-3">

                <div class="col-md-3">
                    <label class="form-label">Nombre jugador local</label>
                    <input type="text" class="form-control" placeholder="Jugador local" style="background-color: #DAFFB0; border: 1px solid green" v-model="jugadores.jugador_l">
                </div>
                <div class="col-md-1">
                    <label class="form-label">N°Camiseta</label>
                    <input type="text" class="form-control" style="background-color: #DAFFB0; border: 1px solid green" v-model="jugadores.camiseta_l">
                </div>
                <div class="col-md-1">
                    <label class="form-label">Goles</label>
                    <select class="form-select" style="background-color: #DAFFB0; border: 1px solid green" v-model="jugadores.golesl">
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
                    <select class="form-select" style="background-color: #DAFFB0; border: 1px solid green" v-model="jugadores.tarjetas_l">
                    <option selected></option>
                    <option value="1">-</option>
                    <option value="2">Amarilla</option>
                    <option value="3">Roja</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Nombre jugador visitante</label>
                    <input type="text" class="form-control" placeholder="Jugador visitante" style="background-color: #E8E8E8; border: 1px solid black" v-model="jugadores.jugador_v">
                </div>
                <div class="col-md-1">
                    <label class="form-label">N°Camiseta</label>
                    <input type="text" class="form-control" style="background-color: #E8E8E8; border: 1px solid black" v-model="jugadores.camiseta_v">
                </div>
                <div class="col-md-1">
                    <label class="form-label">Goles</label>
                    <select class="form-select" style="background-color: #E8E8E8; border: 1px solid black" v-model="jugadores.golesv">
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
                    <select class="form-select" style="background-color: #E8E8E8; border: 1px solid black" v-model="jugadores.tarjetas_v">
                    <option selected></option>
                    <option value="1">-</option>
                    <option value="2">Amarilla</option>
                    <option value="3">Roja</option>
                    </select>
                </div>               
                
                <template v-if="edit === false">
                    <button class="btn btn-primary" style="background-color: #007400">Añadir Jugador</button>
                </template>
                    <template v-else>
                    <button class="btn btn-primary" style="background-color: #007400">Update</button>
                </template> 

                  <hr>

            </form>


            <div class="col-md-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Jugadores local</th>
                                <th>N° Camiseta</th>
                                <th>N° goles</th>
                                <th>Tarjetas</th>
                                <th>Jugadores Visitante</th>
                                <th>N° Camiseta</th>
                                <th>N° goles</th>
                                <th>Tarjetas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="jugadores of all_jugadores">
                                <td>{{jugadores.jugador_l}}</td>
                                <td>{{jugadores.camiseta_l}}</td>
                                <td>{{jugadores.golesl}}</td>
                                <td>{{jugadores.tarjetas_l}}</td>
                                <td>{{jugadores.jugador_v}}</td>
                                <td>{{jugadores.camiseta_v}}</td>
                                <td>{{jugadores.golesv}}</td>
                                <td>{{jugadores.tarjetas_v}}</td>
                                <td>
                                    <button @click="deleteTask(jugadores._id)"
                                    class="btn btn-danger">
                                        Delete
                                    </button>
                                    <button @click="editTask(jugadores._id)"
                                    class="btn btn-secondary">
                                        Edit
                                    </button>
                                </td>   
                            </tr>
                        </tbody>
                    </table>
                </div>


            
            <div class="container col-md-4 mx-auto">
                        <div class="row">
                            <div class="d-grid gap-3 d-md-block mx-auto">
                                <button type="button" class="btn btn-secondary" style="background-color: #499E0B">
                                    <a class="text-white" href="javascript:window.print()">Imprimir</a>
                                </button>

                                <button type="button" class="btn btn-secondary" style="background-color: #0D0D20">
                                        <router-link class="text-white" to="/equipos">Continuar</router-link>	
                                </button>

                                <button type="button" class="btn btn-secondary" style="background-color: #0D0D20">
                                        <router-link class="text-white" to="/">Descartar</router-link>	
                                </button>
                                
                            </div>
                        </div>
            </div>

        </div>
    </div>
</template>


<script>
    class DatosJugadores {
        constructor(jugador_l,camiseta_l,golesl, tarjetas_l,jugador_v,camiseta_v,golesv, tarjetas_v){
            this.jugador_l = jugador_l;
            this.camiseta_l = camiseta_l;
            this.golesl = golesl;
            this.tarjetas_l = tarjetas_l;
            this.jugador_v = jugador_v;
            this.camiseta_v = camiseta_v;
            this.golesv = golesv;
            this.tarjetas_v = tarjetas_v;
        }
    }
     export default {
        data(){
            return{
                jugadores: new DatosJugadores(),
                all_jugadores: [],
                edit: false,
                jugadoresToEdit: ''
            }
        },
        created() {
            this.getTask();
        },
        methods: {
            getTask() {
                fetch('/routes/jugadores')
                .then(res => res.json())
                .then(data => {
                    this.all_jugadores = data;
                    console.log(this.all_jugadores)
                }
                );
            },
            sendTask() {
                if(this.edit === false) {
                    fetch('/routes/jugadores', {
                        method: 'POST',
                        body: JSON.stringify(this.jugadores),
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getTask();
                    })
                } else {
                    fetch('/routes/jugadores/' + this.jugadoresToEdit, {
                        method: 'PUT',
                        body: JSON.stringify(this.jugadores),
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getTask();
                        this.edit = false;
                    })
                }


                this.jugadores= new DatosJugadores();
            },
            deleteTask (id) {
                fetch('/routes/jugadores/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data =>  {
                    this.getTask();
                });
            },            
            editTask(id) {
                    fetch('/routes/jugadores/' + id)
                    .then(res => res.json())
                    .then(data => {
                        this.jugadores = new DatosJugadores(data.jugador_l, data.camiseta_l, data.golesl, data.tarjetas_l, data.jugador_v, data.camiseta_v, data.golesv, data.tarjetas_v);
                        this.jugadoresToEdit= data._id;
                        this.edit= true;
                    });
                }
        }
    }
</script>