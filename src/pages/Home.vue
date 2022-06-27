<template>
    <div>
      <div class="header">
        <div class="bg-img">
          <div class="menu">
            <Header />
            <div class="content">
              <p class="p">
                <span class="brave">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                  </svg>Brave
                </span>
                We Were Born To Make History
              </p>
            </div>
          </div>
        </div>

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
.header{
  background: linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
  min-height: 500px;
  .bg-img{
    width: 100%;
    background-image: url("../assets/images/home-bg.png");
    background-position: right;
    background-repeat: no-repeat;
    min-height: 700px;
    .menu{
      padding: 25px;
      .content{
        .p{
          font-family: 'Oxygen';
          font-style: normal;
          font-weight: 400;
          font-size: 136px;
          line-height: 95%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #F0F0F0;
          margin: 0;
          .brave{
            font-family: 'Oxygen';
            font-style: normal;
            width: fit-content;
            font-weight: 400;
            font-size: 38px;
            line-height: 48px;
            //display: flex;
            //align-items: center;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: #F0F0F0;
            margin: 70px;
            vertical-align: super;
            svg{
              margin-right: 11px;
              vertical-align: baseline;
            }
          }
        }
      }
    }
  }
}
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