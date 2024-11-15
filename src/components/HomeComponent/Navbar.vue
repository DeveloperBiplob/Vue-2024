<template>
  <div>
    <!--Naver bar -->
    <nav id="navbar">
        <div class="container">
            <div class="navbarcontent">
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
            </div>
        </div>
    </nav>
    <!--Naver bar end -->
  </div>
</template>

<script setup>

</script>

<style scoped>
#navbar{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 20px 0;
}
#navbar .navbarcontent{
    display: flex;
    justify-content: space-between;
    align-content: center;
}
#navbar .navbarcontent .left ul{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
}
#navbar .navbarcontent .right{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
}
</style>
