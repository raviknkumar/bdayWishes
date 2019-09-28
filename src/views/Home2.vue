<template>
  <div style="background-color: #2c3e50;" class="row">
    <marquee
      direction="down"
      class="col-2 col-sm-2 col-md-1 col-xs-1 col-lg-1 text-center"
      behavior="scroll"
    >
      <template v-for="i in 4">
        <img
          src="https://img.icons8.com/color/30/000000/party-baloon.png"
          alt="balloon"
        /><br /><br />
        <img
          src="https://img.icons8.com/color/30/000000/party-baloons.png"
          alt="balloon"
          class="group-balloon "
        /><br /><br />
        <img
          src="https://img.icons8.com/officel/30/000000/party-baloon.png"
          alt="balloon"
          class=""
        /><br /><br />
        <img
          src="https://img.icons8.com/dusk/30/000000/party-baloons.png"
          class="group-balloon "
          alt="balloon"
        /><br /><br />
        <img
          src="https://img.icons8.com/officel/30/000000/party-baloon.png"
          alt="balloon"
        /><br /><br />
        <img
          src="https://img.icons8.com/cotton/30/000000/party-baloons.png"
          alt="balloon"
          class="group-balloon"
        /><br /><br />
      </template>
    </marquee>

    <div class="col-8 col-sm-8 col-md-3 col-lg-10 col-xs-10">
      <div class="row">
        <h4 class="text-white text-center">
          Wishing you a day filled with happiness and a year filled with joy ...
        </h4>
      </div>

      <div class="row justify-content-center">
        <img
          src="../../public/crackers.gif"
          class="align-items-center"
          alt="crackers"
        />
      </div>

      <div class="row justify-content-center">
        <div class="box" :class="colors[i % 4]" v-for="(char, i) in happy">
          <h3>{{ char }}</h3>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="box" :class="colors[i % 4]" v-for="(char, i) in birthday">
          <h3>{{ char }}</h3>
        </div>
      </div>

      <div class="row justify-content-center">
        <img
          src="https://img.icons8.com/color/60/000000/birthday-cake.png"
          class="cake"
          alt="cake"
        />
      </div>

      <div class="row justify-content-center move">
        <div class="letter1" v-for="char in name2">
          {{ char }}
        </div>
      </div>

      <div style="margin-top: 5vh">
        <h4 class="text-white font-weight-bold">
          Sending you smiles for every moment of your special day…Have a
          wonderful time and a very happy birthday!
        </h4>

        <h3 style="color: deepskyblue; float: right">
          From RAVI...
        </h3>
      </div>
    </div>

    <marquee
      direction="up"
      class="col-2 col-sm-2 col-md-1 col-xs-1 col-lg-1 text-center"
      behavior="scroll"
      scrolldelay="5"
    >
      <template v-for="i in 4">
        <img
          src="https://img.icons8.com/color/30/000000/party-baloon.png"
          alt="balloon"
        /><br /><br />
        <img
          src="https://img.icons8.com/color/30/000000/party-baloons.png"
          alt="balloon"
          class="group-balloon "
        /><br /><br />
        <img
          src="https://img.icons8.com/officel/30/000000/party-baloon.png"
          alt="balloon"
          class=""
        /><br /><br />
        <img
          src="https://img.icons8.com/dusk/30/000000/party-baloons.png"
          alt="balloon"
          class="group-balloon "
        /><br /><br />
        <img
          src="https://img.icons8.com/officel/30/000000/party-baloon.png"
          alt="balloon"
        /><br /><br />
        <img
          src="https://img.icons8.com/cotton/30/000000/party-baloons.png"
          alt="balloon"
          class="group-balloon"
        /><br /><br />
      </template>
    </marquee>
  </div>
</template>

<script>
/* eslint-disable */

    import {mapGetters} from 'vuex';

    export default {
        name: "Home2",

        data() {
            return {
                happy: 'HAPPY',
                birthday: 'BIRTHDAY',
                colors: ['red', 'blue', 'yellow', 'green'],
                name: null,
            }
        },

        computed: {
            ...mapGetters({
                name2: 'getName'
            })
        },

        mounted() {

            /* let anime = this.$anime()*/
            this.$anime({
                targets: 'div.box',
                translateY: [
                    {value: 100, duration: 1000},
                    {value: 0, duration: 1000},
                ],
                scale: [1, 2, 3, 1],
                rotate: {
                    value: '1turn',
                    easing: 'easeInOutSine'
                },
                loop: true,

                delay(element, index) {
                    return (index + 1) * 2000;
                }
            });

            this.$anime({
                targets: '.balloon',
                translateY: {value: 200, duration: 2000},
                loop: true,
                easing: 'linear',
            });

            this.$anime({
                targets: '.balloon2',
                translateY: [
                    {value: 500, duration: 0},
                    {value: 0, duration: 5000}
                ],
                loop: true,
                easing: 'linear'
            });

            this.$anime({
                targets: '.cake',
                rotate: {
                    value: 720,
                    duration: 1000,
                    easing: 'easeInOutSine'
                },
                scale: {
                    value: [0, 1.2],
                    duration: 1000,
                    delay: 0,
                    easing: 'easeInOutQuart'
                },
                delay: 1000
            });

            const nameAnime = this.$anime.timeline({
                autoplay: true,
                loop: true,
                delay: 200
            });

            nameAnime.add({
                targets: '.letter1',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => {
                    return 100 * i;
                },
                loop: true
            }).add({
                targets: '.letter1',
                delay: 3000,
                easing: 'easeOutExpo'
            })
        }
    }
</script>

<style scoped>

    .box {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 3px;
        box-sizing: border-box;
    }

    .balloon {
        margin-top: 3vh;
    }

    .group-balloon {
        margin-left: 2px;
    }

    .red {
        color: red;
    }

    .yellow {
        color: yellow;
    }

    .green {
        color: green;
    }

    .blue {
        color: blue;
    }

    .cake {
        margin-top: 5vh;
    }

    .letter1 {
        display: inline-block;
        position: relative;
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
        font-size: 3.5em;
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        color: #d65027;
    }

    h4::before {
        content: open-quote;
        color: #0fff45;
        font-size: 32px;
    }

    h4::after {
        content: close-quote;
        color: #0fff45;
        font-size: 32px;
    }

</style>