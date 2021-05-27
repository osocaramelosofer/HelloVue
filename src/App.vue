<template>
<div class="container">
  <h1 class="title">Vue JS - You are at App.vue</h1>

</div>
  <car-options></car-options>
  <!-- Pass variables & functions through props 
    Must use ':' to refer a property 
    the thing after the ':' it's just the reference name you're gonna use-->
  <car-composition :powerProp="powerProp" :downPower="downPower"></car-composition>
  <vif></vif>
  <title></title>
  <title></title>
  <Title></Title>
</template>

<script>
// Import the components you've created.
import CarOptions from './components/CarOptions.vue'
import CarComposition from './components/CarComposition.vue'
import Vif from './components/Vif.vue'
import Title from './components/Title'



// Then to use them you need to write the components: { [ nameOfComponent ] }
export default {
  components: {
    CarOptions,
    CarComposition,
    Vif,
    Title,
  },
  setup() {
    let powerProp = 30

  // Pass a function through props
    const downPower = (  )=> {
        console.log("Decrease power")

    }

    return {
      powerProp,
      downPower
    }
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: #e7e7f6;
}
.container {
    /* center the div */
    margin: auto;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px;

    background-color: #f5f5f8;
    border-radius: 5px;
}
</style>