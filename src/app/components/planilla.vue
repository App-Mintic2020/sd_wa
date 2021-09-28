<template>
    <div>
        <Header/>
        <div class="container col-md-6">
            <div class="row">
                <div class="col">
                    <h2 class="mx-auto">Regitro de planilla -</h2>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Nombre de la planilla ingresada">
                </div>
            </div>
        </div>

        <div class="container col-md-6">
            <form class="row g-3">
                <div class="col-md-6">
                    <label class="form-label; text-center">Equipo Local</label>
                    <input type="text" class="form-control" placeholder="Ingrese el nombre del equipo local">
                </div>
                <div class="col-md-6">
                    <label class="form-label; text-center">Equipo Visitante</label>
                    <input type="text" class="form-control" placeholder="Ingrese el nombre del equipo visitante">
                </div>
                <div class="col-md-6">
                    <label class="form-label; text-center">Goles Local</label>
                    <input type="text" class="form-control" disabled>
                </div>
                <div class="col-md-6">
                    <label class="form-label; text-center">Goles visitante</label>
                    <input type="text" class="form-control" disabled>
                </div>
            </form>
        </div>


        <div class="container col-md-12">
            <form class="row g-3">

                <div class="col-md-3">
                    <label class="form-label">Nombre jugador local</label>
                    <input type="text" class="form-control" placeholder="Jugador local 1" style="background-color: #DAFFB0; border: 1px solid green">
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
                    <input type="text" class="form-control" placeholder="Jugador visitante 1" style="background-color: #E8E8E8; border: 1px solid black">
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


                <div class="col-md-3">
                    <label class="form-label">Nombre jugador local</label>
                    <input type="text" class="form-control" placeholder="Jugador local 2" style="background-color: #DAFFB0; border: 1px solid green">
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
                    <input type="text" class="form-control" placeholder="Jugador visitante 2" style="background-color: #E8E8E8; border: 1px solid black">
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


                <div class="col-md-3">
                    <label class="form-label">Nombre jugador local</label>
                    <input type="text" class="form-control" placeholder="Jugador local 3" style="background-color: #DAFFB0; border: 1px solid green">
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
                    <input type="text" class="form-control" placeholder="Jugador visitante 3" style="background-color: #E8E8E8; border: 1px solid black">
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


                <div class="col-md-3">
                    <label class="form-label">Nombre jugador local</label>
                    <input type="text" class="form-control" placeholder="Jugador local 4" style="background-color: #DAFFB0; border: 1px solid green">
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
                    <input type="text" class="form-control" placeholder="Jugador visitante 4" style="background-color: #E8E8E8; border: 1px solid black">
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


                <div class="col-md-3">
                    <label class="form-label">Nombre jugador local</label>
                    <input type="text" class="form-control" placeholder="Jugador local 5" style="background-color: #DAFFB0; border: 1px solid green">
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
                    <input type="text" class="form-control" placeholder="Jugador visitante 5" style="background-color: #E8E8E8; border: 1px solid black">
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


                <div class="col-md-3">
                    <label class="form-label">Nombre jugador local</label>
                    <input type="text" class="form-control" placeholder="Jugador local 6" style="background-color: #DAFFB0; border: 1px solid green">
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
                    <input type="text" class="form-control" placeholder="Jugador visitante 6" style="background-color: #E8E8E8; border: 1px solid black">
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


                <div class="col-md-3">
                    <label class="form-label">Nombre jugador local</label>
                    <input type="text" class="form-control" placeholder="Jugador local 7" style="background-color: #DAFFB0; border: 1px solid green">
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
                    <input type="text" class="form-control" placeholder="Jugador visitante 7" style="background-color: #E8E8E8; border: 1px solid black">
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


                
            

                <div class="container col-md-5">
                    <div class="row">
                        <div class="d-grid gap-3 d-md-block">
                            <button type="button" class="btn btn-secondary" style="background-color: #007400">Registrarse para Guardar</button>
                            <button type="button" class="btn btn-secondary" style="background-color: #499E0B">Descargar</button>
                            <button type="button" class="btn btn-success" style="background-color: #0D0D20">Descartar</button>
                        </div>
                    </div>
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