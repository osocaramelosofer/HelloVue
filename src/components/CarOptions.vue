<template>
  <div class="container">
    <h2 class="title">You're using Options API</h2>
    <p>Brand: {{ brand }}</p>
    <p>Model: {{ model }}</p>
    <p>Color: {{ color[0] }}</p>
    <p>Price: {{ price }}</p>
    <p>Message: Title{{ message.title }} | Goodbye:{{ message.text}}</p>

    <h2>Buttons Options API</h2>
    <p>Power: {{ power }}</p>
    <div class="container-buttons">
        <button class="button" @click="upPower(100)">Aumentar</button>
        <button class="button" @click="downPower">Disminuir</button>
    </div>

    <div class="file">
        <p class="">components/CarOptions.vue</p>
    </div>
  </div>

</template>

<script>



export default {
  // Create variables with "API OPTIONS"
  data() {
    return {
      brand: "audi",
      model: "A4",
      color: ["blue","red","yellow","black"], // create a array variable
      price: "800,000",
      power: 180,
      message :{
        title: "Hola mundo",
        text: "adios",
      }
    }
  },
  methods: {
    upPower(newPower) {
      console.log("Aumentando potencia");
      //To get access to variables declared at return, we have to write this.nameVariable
      this.power += newPower;
      console.log(this.power);
    },
    downPower() {
      console.log("Disminuyendo potencia");
      this.power --;
      console.log(this.power);
    }
  }

}
</script>

<style>
.container-buttons {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.button {
  all: unset;
  background-color: #6d71f9;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
}
</style>