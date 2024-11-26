<script setup>

import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <template #main>
      <h1>HUMAN ANATOMY INTERACTIVE GUIDE</h1>

      <div class="systemcard1">
        <h2>NERVOUS SYSTEM</h2>
        <p>includes the brain, spinal cord, and network of nerves</p>
      </div>

      <div class="systemcard2">
        <h2>MUSCULAR SYSTEM</h2>
        <p>composed of skeletal, smooth, and cardiac muscle</p>
      </div>

      <div class="systemcard3">
        <h2>CARDIOVASCULAR SYSTEM</h2>
        <p>composed of the heart, blood, and blood vessels (arteries and veins)</p>
      </div>

      <div class="systemcard4">
        <h2>SKELETAL SYSTEM</h2>
        <p>composed of bones, cartilage, ligaments, and tendons</p>
      </div>

      <div class="systemcard5">
        <h2>RESPIRATORY SYSTEM</h2>
        <p>composed of lungs, airways, diaphragm, voice box, throat, nose and mouth </p>
      </div>

      <div class="systemcard6">
        <h2>DIGESTIVE SYSTEM</h2>
        <p>composed of esophagus, stomach, intestines, rectum, and anus </p>
      </div>

      <div class="image">
        <img src="./skeletonhomepage.svg" alt="Skeleton Homepage"/>
      </div>

    </template>
  </primary-template>
</template>


<style scoped>
.main h1 {
  text-align: center;
  padding-top: 50px;
  font-size: 25px;
  //text-shadow: 1px 1px 1px red;
}

.image {
  display: flex;
  justify-content: center;
  align-content: center;
  transform: scale(0.9);
  margin: 0 auto;
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
  top: 26%;
  right: 26%;

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
  min-width: 200px;
  min-height: 80px;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
  position: absolute;
  top: 75%;
  right: 63%;

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
  min-width: 200px;
  min-height: 80px;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
  position: absolute;
  top: 40%;
  right: 63%;

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
  min-width: 200px;
  min-height: 80px;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
  position: absolute;
  top: 25%;
  right: 78%;

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
  min-width: 200px;
  min-height: 80px;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
  position: absolute;
  top: 36%;
  right: 57%;

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
  min-width: 200px;
  min-height: 80px;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
  position: absolute;
  top: 70%;
  right: 27%;

  h2 {
    font-size: 16px;
    text-shadow: 1px 1px 1px rgba(202, 0, 0, 0.76);
  }

  p {
    font-size: 11.5px;
    padding: 5px;
  }
}

</style>