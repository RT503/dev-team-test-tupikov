<script setup>

</script>

<template>
    <div class="progress">

        <div class="icons-row">
            <img src="../assets/icons/star.svg" style="visibility: hidden; "/>
            <img src="../assets/icons/star.svg" class="pos-relative" style="right: 10px;"/>
            <img src="../assets/icons/star-filled.svg"
                 :style="{ visibility: progress < 25 ? 'hidden' : 'initial' }"
                 style="position: absolute; left: 136px ; top: 4px;"/>
            <img src="../assets/icons/star.svg" class="pos-relative" style="right: 7px;"/>
            <img src="../assets/icons/star-filled.svg" class=""
                 :style="{ visibility: progress < 50 ? 'hidden' : 'initial' }"
                 style="position: absolute; left: 282px ; top: 4px;"/>
            <img src="../assets/icons/star.svg" class="pos-relative" style="right: 5px"/>
            <img src="../assets/icons/star-filled.svg" class=""
                 :style="{ visibility: progress < 100 ? 'hidden' : 'initial' }"
                 style="position: absolute; left: 427px ; top: 4px;"/>
            <img src="../assets/icons/star.svg" class="pos-relative" style="right: 3px"/>
            <img src="../assets/icons/star-filled.svg" class=""
                 :style="{ visibility: progress < 200 ? 'hidden' : 'initial' }"
                 style="position: absolute; left: 573px ; top: 4px;"/>
            <img src="../assets/icons/star.svg"/>
            <img src="../assets/icons/star-filled.svg" class=""
                 :style="{ visibility: progress < 500 ? 'hidden' : 'initial' }"
                 style="position: absolute; left: 719px ; top: 4px;"/>
            <img src="../assets/icons/final-cup.svg" class="pos-relative" style="right: 20px"/>
        </div>
        <div class="squares-row">
            <div class="square square_rounded_left">
                <div class="bar square_rounded_left" :style="{ width: progress < 25 ? progress * 4 + '%' : 100 + '%'}">
                    {{ progress }}
                </div>
            </div>
            <div class="square">
                <div class="bar " :style="{ width: (progress > 25 ) ? (progress - 25) * 4 + '%' : 0 }">
                    {{ progress }}
                </div>
            </div>

            <div class="square">
                <div class="bar " :style="{ width: progress < 50 && progress < 100? 0 : (progress - 50) * 2 + '%' }">
                    {{ progress }}
                </div>
            </div>
            <div class="square">
                <div class="bar " :style="{ width: progress < 100 ? 0 : (progress - 100) + '%' }">
                    {{ progress }}
                </div>
            </div>
            <div class="square">
                <div class="bar " :style="{ width: progress < 200 ? 0 : (progress - 200) / 2.9 + '%' }">
                    {{ progress }}
                </div>
            </div>
            <div class="square square_rounded_right">
                <div class="bar " :style="{ width: progress < 500 ? 0 : (progress - 500) / 5 + '%' }">
                    {{ progress }}
                </div>
            </div>
        </div>
        <div class="digits-row">
            <p>0</p>
            <p class="pos-relative" style="left: 3px">25</p>
            <p class="pos-relative" style="left: 8px">50</p>
            <p class="pos-relative" style="left: 7px">100</p>
            <p class="pos-relative" style="left: 3px">200</p>
            <p class="pos-relative">500</p>
            <p class="pos-relative" style="right: 20px">1000</p>
        </div>
    </div>
</template>

<script>
import {useStore} from "vuex"

export default {
    name: 'ProgressBar',

    computed: {
        progress: (vm) => vm.$store.state.progress,
        imgSrc: (vm) => vm.$store.state.progress === 0 ? '../assets/icons/star.svg' : 0
    }
}
</script>

<style scoped>
.progress {
    width: 903px;
}

.img {
    fill: #3300FF;
}

.icons-row {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -10px;
    width: 907px;
}

.squares-row {
    display: flex;
}

.digits-row {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 13px;
    width: 900px;

}

.square {
    width: 146px;
    height: 40px;
    background-color: rgba(239, 239, 239, 0.6);
    border-right: 1px solid #000;
    overflow: hidden;
}

.bar {
    background-color: #3300FF;
    height: 40px;
}

.square_rounded_left {
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
}

.square_rounded_right {
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
}

.pos-relative {
    position: relative;
}
</style>

