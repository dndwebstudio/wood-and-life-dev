<template>
  <div v-if="popupStore.summ.num > 0" class="preprice" >
    <div class="preprice-container">
        <span class="preprice-container-title">Предварительная стоимость</span> 
        <span class="preprice-container-body" @click="goToCalculator">{{ popupStore.summ.str }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {usePopupStore} from '~/store/popup'
const popupStore = usePopupStore();

// const currentPosition = ref(false)

// currentPosition.value = popupStore.trueLocation

const $router = useRouter();
const goToCalculator = () => {
  $router.push('#bathouse-calculator');
};

</script>

<style lang="scss">


.preprice {
    display: none;

    @include r($md){
        position: fixed;
        right: 3vw;
        bottom: 2vh;
        width: 94vw;
        z-index: 100;
        display: flex;
        flex-direction: column;
        background: linear-gradient(180deg, #171717 0%, #1F1F1F 100%);
        padding: 2rem 1rem;
        cursor: pointer;
    }
    
    
    // @include r($lg) {
    //     bottom: 2.3vh;
    // }
    
    // @include r($md) {
    //     left: 3vw;
    //     bottom: 30.3vh;
    //     width: 19rem;
    // }

    // @include r($sm) {
    //     left: 3vw;
    //     bottom: 30.3vh;
    //     width: 19rem;
    // }

    // @include r($xs) {
    //     left: 3vw;
    //     bottom: 24rem;
    //     width: 19rem;
    // }

    &-container {
        display: flex;
        flex-direction: column;
        border-top: rgba(255, 255, 255, 0.2) 1px solid;
        padding-top: 1rem;
        gap: 1rem;
        align-items: center;
        &-title{
            font-family: 'Muller';
            font-style: normal;
            font-weight: 700;
            font-size: 10px;
            line-height: 110%;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.4);
        }
        &-body {
            font-family: 'Muller';
            font-style: normal;
            font-weight: 500;
            font-size: 28px;
            line-height: 110%;
            color: #FFFFFF;
            &:hover{
                text-shadow: 0 0 5px #fff;
            }
        }
    }
}


</style>