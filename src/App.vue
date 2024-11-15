<template>
<div>
  <HelloWorld msg="Hello from Main Components" phone="01643381009" :names="names"/>
</div>
</template>

<script setup>
  import HelloWorld from "./components/HelloWold.vue"
  console.log("HelloWorld", HelloWorld)

  const names = [
    'biplob',
    'mastura',
    'Meherim',
  ]
</script>

<style scoped>

</style>
