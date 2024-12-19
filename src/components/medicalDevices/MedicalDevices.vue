<script setup>

import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <template #main>
      <h1>MEDICAL DEVICES</h1>

      <div class="card">
        <div class="image-section"></div>
        <div class="content">
          <p>Pacemakers</p>
          <p>a small, battery-powered device that's surgically implanted in the chest or abdomen to help the heart beat at a normal rate and rhythm</p>
        </div>
      </div>

      <div class="card">
        <div class="image-section"></div>
        <div class="content">
          <p>Cochlear Implants</p>
          <p>a small electronic device that helps people with severe hearing loss or deafness hear sounds and understand speech</p>
        </div>
      </div>

      <div class="card">
        <div class="image-section"></div>
        <div class="content">
          <p>Joint Implants</p>
          <p>a replacement for a damaged or diseased joint that is made of metal, plastic, or ceramic</p>
        </div>
      </div>

      <div class="image1">
        <img src="./pacemaker.svg" alt="Pacemaker"/>
      </div>

      <div class="image2">
        <img src="./Ear-implant.svg" alt="Ear-implant"/>
      </div>

      <div class="image3">
        <img src="./joint-implant.svg" alt="joint-implant"/>
      </div>


    </template>
  </primary-template>
</template>

<style scoped>
/*mobile first*/
.main h1 {
  text-align: center;
  padding: 30px;
  font-size: 25px;
}

.card {
  display: flex;
  margin: 0 auto;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.image-section {
  background-color: #eaeaea; /* Gray rectangle */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 30%;
}

.image1 {
  display: flex;
  justify-content: left;
  transform: scale(0.05);
  margin: 0 auto;
  position: relative;
  top: -1300px;
  right: 230px;
}

.image2 {
  display: flex;
  transform: scale(0.1);
  margin: 0 auto;
  position: relative;
  top: -1970px;
  right: 210px;
}

.image3 {
  display: flex;
  transform: scale(0.13);
  margin: 0 auto;
  position: relative;
  top: -2325px;
  right: 180px;
}


/*tablets and up*/
@media screen and (width > 550px) {
  .main h1 {
    text-align: center;
    padding: 30px;
    font-size: 25px;
  }

  .card {
    display: flex;
    margin: 0 auto;
    width: 800px;
    height: 250px;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 60px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .content {
      //border: 10px solid black;
      margin: 1rem 0 0 1rem;
    }
  }

  .image-section {
    background-color: #eaeaea; /* Gray rectangle */
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 40%;
  }

  .image1 {
    display: flex;
    justify-content: left;
    transform: scale(0.1);
    margin: 0 auto;
    position: relative;
    top: -1410px;
    right: 340px;
  }

  .image2 {
    display: flex;
    transform: scale(0.2);
    margin: 0 auto;
    position: relative;
    top: -2050px;
    right: 270px;
  }

  .image3 {
    display: flex;
    transform: scale(0.32);
    margin: 0 auto;
    position: relative;
    top: -2340px;
    right: 180px;
  }
}


</style>