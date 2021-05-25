<template>
    <div class="container">
        <h1 class="title">You're usgin Composition API</h1>
        <h2>v-for</h2>
        <p>Colors:</p>
        <ul>
                <!-- v-for needs a key so that when we want to modify
                some value we have a reference. For that we add
                (color, index) & :key="index"
                -->
             <li v-for="(color, index) in colors" :key="index">
                {{ index }}: {{ color }}
             </li>
        </ul>

        <h2>Buttons Composition API</h2>
        <p>Power: {{ power }}</p>
        <div class="container-buttons">
            <button class="button" @click="upPower(200)">Increase</button>
            <button class="button" @click="downPower(100)">Decrease</button>
        </div>

        <div class="file">
            <p class="">components/CarComposition.vue</p>
        </div>
    </div>
</template>

<script>
//so can do binding we have to import ref
import { ref } from "vue"

export default {
    // We recive the props here
    props: {
        powerProp: {
            type: Number,
            default: 60
        },
        downPower: Function,
    },
    setup( props ){
        const brand = 'Audi'
        const model = 'A4'
        const colors = ['blue','yellow','orange']
        const price = 45000
        let power = ref(250)

        const message = {
            title: "Why do you choose this car ?",
            text: "Because it is a great car!"
        }

        const upPower = ( newPower )=> {
            console.log("Increase power")
            // Must use '.value' to read or write the value wrapped by 'ref()'
            power.value += newPower;
            console.log(power.value);
        }


        console.log(props);

        return {
            brand,
            model,
            colors,
            price,
            power,
            message,
            upPower,
        }
    }

}
</script>

<style>



.title {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #272848;
    font-size: 2rem;
    text-align: center;
}
.file {
    align-self: flex-start;

    margin-top: 10px;
    font-size: 1rem;
    color: #6c6d8a;
}

</style>