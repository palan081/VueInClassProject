<script setup>

import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <template #main>
      <div class="content">

        <h1>HUMAN ANATOMY INTERACTIVE GUIDE</h1>

        <div class="systemcard1">
          <h2>NERVOUS SYSTEM</h2>
          <p>includes the brain, spinal cord, and network of nerves</p>
          <router-link :to="{ name: 'SystemDetails', params: { systemId: '4'}}">Click to learn more!</router-link>
        </div>

        <div class="systemcard2">
          <h2>MUSCULAR SYSTEM</h2>
          <p>composed of skeletal, smooth, and cardiac muscle</p>
          <router-link :to="{ name: 'SystemDetails', params: { systemId: '7'}}">Click to learn more!</router-link>
        </div>

        <div class="systemcard3">
          <h2>CARDIOVASCULAR SYSTEM</h2>
          <p>composed of the heart, blood, and blood vessels (arteries and veins)</p>
          <router-link :to="{ name: 'SystemDetails', params: { systemId: '2'}}">Click to learn more!</router-link>
        </div>

        <div class="systemcard4">
          <h2>SKELETAL SYSTEM</h2>
          <p>composed of bones, cartilage, ligaments, and tendons</p>
          <router-link :to="{ name: 'SystemDetails', params: { systemId: '3'}}">Click to learn more!</router-link>
        </div>

        <div class="systemcard5">
          <h2>RESPIRATORY SYSTEM</h2>
          <p>composed of lungs, airways, diaphragm, voice box, throat, nose and mouth </p>
          <router-link :to="{ name: 'SystemDetails', params: { systemId: '5'}}">Click to learn more!</router-link>
        </div>

        <div class="systemcard6">
          <h2>DIGESTIVE SYSTEM</h2>
          <p>composed of esophagus, stomach, intestines, rectum, and anus </p>
          <router-link :to="{ name: 'SystemDetails', params: { systemId: '1'}}">Click to learn more!</router-link>
        </div>

        <div class="image">
          <img src="./skeletonhomepage.svg" alt="Skeleton Homepage"/>
        </div>
      </div>

    </template>
  </primary-template>
</template>


<style scoped>

.image {
  display: flex;
  justify-content: center;
}

@media screen and (width > 550px) {
  .main h1 {
    text-align: center;
    padding-top: 50px;
    font-size: 25px;
    //text-shadow: 1px 1px 1px red;
  }

  .content {
    position: relative;

    .image {
      display: flex;
      justify-content: center;
      align-content: center;
      transform: scale(0.9);
      margin: 0 auto;
      //background-color: #5a5a5a;
      z-index: -10;
      position: relative;
    }

    .systemcard1 {
      text-align: center;
      max-width: 250px;
      min-height: 100px;
      padding: 6px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
      position: absolute;
      top: 16%;
      right: 13%;

      h2 {
        font-size: 16px;
        text-shadow: 1px 1px 1px rgba(202, 0, 0, 0.76);
      }

      p {
        font-size: 11.5px;
        padding: 5px;
      }
    }

    .systemcard2 {
      text-align: center;
      max-width: 200px;
      min-height: 80px;
      padding: 5px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
      position: absolute;
      top: 56%;
      right: 71%;

      h2 {
        font-size: 16px;
        text-shadow: 1px 1px 1px rgba(202, 0, 0, 0.76);
      }

      p {
        font-size: 11.5px;
        padding: 5px;
      }
    }

    .systemcard3 {
      text-align: center;
      max-width: 200px;
      min-height: 80px;
      padding: 5px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
      position: absolute;
      top: 45%;
      right: 8%;

      h2 {
        font-size: 16px;
        text-shadow: 1px 1px 1px rgba(202, 0, 0, 0.76);
      }

      p {
        font-size: 11.5px;
        padding: 5px;
      }
    }

    .systemcard4 {
      text-align: center;
      max-width: 250px;
      min-height: 80px;
      padding: 5px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
      position: absolute;
      top: 84%;
      right: 60%;

      h2 {
        font-size: 16px;
        text-shadow: 1px 1px 1px rgba(202, 0, 0, 0.76);
      }

      p {
        font-size: 11.5px;
        padding: 5px;
      }
    }

    .systemcard5 {
      text-align: center;
      max-width: 250px;
      min-height: 80px;
      padding: 5px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
      position: absolute;
      top: 25%;
      right: 67%;

      h2 {
        font-size: 16px;
        text-shadow: 1px 1px 1px rgba(202, 0, 0, 0.76);
      }

      p {
        font-size: 11.5px;
        padding: 5px;
      }
    }

    .systemcard6 {
      text-align: center;
      max-width: 200px;
      min-height: 80px;
      padding: 5px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
      position: absolute;
      top: 72%;
      right: 13%;

      h2 {
        font-size: 16px;
        text-shadow: 1px 1px 1px rgba(202, 0, 0, 0.76);
      }

      p {
        font-size: 11.5px;
        padding: 5px;
      }
    }
  }
}

</style>
