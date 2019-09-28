<template>
    <div class="container h-100" style="height: inherit;">


        <div class="row d-flex justify-content-center align-items-center h-100">

            <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 text-center" id="logo-gift">
                <img src="https://img.icons8.com/color/100/000000/gift.png" id="logo-hexagon"
                     style="width: max-content;" alt="gift">
            </div>

            <div class="col-6 col-sm-4 col-md-4 col-xl-3 col-lg-2 align-middle"
                 style="display: flex;flex-direction: column">

                <span id="logo-circle" style="color: black;margin-left: 1vw" class="font-weight-bolder">
                    Hey {{name}}!
                </span>

                <b-button variant="success" id="btnLeft" @click="navigate()" style="width: fit-content">
                    <div id="logo-text" class="site-title-text">
                        Surprise for U
                    </div>
                </b-button>

            </div>
        </div>

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
                name: this.$route.query.name != null ? this.$route.query.name : "My Dear"
            }
        },
        mounted() {

            const logoAnimation = this.$anime.timeline({
                autoplay: true,
                delay: 200
            });

            logoAnimation.add({
                targets: '#logo-gift',
                translateY: [-(screen.availHeight), 0],
                opacity: [0.3, 1],
                elasticity: 600,
                duration: 2000
            }).add({
                targets: '#logo-hexagon',
                rotate: [-90, 0],
                duration: 1200,
                elasticity: 600,
                offset: 100
            }).add({
                targets: '#logo-circle',
                scale: [0, 1.1],
                duration: 1200,
                elasticity: 600,
                offset: 500
            }).add({
                targets: '#btnLeft',
                translateX: ['100%', 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo',
                offset: 1000
            }).add({
                targets: '#logo-text',
                translateX: ['-100%', 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo',
                offset: 1000
            });

            this.$anime({
                targets: ".rotateImg",
                scale: [0, 1],
                rotate: 360,
                delay: 1000,
                translateX: [{
                    value: 500
                }, {
                    value: 0
                }],
                easing: 'linear'
            })
        },

        methods: {
            navigate() {
                this.$store.commit('setName', this.name);
                this.$router.push({ name: 'surprise', params: {name: this.name }});
            }
        }
    }
</script>

<style scoped>


</style>
