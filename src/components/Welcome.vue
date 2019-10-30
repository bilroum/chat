<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name" />
          <div v-if="feedback" class="feedback">{{feedback}}</div>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data() {
    return {
      name: null,
      feedback: null
    };
  },

  methods: {
    enterChat() {
      if (this.name) {
        this.feedback = null;
        //redirect to the chat component
        this.$router.push({ name: "Chat", params: { chatName: this.name } });
      } else {
        this.feedback = "Please Enter a Name to Continue";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 400px;
  margin-top: 10em;
}

.welcome h2 {
  font-size: 3em;
}

.welcome button {
  margin-top: 2em;
}

.feedback {
  color: red;
}
</style>
