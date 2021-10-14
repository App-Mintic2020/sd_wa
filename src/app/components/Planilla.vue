<template>
    

    <div>


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
                    <input type="text" class="form-control" style="background-color: #DAFFB0; border: 1px solid green" v-model="jugadores.golesl">

                </div>
                <div class="col-md-1">
                    <label class="form-label">Tarjetas</label>
                    <input type="text" class="form-control" style="background-color: #DAFFB0; border: 1px solid green" v-model="jugadores.tarjetas_l">
                   
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
                    <input type="text" class="form-control" style="background-color: #DAFFB0; border: 1px solid green" v-model="jugadores.golesv">

                </div>
                <div class="col-md-1">
                    <label class="form-label">Tarjetas</label>
                    <input type="text" class="form-control" style="background-color: #DAFFB0; border: 1px solid green" v-model="jugadores.tarjetas_v">
                   
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
                                <th>Control de registrados</th>
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
                                        Eliminar
                                    </button>
                                    <button @click="editTask(jugadores._id)"
                                    class="btn btn-secondary">
                                        Editar
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
                                    <a class="text-white" href="javascript:window.print()">Guardar</a>
                                </button>

                               
                                <button type="button" class="btn btn-secondary" style="background-color: #0D0D20">
                                        <router-link class="text-white" to="/">Descartar</router-link>
                                </button>

                                <button type="button" class="btn btn-secondary" style="background-color: #0D0D20" @click="sendAll">
                                       Registrar
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
                    this.all_jugadores.push(this.jugadores);
                    // fetch('/routes/jugadores', {
                    //     method: 'POST',
                    //     body: JSON.stringify(this.jugadores),
                    //     headers: {
                    //         'Accept': 'application/json',
                    //         'Content-type': 'application/json'
                    //     }
                    // })
                    // .then(res => res.json())
                    // .then(data => {
                    //     this.getTask();
                    // })
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
            sendAll() {
              console.log(this.all_jugadores);
              fetch('/routes/jugadores', {
                method: 'POST',
                body: JSON.stringify(this.all_jugadores),
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