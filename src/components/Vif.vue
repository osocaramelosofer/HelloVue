<template>
    <div class="container">
        <h2>v-if</h2>
        <p>Marca: {{ brand }}</p>
        <p>Modelo: {{ model }}</p>
        <p>Urban powers less than 300</p>
        <ul>
            <!-- we use <template/> so that just show the content we want -->
            <template v-for="(power, index) in powers" :key="index">
                <li v-if="power < 300">Urban: {{ power }}</li>
                <li v-else-if="power === 280">Hibrido: {{ power }}</li>
                <li v-else>Race: {{ power }}</li>
            </template>
        </ul>
        <div class="file">
            <p class="">components/Vif.vue</p>
        </div>
    </div>
</template>

<script>
export default {
    setup(){
        const brand = 'Audi'
        const model = 'A6'
        const powers = [60, 80, 120, 160, 200, 280, 300, 390, 540, 500]

        return{
            brand,
            model,
            powers,
        }
    }
}
</script>
    
<style>
.container {
    /* center the div */
    margin: auto;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    background-color: #f5f5f8;
    border-radius: 5px;
}

</style>