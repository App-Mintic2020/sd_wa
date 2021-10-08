<template>
    <div>
        
        <div class="container-fluid col-md-12">
            <div class="row">
                <div class="col-md-11">
                    <img src="images/header.jpg" style="width: 100%">
                </div>
                <div class="col-md-1">
                    <div class="d-grid gap-1">
                    <button type="button" class="btn btn-secondary" >Registrarse</button>
                    <button type="button" class="btn btn-success">Ingresar</button>
                    </div>
                </div>
            </div>
        </div>


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

