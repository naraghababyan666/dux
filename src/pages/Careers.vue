<template>
  <div>

    <div class="careers-banner">
      <HeaderPart/>
      <h1 class="careers-banner__title">
        <span class="careers"><img class="span-svg" src="../assets/images/contact/Ellipse1.svg"
                                   alt="elipse">Careers</span>
        <span class="color-blue">People </span>are our main treasure
      </h1>
    </div>

    <div class="devider">
      <img src="../assets/images/careers/careers.svg" alt="careers"/>
    </div>
    <div class="line">
      <marquee direction="row" height="100" width="100%" bgcolor="#010C28" Scrollamount=40>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
             viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
        work hard
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
             viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
        Play hard
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
             viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
        work hard
      </marquee>
      <marquee direction="right" height="100" width="100%" bgcolor="#010C28" Scrollamount=40>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
             viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
        work hard
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
             viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
        Play hard
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
             viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
        work hard
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill"
             viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
        Play hard
      </marquee>
    </div>
    <div class="devider">
      <img src="../assets/images/careers/line.svg" alt="careers"/>
    </div>
    <div class="benefits">
      <h2 class="benefits__title">We
        <span class="color-blue"> love our people</span>,
        appreciate our team, and try to become like a second
        <span class="color-blue">family</span>.
        Want to be a part of our team? <span class="color-blue">Then join us!</span>
      </h2>
      <div class="row">
        <div class="row__container">
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Modern, iGaming environment in a sunny climate.
          </p>
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Team lunches, drinks, and team events.
          </p>
          <p class="row__text">
            <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Employee Development Plans.
          </p>
        </div>
        <div class="row__container">
          <p class="row__text">
              <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Seafront offices.
          </p>
          <p class="row__text">
              <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Birthdays (we celebrate by giving employees birthday gifts + yummy treats).
          </p>
          <p class="row__text">
              <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Mobile phone allowance.
          </p>
        </div>
        <div class="row__container">
          <p class="row__text">
              <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Private health insurance.
          </p>
          <p class="row__text">
              <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Flexi-time.
          </p>
          <p class="row__text">
              <span><img src="../assets/images/careers/dote.svg" alt="dote"></span>
            Kitchen packed with free flowing treats/ fruit/ snacks.
          </p>
        </div>
      </div>
    </div>
    <div class="devider">
      <img src="../assets/images/careers/header.svg" alt="header"/>
    </div>
    <div class="career">
      <h2 class="career__title">Start your
        <span class="color-blue"> star</span>
          career at
        <span class="color-blue">DUXGroup</span>

      </h2>
    </div>
    <div class="footer">
      <FooterPart/>
    </div>
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
import FooterPart from "@/components/Footer";

export default {
  name: "Careers-page",
  components: {HeaderPart, FooterPart}
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.color-blue {
  color: #2F5BD8;
}

.careers-banner {
  background: url("../assets/images/careers/careers-bg.svg") no-repeat right top, linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
  min-height: 702px;

  padding: 25px;

  &__title {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 134px;
    line-height: 95%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
    margin-top: 250px;
    max-width: 1000px;

    & .careers {
      font-family: "Oxygen", sans-serif;
      font-style: normal;
      width: fit-content;
      font-weight: 400;
      font-size: 38px;
      line-height: 48px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #F0F0F0;
      margin: 0 70px 70px 0;
      vertical-align: top;

      & .span-svg {
        margin-right: 11px;
        vertical-align: baseline;
      }
    }
  }
}

.devider {
  padding-top: 200px;
  display: flex;
  width: 100%;
  background-color: #010C28;
  align-items: flex-end;

  img {
    width: 100%;
  }
}

.line {
  marquee {
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 118px;
    line-height: 95%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;

    svg {
      //vertical-align: super;
      margin: 40px;
    }
  }

}

.benefits {
  background-color: #010C28;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 90px;

  &__title {
    max-width: 1214px;
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    line-height: 105%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
  }
}
.row{
  width: 100%;
  &__container{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 72px;
    & .row__text{
      width: 374px;
      font-family: 'Oxygen',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 35px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #F0F0F0;
      display: flex;
      & span{
        margin-right: 12px;
      }
    }
  }
}
.career {
  background-color: #010C28;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 90px;

  &__title {
    max-width: 820px;
    font-family: 'Oxygen',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 68px;
    line-height: 105%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
  }
}
.footer {
  background-color: #010C28;
}

@media only screen and (max-width: 1300px) {

  .careers-form {
    width: 960px !important;

  }

}

@media only screen and (max-width: 1160px) {
  .careers-banner__title {
    font-size: 84px;
  }
  .careers-form__container {
    padding: 32px;
  }

}

@media only screen and (max-width: 998px) {

  .form-left-side-title {
    font-size: 20px !important;
  }
  .form-left-side-text {
    font-size: 20px !important;
  }
  .form-right-side-input {
    width: 352px !important;
  }
}
</style>