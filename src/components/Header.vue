<template>
  <div>
    <div class="menu">
      <div class="logo" @click="this.$router.push('/')">
        <img src="../assets/images/logo.svg">
      </div>
      <div class="menu-items">
        <router-link to="/">About us</router-link>
        <router-link to="/ventures">Ventures</router-link>
        <router-link to="/">Operation</router-link>
        <router-link to="/">DUXPlatform</router-link>
        <router-link to="/careers">Careers</router-link>
        <router-link to="/contact">Contact us</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'header-part',
  components: {


  }
}

</script>

<style scoped lang="scss">

@media screen and (max-width: 1024px){
  .menu{
    padding: 25px 8px !important;
    .logo{
      width: 110px !important;
      img{
        width: 100% !important;
      }
    }
    .menu-items{
      font-size: 12px !important;
      letter-spacing: 0.04em !important;
      a:not(:last-child){
        margin-right: 30px !important;
      }
    }
  }
}
.menu{
  //background-color: grey;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 25px;
  .logo{
    cursor: pointer;
  }
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