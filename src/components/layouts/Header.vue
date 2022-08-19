<template>
<nav class="navbar navbar-expand-lg navbar-light  mt-2 animate__animated animate__fadeInDown">
  <div class="container">
    <a class="navbar-brand" href="#">Dev School</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <div class="container ">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center gap-2">
                <li class="nav-item">
                <a class="nav-link " href="#">Serviços</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Sobre</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contato</a>
                </li>
            </ul>
        </div>
        <button type="button" class="btn btn-outline-primary me-2 entrar">Entrar</button>
        <button class="btn btn-primary cadastrar"> Cadastrar</button>
    </div>
  </div>
</nav>
</template>

<script>

export default{
    name:'Header'
}

</script>


<style scoped>
.entrar{
    background-color: #3F3D56;
    border: 1px solid #3F3D56;
    color: white;
    outline-color: #3F3D56;
    opacity: .8;
}

.entrar:hover{
    background-color: #3F3D56;
    color: white;
    
}
.entrar:focus{
    border: 1px solid black;
    box-shadow: none;
}
.cadastrar{
    background-color: #8985A8;
    outline: none;
    box-shadow: none;
    border: 1px solid #8985A8;
}

</style>