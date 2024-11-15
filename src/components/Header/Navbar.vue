<template>
  <div>
    <!--Naver bar -->
    <nav id="navbar">
        <div class="left">
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
        <div class="right">
            <div id="account">Account</div>
            <div id="cart">1</div>
        </div>
    </nav>
    <!--Naver bar end -->
  </div>
</template>

<script setup>

</script>

<style scoped>
#navbar{
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
#navbar .left ul{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
}
#navbar .right{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
}
</style>
