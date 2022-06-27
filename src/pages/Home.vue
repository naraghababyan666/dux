<template>
    <div>
      <div class="header">
        <Header />
      </div>
      <div class="devider">

        <img src="../assets/images/123123123.svg" />
      </div>
    </div>
</template>

<script>
import Header from '../components/Header' ;
export default {
    name: 'home-page',
  components: { Header}

}

</script>

<style lang="scss">
.devider{
  margin-top: 50px;
  display: flex;
  width: 100%;
  align-items: flex-end;
  img{
    width: 100%;
  }
}

</style>