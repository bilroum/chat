<template>
  <div class="chat container">
    <h2 class="teal-text center">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}</span>
            <span class="grey-text">{{message.content}}</span>
            <span class="grey-text time">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :userName="chatName" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";

export default {
  name: "Chat",
  props: ["chatName"],
  components: {
    NewMessage
  },

  data() {
    return {
      messages: []
    };
  },

  created() {
    let ref = db.collection("messages").orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          let document = change.doc;
          this.messages.push({
            id: document.id,
            name: document.data().name,
            content: document.data().content,
            timestamp: document.data().timestamp
          });
        }
      });
    });
  }
};
</script>

<style>
.chat h2 {
  font-size: 3em;
}

.chat span {
  font-size: 1.5em;
}

.chat .time {
  display: block;
  font-size: 1.2em;
}
</style>