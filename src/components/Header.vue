<template>
  <div>
    <div class="menu">
      <div class="logo">
        <img src="../assets/images/logo.svg">
      </div>
      <div class="menu-items">
        <router-link to="/">About us</router-link>
        <router-link to="/">Ventures</router-link>
        <router-link to="/">Operation</router-link>
        <router-link to="/">DUXPlatform</router-link>
        <router-link to="/">Careers</router-link>
        <router-link to="/">Contact us</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'header-part'
}

</script>

<style scoped lang="scss">
.menu{
  //background-color: grey;
  display: flex;
  justify-content:space-between;
  align-items: center;
  //padding: 25px;
  .menu-items{
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 105%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #F0F0F0;
    a{
      color: #F0F0F0;
      text-decoration: none;
      list-style-type: none;
    }
    a:not(:last-child){
      margin-right: 50px;
    }
  }
}
</style>