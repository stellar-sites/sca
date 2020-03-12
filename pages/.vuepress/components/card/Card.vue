<template>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
        <div class="container">
          <h2>Jane Doe</h2>
          <p class="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String
    }
  }
}
</script>
