<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <main v-if="page === 'shop'" id="shop">


    <img alt="Ronaldo Jr Logo" id="logoshop" src="@/assets/logotext.png"/>

    <div id="backarrow">
      <img alt="Back Arrow"  src="@/assets/backarrow.png" v-on:click="turnpage('initial')"/>
    </div>

    <h1 id="shoptitle">Produtos</h1>

      <h2 class="shoplist">Produtos Beleza</h2>

      <section class="belezacarrousel">

        <!--Produtos De Beleza-->

        <div class="productcarrousel gel">
          <div class="productbgbebidas">
            <img class="productimg" src="@/assets/productsimg/oleobarba.png"/>
          </div>
          <h2>Óleo Para Barba 30ml</h2>
          <span>R$:30,00</span>
        </div>

        <div class="productcarrousel gel">
          <div class="productbg">
            <img class="productimg" src="@/assets/productsimg/gelericdavid.png"/>
          </div>
          <h2>Gel Blindado 300g</h2>
          <span>R$:15,00</span>
        </div>

        <div class="productcarrousel gel">
          <div class="productbgbebidas">
            <img class="productimg" src="@/assets/productsimg/minoxidil.png"/>
          </div>
          <h2>Minoxidil + Rolinho de Aplicação</h2>
          <span>Sob Consulta</span>
        </div>

        <div class="productcarrousel gel">
          <div class="productbg">
            <img class="productimg" src="@/assets/productsimg/gelimg.png"/>
          </div>
          <h2>Pomada Matte 150g</h2>
          <span>R$:25,00</span>
        </div>

        <div class="productcarrousel gel">
          <div class="productbg">
            <img class="productimg" src="@/assets/productsimg/pomadaincolor.png"/>
          </div>
          <h2>Pomada modeladora incolor 150g </h2>
          <span>R$:20,00</span>
        </div>

        <!--Fim do Produtos de Beleza-->

      </section>

      <h2 class="shoplist">Bebidas</h2>

      <section class="belezacarrousel">

      <!--Produtos De Beleza-->
      <div class="productcarrousel gel">
        <div class="productbgbebidas">
          <img class="productimg" src="@/assets/productsimg/brahma.png"/>
        </div>
        <h2>Cerveja Brahma Duplo Malte 269ml</h2>
        <span>R$:5,50</span>
      </div> 

      <div class="productcarrousel gel">
        <div class="productbgbebidas">
          <img class="productimg" src="@/assets/productsimg/heineken.png"/>
        </div>
        <h2>Cerveja Heineken 350ml</h2>
        <span>R$:5,50</span>
      </div> 

      <div class="productcarrousel gel">
        <div class="productbgbebidas">
          <img class="productimg" src="@/assets/productsimg/coronaneck.png"/>
        </div>
        <h2>Corona Long Neck 330ml</h2>
        <span>R$:10,00</span>
      </div> 

      <div class="productcarrousel gel">
        <div class="productbgbebidas">
          <img class="productimg" src="@/assets/productsimg/coca.png"/>
        </div>
        <h2>Coca-Cola 350ml</h2>
        <span>R$:5,50</span>
      </div>

      <div class="productcarrousel gel">
        <div class="productbgbebidas">
          <img class="productimg" src="@/assets/productsimg/guaranaantartica.png"/>
        </div>
        <h2>Guaraná antarctica 350ml</h2>
        <span>R$:5,50</span>
      </div>

      <div class="productcarrousel gel">
        <div class="productbgbebidas">
          <img class="productimg" src="@/assets/productsimg/agua.png"/>
        </div>
        <h2>Água 500ml</h2>
        <span>R$:2,50</span>
      </div>

      <!--Fim do Produtos de Beleza-->

      </section>

      <h2 class="shoplist">Consumiveis</h2>

      <section class="belezacarrousel">

      <!--Produtos De Beleza-->
      <div class="productcarrousel gel">
        <div class="productbgbebidas">
          <img class="productimg" src="@/assets/productsimg/trentos.png"/>
        </div>
        <h2>Trentos Diversos</h2>
        <span>R$:4,00</span>
      </div>

      <div class="productcarrousel gel">
        <div class="productbgbebidas">
          <img class="productimg" src="@/assets/productsimg/halls.png"/>
        </div>
        <h2>Halls</h2>
        <span>R$:2,50</span>
      </div>

      <!--Fim do Produtos de Beleza-->

      </section>

      <p class="footer">Ronaldo Silva Jr ©</p>


  </main>

  <main v-if="!page || page === 'initial'">
    <img alt="Vue logo" class="logobrand" src="@/assets/logo1.png" />

    <label for="price">VEJA O PREÇO:</label>

    <select name="price" id="price" v-model="page">
      <option value="initial">Clique e selecione</option>

      <optgroup label="Planos Mensais:">
        <option value="mensalcorte">Corte</option>
        <option value="mensalbarba">Barba</option>
        <option value="mensalcortebarba">Corte e Barba</option>
      </optgroup>

      <optgroup label="Avulsos:">
        <option value="corte">Corte</option>
        <option value="barba">Barba</option>
        <option value="acabamento">Acabamento</option>
        <option value="sobrancelha">Sobrancelha</option>
      </optgroup>
    </select>

    <p>ou</p>

    <a class="shopping" v-on:click="turnpage('shop')" >ver produtos</a>

    <p class="footer">Ronaldo Silva Jr ©</p>
  </main>

  <!--Planos Mensais-->

  <main v-if="page === 'mensalcorte'" id="mensalcorte">
    <div class="logotextbody">
      <img alt="Vue logo" class="logotext" src="@/assets/logotext.png" />
    </div>

    <label for="price">VEJA O PREÇO:</label>

    <select name="price" id="price" v-model="page">
      <option value="initial">Clique e selecione</option>

      <optgroup label="Planos Mensais:">
        <option value="mensalcorte">Corte</option>
        <option value="mensalbarba">Barba</option>
        <option value="mensalcortebarba">Corte e Barba</option>
      </optgroup>

      <optgroup label="Avulsos:">
        <option value="corte">Corte</option>
        <option value="barba">Barba</option>
        <option value="acabamento">Acabamento</option>
        <option value="sobrancelha">Sobrancelha</option>
      </optgroup>
    </select>

    <p>ou</p>

    <a class="shopping" v-on:click="turnpage('shop')">ver produtos</a>

    <section id="details">
      <div class="flex">
        <div class="sprints">
          <img src="./assets/sprints/navalha.svg">
          <img src="./assets/sprints/infinite.svg">
        </div>
        <p>melhor opção</p>
      </div>

      <h1>corte de cabelo mensal</h1>

      <div class="aligntext">
        <p class="blopt bestop">Corte varias vezes</p>
        <p class="whopt bestop">Corte dedicado</p>
        <p class="blopt bestop">Cabelo sempre Arrumado</p>
      </div>

      <div class="priceacess">
        <p style="margin: 8px 12px 0 8px;">PREÇO:</p>
        <p style="font-size: 32px; margin-left: 4px;">R$:95,00</p>
        <a class="agendar" disabled>AGENDE AGORA</a>
      </div>


    </section>

    <p class="footer">Ronaldo Silva Jr ©</p>
  </main>
  
  <main v-if="page === 'mensalbarba'" id="mensalbarba">
    <div class="logotextbody">
      <img alt="Vue logo" class="logotext" src="@/assets/logotext.png" />
    </div>

    <label for="price">VEJA O PREÇO:</label>

    <select name="price" id="price" v-model="page">
      <option value="initial">Clique e selecione</option>

      <optgroup label="Planos Mensais:">
        <option value="mensalcorte">Corte</option>
        <option value="mensalbarba">Barba</option>
        <option value="mensalcortebarba">Corte e Barba</option>
      </optgroup>

      <optgroup label="Avulsos:">
        <option value="corte">Corte</option>
        <option value="barba">Barba</option>
        <option value="acabamento">Acabamento</option>
        <option value="sobrancelha">Sobrancelha</option>
      </optgroup>
    </select>

    <p>ou</p>

    <a class="shopping" v-on:click="turnpage('shop')">ver produtos</a>

    <section id="details">
      <div class="flex">
        <div class="sprints">
          <img src="./assets/sprints/barba.svg">
          <img src="./assets/sprints/infinite.svg">
        </div>
      </div>

      <h1>corte de barba mensal</h1>

      <div class="aligntext">
        <p class="blopt bestop">Mantenha Barba Cortada</p>
        <p class="whopt bestop">Corte dedicado</p>
        <p class="blopt bestop">Corte varias vezes</p>
      </div>

      <div class="priceacess">
        <p style="margin: 8px 12px 0 8px;">PREÇO:</p>
        <p style="font-size: 32px; margin-left: 4px;">R$:95,00</p>
        <a class="agendar" disabled>AGENDE AGORA</a>
      </div>

    </section>

    <p class="footer">Ronaldo Silva Jr ©</p>
  </main>

  <main v-if="page === 'mensalcortebarba'" id="mensalcortebarba">
    <div class="logotextbody">
      <img alt="Vue logo" class="logotext" src="@/assets/logotext.png" />
    </div>

    <label for="price">VEJA O PREÇO:</label>

    <select name="price" id="price" v-model="page">
      <option value="initial">Clique e selecione</option>

      <optgroup label="Planos Mensais:">
        <option value="mensalcorte">Corte</option>
        <option value="mensalbarba">Barba</option>
        <option value="mensalcortebarba">Corte e Barba</option>
      </optgroup>

      <optgroup label="Avulsos:" style="color:black">
        <option value="corte">Corte</option>
        <option value="barba">Barba</option>
        <option value="acabamento">Acabamento</option>
        <option value="sobrancelha">Sobrancelha</option>
      </optgroup>
    </select>

    <p>ou</p>

    <a class="shopping" v-on:click="turnpage('shop')">ver produtos</a>

    <section id="details">
      <div class="flex">
        <div class="sprints">
          <img src="./assets/sprints/navalha.svg">
          <img src="./assets/sprints/barba.svg">
          <img src="./assets/sprints/infinite.svg">
        </div>
        <p>mais escolhido</p>
      </div>

      <h1>corte de cabelo e barba mensal</h1>

      <div class="aligntext">
        <p class="blopt bestop">Corte varias vezes</p>
        <p class="whopt bestop">Corte dedicado</p>
        <p class="blopt bestop">Sempre esteja Arrumado</p>
        <p class="whopt bestop">Economico</p>
      </div>

      <div class="priceacess">
        <p style="margin: 8px 12px 0 8px;">PREÇO:</p>
        <p style="font-size: 32px; margin-left: 4px;">R$140,00</p>
        <a class="agendar" disabled>AGENDE AGORA</a>
      </div>

    </section>

    <p class="footer">Ronaldo Silva Jr ©</p>
  </main>


  <!--Planos Avulsos-->

  <main v-if="page === 'corte'" id="corte">
    <div class="logotextbody">
      <img alt="Vue logo" class="logotext" src="@/assets/logotext.png" />
    </div>

    <label for="price">VEJA O PREÇO:</label>

    <select name="price" id="price" v-model="page">
      <option value="initial">Clique e selecione</option>

      <optgroup label="Planos Mensais:">
        <option value="mensalcorte">Corte</option>
        <option value="mensalbarba">Barba</option>
        <option value="mensalcortebarba">Corte e Barba</option>
      </optgroup>

      <optgroup label="Avulsos:">
        <option value="corte">Corte</option>
        <option value="barba">Barba</option>
        <option value="acabamento">Acabamento</option>
        <option value="sobrancelha">Sobrancelha</option>
      </optgroup>
    </select>

    <p>ou</p>

    <a class="shopping" v-on:click="turnpage('shop')">ver produtos</a>

    <section id="details">
      <div class="flex">
        <div class="sprints">
          <img src="./assets/sprints/navalha.svg">
          <img src="./assets/sprints/umavez.svg">
        </div>
      </div>

      <h1>corte de cabelo</h1>

      <div class="aligntext">
        <p class="blopt bestop">Corte uma única vez</p>
        <p class="whopt bestop">Corte dedicado</p>
      </div>

      <div class="priceacess">
        <p style="margin: 8px 12px 0 8px;">PREÇO:</p>
        <p style="font-size: 32px; margin-left: 4px;">R$:30,00</p>
        <a class="agendar" disabled>AGENDE AGORA</a>
      </div>

    </section>

    <p class="footer">Ronaldo Silva Jr ©</p>
  </main>

  <main v-if="page === 'barba'" id="barba">
    <div class="logotextbody">
      <img alt="Vue logo" class="logotext" src="@/assets/logotext.png" />
    </div>

    <label for="price">VEJA O PREÇO:</label>

    <select name="price" id="price" v-model="page">
      <option value="initial">Clique e selecione</option>

      <optgroup label="Planos Mensais:">
        <option value="mensalcorte">Corte</option>
        <option value="mensalbarba">Barba</option>
        <option value="mensalcortebarba">Corte e Barba</option>
      </optgroup>

      <optgroup label="Avulsos:">
        <option value="corte">Corte</option>
        <option value="barba">Barba</option>
        <option value="acabamento">Acabamento</option>
        <option value="sobrancelha">Sobrancelha</option>
      </optgroup>
    </select>

    <p>ou</p>

    <a class="shopping" v-on:click="turnpage('shop')">ver produtos</a>

    <section id="details">
      <div class="flex">
        <div class="sprints">
          <img src="./assets/sprints/barba.svg">
          <img src="./assets/sprints/umavez.svg">
        </div>
      </div>

      <h1>corte de barba</h1>

      <div class="aligntext">
        <p class="blopt bestop">Corte uma única vez</p>
        <p class="whopt bestop">Corte dedicado</p>
      </div>

      <div class="priceacess">
        <p style="margin: 8px 12px 0 8px;">PREÇO:</p>
        <p style="font-size: 32px; margin-left: 4px;">R$:25,00</p>
        <a class="agendar" disabled>AGENDE AGORA</a>
      </div>

    </section>

    <p class="footer">Ronaldo Silva Jr ©</p>
  </main>

  <main v-if="page === 'acabamento'" id="acabamento">
    <div class="logotextbody">
      <img alt="Vue logo" class="logotext" src="@/assets/logotext.png" />
    </div>

    <label for="price">VEJA O PREÇO:</label>

    <select name="price" id="price" v-model="page">
      <option value="initial">Clique e selecione</option>

      <optgroup label="Planos Mensais:">
        <option value="mensalcorte">Corte</option>
        <option value="mensalbarba">Barba</option>
        <option value="mensalcortebarba">Corte e Barba</option>
      </optgroup>

      <optgroup label="Avulsos:">
        <option value="corte">Corte</option>
        <option value="barba">Barba</option>
        <option value="acabamento">Acabamento</option>
        <option value="sobrancelha">Sobrancelha</option>
      </optgroup>
    </select>

    <p>ou</p>

    <a class="shopping" v-on:click="turnpage('shop')">ver produtos</a>

    <section id="details">
      <div class="flex">
        <div class="sprints">
          <img src="./assets/sprints/navalha.svg">
          <img src="./assets/sprints/umavez.svg">
        </div>
      </div>

      <h1>fazer acabamento</h1>

      <div class="aligntext">
        <p class="blopt bestop">Corte Rápido</p>
        <p class="whopt bestop">Corte dedicado</p>
        <p class="blopt bestop">matenha Corte Alinhado</p>
      </div>

      <div class="priceacess">
        <p style="margin: 8px 12px 0 8px;">PREÇO:</p>
        <p style="font-size: 32px; margin-left: 4px;">R$:15,00</p>
        <a class="agendar" disabled>AGENDE AGORA</a>
      </div>

    </section>

    <p class="footer">Ronaldo Silva Jr ©</p>
  </main>

  <main v-if="page === 'sobrancelha'" id="sobrancelha">
    <div class="logotextbody">
      <img alt="Vue logo" class="logotext" src="@/assets/logotext.png" />
    </div>

    <label for="price">VEJA O PREÇO:</label>

    <select name="price" id="price" v-model="page">
      <option value="initial">Clique e selecione</option>

      <optgroup label="Planos Mensais:">
        <option value="mensalcorte">Corte</option>
        <option value="mensalbarba">Barba</option>
        <option value="mensalcortebarba">Corte e Barba</option>
      </optgroup>

      <optgroup label="Avulsos:">
        <option value="corte">Corte</option>
        <option value="barba">Barba</option>
        <option value="acabamento">Acabamento</option>
        <option value="sobrancelha">Sobrancelha</option>
      </optgroup>
    </select>

    <p>ou</p>

    <a class="shopping" v-on:click="turnpage('shop')">ver produtos</a>

    <section id="details">
      <div class="flex">
        <div class="sprints">
          <img src="./assets/sprints/umavez.svg">
        </div>
        <p>mais escolhido</p>
      </div>

      <h1>fazer sobrancelha</h1>

      <div class="aligntext">
        <p class="blopt bestop">Corte uma única vez</p>
      </div>

      <div class="priceacess">
        <p style="margin: 8px 12px 0 8px;">PREÇO:</p>
        <p style="font-size: 32px; margin-left: 4px;">R$:10,00</p>
        <a class="agendar" disabled>AGENDE AGORA</a>
      </div>

    </section>

    <p class="footer">Ronaldo Silva Jr ©</p>
  </main>

 
