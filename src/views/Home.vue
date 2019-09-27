<template>
    <div class="home">
        <!--       <div class="box" :class="colors[i%4]" v-for="(char,i) in string">-->
        <!--           {{char}}-->
        <!--       </div>-->

        <div id="logo" style="display: flex;flex-direction: column;">
            <img src="https://img.icons8.com/color/100/000000/gift.png" id="logo-hexagon"
                 style="width: max-content;margin: 0px auto">
            <span id="logo-circle">
                Hey Anu!
            </span>
        </div>

        <b-button variant="success" id="btnLeft" @click="navigate()">
            <div id="logo-text" class="site-title-text">
                Surprise for U
            </div>
        </b-button>


    </div>

</template>

<script>
    // @ is an alias to /src

    export default {
        name: "home",
        components: {},

        data() {
            return {
                string: 'HAPPY BIRTHDAY',
                colors: ['red', 'blue', 'yellow', 'green'],
                colorIndex: 0,
            }
        },
        mounted() {

            // let anime = this.$anime({
            //     targets: 'div.box',
            //     translateY: [
            //         {value: 100, duration: 1000},
            //         {value: 0, duration: 1000},
            //     ],
            //     rotate: {
            //         value: '1turn',
            //         easing : 'easeInOutSine'
            //     },
            //     // backgroundColor:'',
            //     // opacity: '0.3'
            //     // for looping
            //     loop : true,
            //
            //     delay(element, index, totalElements) {
            //         return index * 2000;
            //     }
            // })

            // use anime.play and anime.pause to play or pause animation

            /* anime 2 */


            // this.$anime({
            //     targets: 'div.box.blue',
            //     translateY: [
            //         {value: 100, duration: 1000, delay: 2000},
            //         {value: 0, duration: 1000},
            //     ],
            //     rotate: {
            //         value: '1turn',
            //         easing : 'easeInOutSine',
            //         delay: 2000
            //     },
            // })

            const logoAnimation = this.$anime.timeline({
                autoplay: true,
                delay: 200
            });

            logoAnimation.add({
                targets: '#logo',
                translateY: [-100, 0],
                opacity: [0, 1],
                elasticity: 600,
                duration: 1600
            }).add({
                targets: '#logo-hexagon',
                rotate: [-90, 0],
                duration: 1200,
                elasticity: 600,
                offset: 100
            }).add({
                targets: '#logo-circle',
                scale: [0, 1],
                duration: 1200,
                elasticity: 600,
                offset: 500
            }).add({
                targets: '#logo-text',
                translateX: ['-100%', 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo',
                offset: 1000
            })
        },

        methods: {
            navigate() {
                this.$router.push("surprise");
            }
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


</style>
