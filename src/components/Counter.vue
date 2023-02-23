<template>

  <h2>{{ customTitle }}</h2>
  <p>{{counter}} <sup>2</sup> = {{ calculateSquareNumber }}</p>
  <p data-testid="counter">{{ counter }}</p>
  <div>
    <button class="push-button" @click="increaseCounter">+1</button>
    <button class="push-button" v-on:click="decreaseCounter">-1</button>
  </div>


</template>

<script>
export default {
    name: 'Counter', // the name is optional and it's usefull to identify the component in the vuedevtools
    props:{
        title: String,
        start: {
            type: Number,
            default: 100,
            validate( value ){
                return value => 0 
            }
            // required: false
        }
    },

    data(){
        return{
            counter: this.start
        }
    },
    methods:{
        getSquareValue(){
            return this.counter * this.counter
        },
        increaseCounter(){
            this.counter++
        },
        decreaseCounter(){
            this.counter--
        }
    },

    computed:{ // the computed methods always have to return something.
        calculateSquareNumber(){
            return this.counter * this.counter
        },
        customTitle(){
            // return this.title ? this.title : 'Counter'
            return this.title || 'Counter'
        }
    }

}
</script>

<style>
button {
  margin: 40px;
  padding: 0 50px;

  height: 60px;
  border-radius: 15px;
  border: none;

  color: #fff;

  transition: 0.3s ease;

  font-family: "Poppins", sans-serif;
  font-size: 24px;
}
.push-button {
  background-color: #57b894;

  box-shadow: 0 10px #4fa283;
}
.push-button:hover {
  box-shadow: 0 8px #4fa283;
  transform: translateY(1px);
}
.push-button:active {
  background-color: #4a9377;
  box-shadow: 0 5px #407762;
  transform: translateY(4px);
}

</style>