</template>

<script>
export default {
  name: 'HomePage',
  data(){
    return{
      page:"initial",
    }
  },
  methods:{
    turnpage: function(a){
      this.page = a;
    }
  }
}
</script>

<style scoped>
  .agendar {
    opacity: 25%;
    margin-top: 32px;
    display: block;
    text-align: left;
    width: 100%;
    color: black;
    font-weight: 800;
    font-family: "Recursive", sans-serif;
    padding: 12px 24px;
    font-size: 17px;
    background-color: #32D951;
    border-radius: 8px;
  }

  .agendar::before{
    content: '';
    position: absolute;
    z-index: 1;
    right: 12%;
    padding: 28px;
    transform: translateY(-25%);
    background-image: url("@/assets/sprints/whatsapp.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  .productcarrousel span {
    font-family: "Recursive", sans-serif;
    color: #F80652;
  }

  .productcarrousel h2{
    margin-top: 4px;
    font-size: 16px;
    word-break: break-word;
    text-transform: uppercase;
    font-family: "Recursive", sans-serif;
    width: 128px;
    color: white;
  }

  .productcarrousel{
    margin-right: 32px;
    margin-bottom: 32px;
    text-align: left;
  }

  .productbg{
    padding: 16px;
    background-color: white;
    border-radius: 8px;

  }

  .productbgbebidas{
    text-align: center;
    padding: 8px;
    background-color: white;
    border-radius: 8px;
  }

  .belezacarrousel{
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    width: 100%;
    margin-bottom: 64px;
  }

  .seeall{
    font-weight: 200;
    text-transform: uppercase;
    color: white;
    margin-bottom: 8px;
    font-family: "Recursive", sans-serif;
    font-size: 12px;
  }

  .shoplist{
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 16px;
    font-family: "Recursive", sans-serif;
    color: white;
    width: 100%;
    text-align: left;
  }
  
  #shoptitle {
    font-weight: 800;
    font-size: 36px;
    margin-bottom: 32px;
    font-family: "Scada", sans-serif;
    color: white;
    width: 100%;
    text-align: left;
  }

  .priceacess {
    margin-top: 22px;
    justify-content: center;
    font-family: "Recursive", sans-serif;
    display: flex;
    width: 100%;
    padding: 0 38px;
    display: flex;
    flex-wrap: wrap;
  }

  .priceacess p {
    color: #F80652;
  }

  .aligntext{
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-transform:initial;
  }

  .bestop {
    font-weight: 200;
    text-align: center;
    width: 86%;
    padding: 8px 0;
    margin-bottom: 24px;
    border-radius: 4px;
  }

  .blopt{
    background-color: black;
    color: white;
    -webkit-box-shadow: 0px 4px 31px 0px rgba(87,87,87,0.5);
    -moz-box-shadow: 0px 4px 31px 0px rgba(87,87,87,0.5);
    box-shadow: 0px 4px 31px 0px rgba(87,87,87,0.5);

  }

  .whopt{
    background-color: white;
    color: black;
    -webkit-box-shadow: 0px 4px 31px 0px rgba(87,87,87,0.5);
    -moz-box-shadow: 0px 4px 31px 0px rgba(87,87,87,0.5);
    box-shadow: 0px 4px 31px 0px rgba(87,87,87,0.5);
  }

  #details {
    text-transform: uppercase;
    font-family: "Scada", sans-serif;
    color: white;
    font-weight: bold;
  }

  #details h1 {
    margin-top: 64px;
    text-align: left;
    font-size: 2em;
    padding: 0 32px;
  }

 .flex {
    margin-top: 64px;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    width: 24vw;
    padding: 0 38px;
 }

 .flex p {
  padding: 2px 2em;
  text-transform: uppercase;
  border: 1px solid white;
  border-radius: 16px;
 }

 .sprints {
  display: flex;
 }

 .sprints img {
  margin-right: 12px;
 }

  #mensalcorte {    
    top: 5%;
    transform: translateY(5%);
  }

  main img[class='logotext']{
    position: relative;
    float: left;
  }

  .logotextbody {
    width: 100%;
    text-align: left;
    padding-left: 9%;
    margin-bottom: 64px;
  }

  main img[class="logobrand"] {
    width: 512px;
  }

  main {
    position: relative;
    top: 20%;
    transform: translateY(20%);
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  #shop{
    transform: translateY(2%);
    padding-left: 128px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    flex-wrap: wrap;
  }

  #backarrow {
    padding-bottom: 40px;
    text-align: left;
    width: 100%;
  }


  main label {
    width: 20%;
    margin-bottom: 1px;
    color: white;
    font-family: "Recursive", sans-serif;
    font-weight: 200;
    text-align: left;
    display: block; 
  }

  #price {
    width: 20%;
    padding: 10px;
    margin-bottom: 8px;
    background: inherit;
    color: white;
    border-radius: 4px;
    font-family: "Recursive", sans-serif;
    text-transform:uppercase;
    font-style: italic;
  }

  #price option, optgroup{
    background-color: white;
    color: black;
  }

  p {
    color: white;
  }

  a.shopping {
    text-decoration: none;
    margin-top: 8px;
    width: 20%;
    background: #F80652;
    font-family: "Recursive", sans-serif;
    padding: 8px 8px;
    border-radius: 4px;
    color: white;
    text-align: left;
    text-indent: 8px;
    text-transform: uppercase;
  }

  a.shopping::before {
    content: '';
    position: absolute;
    z-index: 1;
    right: 40.7%;
    padding: 12px;
    background-image: url("@/assets/car.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  .footer {
    width: 80%;
    padding: 32px;
    border-radius: 16px;
    margin-top: 256px;
    margin-bottom: 32px;
    background-color: #C0C0C0;
    font-family: "Scada", sans-serif;
    color: black;
  }

  @media screen and (min-width:1280px){
    main {
      transform: translateY(5%);
    }

    .agendar::before{
      right: 40%;
    }
  }

  @media screen and (min-width:769px) and (max-width:1279px) {
    main label {
      width: 78%;
    }

    #price {
      width: 78%;
    }

    a.shopping {
      width: 78%;
    }

    a.shopping::before {
      right: 13%;
    }

    .flex {
      width: 85vw;
    }

    .bestop{
      width:90%;
    }

    main {
      transform: translateY(5%);
    }

    #shop {
      padding-left: 64px;
    }
    
  }

  @media screen and (max-width:768px) {

    #shop {
      padding-left: 32px;
    }

    .bestop {
      width: 82%;
    }

    #details h1 {
    margin-top: 16px;
    text-align: left;
    font-size: 2em;
    padding: 0 32px;
  }
    

    .flex {
    width: 100vw;
    }

    main {
      top: 5%;
      transform: translateY(5%);
    }

    main img[class="logobrand"] {
      width: 420px;
    }

    .logotextbody {
      width: 100%;
      text-align: left;
      padding-left: 32px;
      margin-bottom: 8px;
    }

    main label {
      width: 80%;
    }

    #price {
      width: 80%;
    }
    
    a.shopping {
      width: 80%;
    }
    
    a.shopping::before {
    right: 13%;
    }
  }

</style>
