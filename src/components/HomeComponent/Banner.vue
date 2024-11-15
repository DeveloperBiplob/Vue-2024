<template>
    <div>
        <div id="banner">
            <div class="container">
                <div class="bannercontent">
                    <h1>{{ message }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps([
        'message'
    ]);
</script>

<style scoped>
#banner{
    background: #ece9e9;
    width: 100%;
    height: 300px;
}
#banner .bannercontent{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>