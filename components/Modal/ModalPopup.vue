
<template>
    <VuePopup class="calculator-items">
      <div v-if="itemProp.img" class="calculator-items-modal">
        <img :src="itemProp.img" :alt="itemProp.img">
        <div class="calculator-items-modal-content">
            <span class="calculator-items-modal-content-head">{{ itemProp.name }}</span>
            <span class="calculator-items-modal-content-body">{{ itemProp.text }}</span>
            <ul  
            class="calculator-items-modal-content marker-list">
                <li v-for="item of itemProp.list" :key="item">{{ item }}</li>
            </ul>
        </div>
      </div>
      <div v-else-if="!itemProp.text && !itemProp.img" class="calculator-items-modal">
        
        <div class="calculator-items-modal-content-listonly">
            <span class="calculator-items-modal-content-listonly-head">{{ itemProp.name }}</span>
            <ol  
            class="calculator-items-modal-content-listonly number-list">
                <li v-for="item of itemProp.list" :key="item">{{ item }}</li>
            </ol>
        </div>
      </div>
    </VuePopup>
  </template>
  
  <script setup lang="ts">

defineProps({
    itemProp: {
        type: Object,
        default: () => ({
            name: '',
            img: '',
            text: '',
            list: [''],
        }),
    }})

  </script>

<style lang="scss">



.calculator {
  &-items {
    max-width: 100vw;
   
    // background: transparent;
    @include r($sm) {
      max-width: 100%;
      padding-top: 5rem;
      padding-left: $padding-left-sm;
      padding-right: $padding-left-sm;
      height: auto;
      margin-top: auto;
    }
    &-modal{
            display: flex;
            gap: 20px;

            background: white;
            padding: 2rem;
            border-radius: 0.5rem;
            img{
              width: 260px;
              height: 260px;
              @include r($sm) {
                width: 10rem;
                height: 10rem;
              }
            }

            
            
            &-content{
                display: flex;
                flex-direction: column;
                max-width: 500px;
                gap: 20px;
                &-listonly{
                  
                  margin-left: 18px;
                  margin-top: 20px;
                  display: flex;
                  flex-direction: column;

                  .number-list li{
               
                  list-style: decimal;
                  font-family: 'Muller';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 120%;
                  color: #333333;
                  @include r($sm) {
                    font-size: 13px;
                  }
                }
                  &-head{
                    font-family: 'Muller';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 32px;
                    line-height: 110%;
                    color: #333333;
                    @include r($sm) {
                    font-size: 24px;
                  }
                  }
                }
                &-head{
                  font-size: 24px;
                  font-weight: 500;
                  line-height: 130%;
                  font-family: 'Muller';
                  font-style: normal;
                  @include r($sm) {
                    font-size: 18px;
                  }
                }
                &-body{
                  font-family: 'Muller';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 18px;
                  line-height: 120%;
                  color: #4A4A4A;
                  @include r($sm) {
                    font-size: 12px;
                  }
                }
                .marker-list{
                  gap:  5px;
                }

                .marker-list li {
                  list-style-type: none; 
                  display: flex;
                  font-family: 'Muller';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 18px;
                  line-height: 120%;
                  color: #4A4A4A;
                  @include r($sm) {
                    font-size: 14px;
                  }
                  
                }
                .marker-list li::before{
                  content: "\2022";  
                  font-size: 16px;
                  margin-right: 10px;
                }
                

            }

        }
    }

}

</style>