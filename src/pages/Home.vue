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
      <div class="history">
        <p>
          When DUXGroup started in <span class="blue">2020</span>, we set out to make history by creating something great, aiming to set the pace for the entire industry.
          Individuals  <span class="blue">specialising in iGaming</span>, mobile marketing, and product development came together to form three incredible teams into one strong project.
          <span class="blue">“DUX” means “leader”</span>. And DUXGroup turns this name into reality.
          We are  <span class="blue">leaders in everything</span> we do and continue to push our tribe forward every day.
          Our mission? We want to  <span class="blue">revolutionize</span> the iGaming segment!
        </p>
      </div>
      <div class="running">
        <div class="title">
          <p>We follow the principle </p>
        </div>
        <div class="line">
          <marquee direction="row" height="100" width="100%" bgcolor="#010C28" Scrollamount=40>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>Revolutionize
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>Improve
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>Perfect
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>Revolutionize
          </marquee>
          <marquee direction="right" height="100" width="100%" bgcolor="#010C28" Scrollamount=40>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>Improve
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>Perfect
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>Revolutionize
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>Improve
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>Perfect
          </marquee>
        </div>
      </div>
      <div class="devider">
        <img src="../assets/images/123123123.svg" />
      </div>
      <div class="partnership">
        <div class="title">
          <p>Synergy and partnership</p>
        </div>
        <div class="items">
          <div class="column">
            <div class="item">123213</div>
            <div class="item">123123</div>
          </div>
          <div class="column">
            <div class="item">123213</div>
            <div class="item">123123</div>
          </div>
        </div>
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
.blue{
  color: #2F5BD8;
}
.header{
  background: linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
  min-height: 500px;
  padding: 25px;
  .bg-img{
    width: 100%;
    background-image: url("../assets/images/home-bg.png");
    background-position: right;
    background-repeat: no-repeat;
    min-height: 700px;
    .menu{
      .content{
        margin-top: 240px;
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
          width: 1100px;
          .brave{
            font-family: 'Oxygen', sans-serif;
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
  }
}
.devider{
  padding-top: 150px;
  display: flex;
  width: 100%;
  background-color: #010C28;
  align-items: flex-end;
  img{
    width: 100%;
  }
}
.history{
  background-color: #010C28;
  padding-top: 100px;
  width: 100%;
  font-family: 'Exo';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 47px;
  color: #F0F0F0;
  p{
    width: 740px;
    margin: 0 auto;
  }
}
.running{
  padding-top: 150px;
  background-color: #010C28;
  .title{
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.03em;
    padding-bottom: 40px;
    text-transform: uppercase;
    color: #F0F0F0;
    p{
      margin: 0;
    }
  }
  .line{
    marquee{
      font-family: 'Oxygen';
      font-style: normal;
      font-weight: 400;
      font-size: 118px;
      line-height: 95%;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #F0F0F0;
      svg{
        //vertical-align: super;
        margin: 40px;
      }
    }

  }
}
.partnership{
  .items{
    display: flex;
    .column{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 400px;
      .item{
        background-image: url('../assets/images/partnership-bg.png');
        background-repeat: no-repeat;
        background-position: top;
        //-webkit-clip-path: polygon(100% 100%, 100% 31%, 44% 31%, 33% 26%, 7% 26%, 0 31%, 0 100%);
        //clip-path: polygon(100% 100%, 100% 31%, 44% 31%, 33% 26%, 7% 26%, 0 31%, 0 100%);
        min-height: 400px;
        width: 40%;
      }

    }
  }
}
</style>