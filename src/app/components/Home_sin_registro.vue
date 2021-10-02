<template>
<div>

	<Header_sin_registro/>
		<div class="jumbotron">
			<div class="container"> 
				<div class="px-4 py-5 my-5 text-center">
						<h1 class="display-5 fw-bold">Bienvenidos</h1>
				</div>
					<h5>Encuentra aquí la planilla para tu partido de tu deporte
					favorito, podrás diligenciarla, fácil y sin mayores complicaciones,
					nos encanta hacer parte de tu equipo y contruir juntos,
					la hermosa cultura del deporte con tus amigos y familiares,
					siempre puedes contar con SportData para dejar huella de estos
					fenomenales encuentros.</h5>
					<p><a href="#" class="btn btn-success" style="background-color: #007400">Ver mas</a></p>
			</div>
		</div>
		<div class="container">
			<div class="row">

				<div class="col-lg-4">
					<div class="px-4 py-5 my-5 text-center">
					<h3>Microfutbol</h3>
						<img class="d-block mx-auto mb-4" src="images/microfutbol.jpg" style="width: 100%">
						<div class="row">
							<div class="d-grid gap-2 d-md-block">
								<button type="button" class="btn btn-success" style="background-color: #071D48" mx-auto>Registrar Planilla</button>
							</div>
                    	</div>	
					</div>
				</div>

				<div class="col-lg-4">
					<div class="px-4 py-5 my-5 text-center">
					<h3>Futbol</h3>
						<img class="d-block mx-auto mb-4" src="images/futbol.jpg" style="width: 100%">
							<div class="row">
								<div class="d-grid gap-2 d-md-block">
									<button type="button" class="btn btn-success" style="background-color: #071D48" mx-auto>Registrar Planilla</button>
								</div>
                    		</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="px-4 py-5 my-5 text-center">
					<h3>Baloncesto</h3>
						<img class="d-block mx-auto mb-4" src="images/baloncesto.jpg" style="width: 100%">
						<div class="row">
                        <div class="d-grid gap-2 d-md-block">
                            <button type="button" class="btn btn-success" style="background-color: #071D48" mx-auto>Registrar Planilla</button>
                        </div>
                    	</div>
					</div>
				</div>
			</div>
		</div>

		<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Noticias</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Entérate de los últimos encuentros deportivos planillados en nuestra app y de noticias de intéres deportivo de la región y del mundo.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-success" style="background-color: #007400">Ultimos encuentros</button>
        <button type="button" class="btn btn-outline-secondary">Nuestra App</button>
      </div>
    </div>
  </div>

	<div class="b-example-divider"></div>

  <div class="text-white px-4 py-5 text-center" style="background-color: #007400">
    <div class="py-10">
      <h1 class="display-5 fw-bold text-white">Contactos</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Contáctanos en nuestras redes sociales, será un gusto atenderte para que conozcas sobre nuestros servicios y saber sobre tus inquietudes e interéses.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-light">Facebook</button>
					<button type="button" class="btn btn-outline-light">GitHub</button>
          <button type="button" class="btn btn-outline-light">Twitter</button>
        </div>
      </div>
    </div>
  </div>

  <div class="b-example-divider mb-0"></div>

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