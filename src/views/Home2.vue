<template>
    <div>
        WISH U MANY MORE HAPPY RETURNS OF THE DAY
        <img src="https://img.icons8.com/color/100/000000/party-baloon.png" class="balloon" style="float: left">
        <img src="https://img.icons8.com/officel/100/000000/party-baloons.png" class="balloon2" style="float: right">

        <img src="https://img.icons8.com/color/50/000000/birthday-cake.png" class="cake">
        
        <img src="/Users/nc7619/Downloads/cake.png">
    </div>
</template>

<script>
    export default {
        name: "Home2",
        mounted() {
            this.$anime({
                targets: '.balloon',
                translateY: [
                    {value: 640, duration: 10000},
                    {value: 0, duration: 0},
                ],
                loop: true,
                easing: 'linear',
            })

            this.$anime({
                targets: '.balloon2',
                translateY: [
                    {value: 640, duration: 10000},
                    {value: 0, duration: 0},
                ],
                loop: true,
                easing: 'linear',
            })

            this.$anime({
                targets: '.cake',
                translateX: {
                    value: 250,
                    duration: 800
                },
                rotate: {
                    value: 360,
                    duration: 1800,
                    easing: 'easeInOutSine'
                },
                scale: {
                    value: 2,
                    duration: 1600,
                    delay: 800,
                    easing: 'easeInOutQuart'
                },
                delay: 250 // All properties except 'scale' inherit 250ms delay
            });


        }
    }
</script>

<style scoped>

</style>