<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (Press Enter to send Message)</label>
      <input type="text" name="new-message" v-model="newMessage" />
      <div class="feedback" v-if="feedback">{{feedback}}</div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "NewMessage",
  props: ["userName"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },

  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.userName,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });

        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a Message";
      }
    }
  }
};
</script>

<style>
</style>