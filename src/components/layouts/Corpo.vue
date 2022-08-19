<template>
    <div class="container mt-5 pt-5">
        <div class="row ordem">
            <div class="col-md-6 infos animate__animated animate__fadeInLeft">
                        <span>Let's go</span>
                        <p class="programming">PROGRAMMING</p>
                        <p class="programming">SKILLS</p>
                        <p class="texto mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum aliquid, incidunt, excepturi repudiandae blanditiis laborum corrupti quasi magnam ut veniam rerum doloremque provident rem ipsam modi, amet molestias cum!</p>
                        <img src="@/assets/flecha.svg" alt="" width="40px" class="flecha">
                        <div>
                            <button class="btn saiba">Saiba mais</button>
                        </div>
    
            </div>
            <div class="col landing-imagem animate__animated animate__fadeInRight">
                <img src="@/assets/lading-img-fundo.svg" alt="" class="img-fluid h-100 img-landing">
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name:'Corpo'
}

</script>


<style scoped>
.programming{
    font-size: 4rem;
    margin: 0;
    line-height: normal;
}
p{
    overflow: hidden;
}
span{
    border-bottom: 1px solid black;
}
.flecha{
    margin-left: 6px;
    animation: descer 1s ease-in alternate infinite;
}
.saiba{
    margin-top: 1.4rem;
    background-color: #3F3D56;
    color: white;
    

}
@keyframes descer{

    to {
        transform: translateY(10px);
  }
}
@media (max-width:420px) {
    .infos{
        margin-top: 50px;
        order:2;
    }
    .programming{
        font-size:2rem;
    }
    .texto{
        font-size: 1rem;
    }
}
</style>