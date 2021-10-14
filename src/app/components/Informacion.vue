<template>
    <div>
        <div class="container-fluid col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <img src="images/header.jpg" style="width: 100%">
                    </div>
                </div>
        </div>
        <div class="container col-md-12">
            <h1>
               <center> Visión </center>

            </h1>

            <p>SPORTDATA es una app Web dirigida  
                al público en general interesado en conocer 
                la información de torneos y partidos de fútbol organizados 
                por sus propios usuarios. Plataforma web que genera planillas o un 
                planillero web, con el fin de recopilar y reportar la información de partidos 
                de manera efectiva en el momento del juego. App ecológica, que evita usar papel 
                y tinta para el diligenciamiento de planillas. Tendrá facilidad de acceso y
                almacenamiento, mientras incentiva la formación de la  cultura deportiva.
                A diferencia de las demás plataformas de generación de campeonatos como
                Goles y Fútbol y Winner, nuestra propuesta va a tener una planilla que
                va a ser diligenciada en cada partido, evitando usar planillas en papel. </p>
        </div>
        <h2>

               <center> ¿Cómo diligencias tú planilla?</center>
                <img class="d-block mx-auto mb-4" src="images/instrucciones.jpg" style="width: 100%">
        </h2>
        <div class="container col-md-3 mx-auto">
                        <div class="row">
                            <div class="d-grid gap-2 d-md-block mx-auto">
                                <button type="button" class="btn btn-secondary" style="background-color: #499E0B">
                                    <router-link class="text-white" to="/equipos-planilla">Registrar Planilla</router-link>
                                </button>

                               
                                <button type="button" class="btn btn-secondary" style="background-color: #0D0D20">
                                        <router-link class="text-white" to="/">Regresar</router-link>
                                </button>

                            </div>
                        </div>
            </div>
                    
    </div>

</template>