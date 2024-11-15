
<template>
    <div>
        <h1>{{ msg }} - {{ phone }}</h1>
        <ul>
            <li v-for="name in names" :key="name">{{ name }}</li>
        </ul>

        <button @click="increment">Increments</button>
        <h5>{{ count }}</h5>
    </div>
</template>

<script setup>

import {ref} from "vue"

    defineProps([
        "msg",
        "phone",
        "names",
    ]);

    let count = ref(0);

    const increment = () => {
        count.value ++;
        console.log("count", count.value);
    }

</script>

<style lang="" scoped>

</style>
