<template>
  <div class="container">
    <div class="header">
      <HeaderPart />
      <img src="../assets/images/ventures/header-bg.png"/>
      <div class="content">
        <p class="p">
                <span class="brave">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                  </svg>DUXGROUP VENTURES
                </span>
          We invest in <span class="blue">the future of iGaming</span>
        </p>
      </div>
    </div>
    <div class="investment">
      <div class="title">
        <img src="../assets/images/ventures/investment/title.svg" />
      </div>
      <div class="content">
        <p><span class="blue">DUXGROUP VENTURES</span> IS A VENTURE CAPITAL FUND THAT INVESTS <span class="blue">€1-5 MILLION</span> IN IGAMING PROJECTS IN LINE WITH A <span class="blue">WIN-WIN MODEL</span> </p>
        <div class="imgs">
          <img src="../assets/images/ventures/investment/euro-big.png" />
          <img src="../assets/images/ventures/investment/dive-small.png" />
          <img src="../assets/images/ventures/investment/euro-middle.png" />
          <img src="../assets/images/ventures/investment/euro-small.png" />
          <img src="../assets/images/ventures/investment/Union.png" />
        </div>
      </div>
    </div>
    <div class="principes">
      <div class="title">
        <img src="../assets/images/ventures/principes/header.svg" />
      </div>
      <div class="items">
        <div class="item">
          <div class="item__title">
            <img src="../assets/images/ventures/principes/3.png" />
            <p>1 + 1 = 3</p>
          </div>
          <div class="text">
            <p>The principle of synergy will help your business develop geometrically.</p>
          </div>
        </div>
        <div class="item">
          <div class="item__title">
            <img src="../assets/images/ventures/principes/2.png" />
            <p>A Strong Team</p>
          </div>
          <div class="text">
            <p>We have combined the best experts in the field of marketing, product, and operations in the online gambling sector.</p>
          </div>
        </div>
        <div class="item">
          <div class="item__title">
            <img src="../assets/images/ventures/principes/1.png" />
            <p>iGaming Network</p>
          </div>
          <div class="text">
            <p>We have been working in the market for more than 8 years and can introduce you to all the right people.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
export default {
  name: "Ventures-page",
  components: {HeaderPart}
}
</script>

<style scoped lang="scss">
.blue{
  color: #2F5BD8;
}
.container{
  .header{
    background: linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
    img{
      margin-top: -90px;
      text-align: right;
      display: block;
      margin-left: auto;
    }

    .content{
      padding: 25px;
      .p{
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 136px;
        line-height: 95%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #F0F0F0;
        margin: 0;
        width: 1350px;
        .brave{
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          width: 300px;
          text-align: center;
          display: inline-block;
          font-weight: 400;
          font-size: 38px;
          line-height: 48px;
          //display: flex;
          //align-items: center;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
          margin: 0 70px 70px 0;
          vertical-align: super;
          svg{
            margin-right: 11px;
            vertical-align: baseline;
          }
        }
      }
    }
  }
  .investment{
    width: 100%;
    background-color: #010C28;
    padding-top: 150px;
    .title{
      padding: 0 25px;
      img{
        width: 100%;
      }
    }
    .content{
      padding: 250px 25px;
      position: relative;
      p{
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 58px;
        color: white;
        line-height: 105%;
        width: 45%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }
      .imgs{
        img:first-child{
          position: absolute;
          right: 30%;
          top: 50px;
        }
        img:nth-child(2){
          position: absolute;
          bottom: 200px;
          right: 40%;
        }
        img:nth-child(3){
          position: absolute;
          top: 0px;
          left: 300px;
        }
        img:nth-child(4){
          position: absolute;
          top: 125px;
          left: 50px;
        }
        img:nth-child(5){
          position: absolute;
          top: 300px;
          right: 150px;
        }
      }
    }
  }
  .principes{
    background-color: #010C28;
    position: relative;
    padding-bottom: 180px;
    //margin-top: 90px;
    .title{
      padding: 0 25px;
      img{
        width: 100%;
      }
    }
    .items{
      padding: 100px 25px 0 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item{
        width: 28%;
        &__title{
          display: flex;
          align-items: center;
          font-family: 'Oxygen';
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 35px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
          p{
            margin-left: 35px;
          }
        }
        .text{
          font-family: 'Exo';
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 125%;
          color: #F0F0F0;
          p{
            margin: 0;
          }

        }
      }
    }
  }
}
</style>