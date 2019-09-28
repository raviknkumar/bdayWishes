<template>
  <div class="about">
    <div style="visibility: hidden">
      <h1>This is an about page</h1>
      <div name="1" @click="call">
        <input v-on:keyup.up="submit()" id="0" />
      </div>
      <div name="1">
        <input id="1" v-on:keyup.up="submit()" />
      </div>
      <div name="1">
        <input id="2" v-on:keyup.up="submit()" />
      </div>
    </div>
    <img
      height="200px"
      width="300px"
      :style="{ transform: 'rotate(' + turn + 'deg)' }"
      src="https://d2mxuefqeaa7sj.cloudfront.net/s_ACF2B3FED5F7644A8E27E3FE8A9142BB95ECC3C792EA9166BF492FA2116B5277_1520024473198_Screen+Shot+2018-03-02+at+4.00.55+PM.png"
    />
    <button @click="rotateIt()">Rotate</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      turn: 0
    };
  },
  methods: {
    submit: function() {
      let total = document.getElementsByTagName("input").length;
      let id = event.target.id;
      document.getElementsByTagName("input")[(id + 1) % total].focus();
    },
    call: function() {
      // eslint-disable-next-line no-console
      let el = event.target.nextElementSibling;
      while (el) {
        // eslint-disable-next-line no-console
        console.log(el);
        el.focus();
        el = el.nextElementSibling;
      }
      // eslint-disable-next-line no-console
      // console.log(document.getElementsByName(event.target.name)[0].nextElementSibling)
    },
    rotateIt() {
      this.turn += 90;
      // eslint-disable-next-line no-console
      console.log(this.turn);
    }
  }
};
</script>
