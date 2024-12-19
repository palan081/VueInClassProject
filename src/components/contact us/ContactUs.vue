<script setup>

import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <template #main>
      <h1>CONTACT US</h1>

      <div class="profile">
        <img src="./sreyaanimated.png" alt="Animated profile"/>
      </div>

      <div class="information">
        <p>We’d love to hear from you! Whether you have questions, feedback,
          or suggestions, the team is here to help. Reach out to us for support,
          inquiries about features, or to
          share how our platform has enhanced your learning experience. You can
          contact us through our email at palan081@umn.edu or use the
          form below to send us a message. We’re committed to providing the best
          user experience and look forward to connecting with you!</p>
      </div>

      <div class="form">
        <form>
          <label for="fname"> First Name:   </label>
          <input type="text" id="fname" name="fname" placeholder="First Name" />

          <label for="lname"> Last Name:  </label>
          <input type="text" id="lname" name="lname" placeholder="Last Name" />

          <label for="message"> Message:   </label>
          <input type="text" id="message" name="message" placeholder="Message" />

          <label for="email"> Email:   </label>
          <input type="text" id="email" name="email" placeholder="palan081@gmail.com" />
            <input type="submit">

        </form>
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

.profile {
  display: flex;
  justify-content: center;
  transform: scale(0.4);
  position: relative;
  top: -160px;
  background-color: rgba(0, 24, 124, 0.71);
  border-radius: 50%;
}

.information p{
  text-align: center;
  margin: 0 auto;
  line-height: 40px;
  position: relative;
  top: -260px;
}

input[type=text], select {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;

}

input[type=submit] {
  background-color: #CA0000C1;
  width: fit-content;
  padding: 14px 20px;
  margin: 8px 0;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: grey;
}

.form {
  border-radius: 5px;
  //background-color: white;
  padding: 5px;
  max-width: 600px;
  width: fit-content;
  position: relative;
  top: -170px;
  right: -130px;
}


/*for Tablets and up*/
@media screen and (width > 550px) {
  .main h1 {
    text-align: center;
    padding: 30px;
    font-size: 25px;
  }

  .profile {
    display: flex;
    justify-content: center;
    transform: scale(0.4);
    position: relative;
    top: -160px;
    background-color: rgba(0, 24, 124, 0.71);
    border-radius: 50%;
  }

  .information p{
    text-align: center;
    margin: 0 auto;
    line-height: 40px;
    position: relative;
    top: -260px;
  }

  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;

  }

  input[type=submit] {
    width: 100%;
    background-color: #CA0000C1;
    width: fit-content;
    padding: 14px 20px;
    margin: 8px 0;
    border: 1px solid black;
    border-radius: 6px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: grey;
  }

  .form {
    border-radius: 5px;
    //background-color: white;
    padding: 5px;
    max-width: 600px;
    width: fit-content;
    position: relative;
    top: -170px;
    right: -130px;
  }
}



</style>