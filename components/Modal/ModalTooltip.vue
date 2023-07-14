<template>
    <div v-if="show" :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }" class="tooltip">
      <div class="tooltip-content" :style="{border: border}">
              <img :src="img" :alt="img"/>
              <span class="tooltip-content-text">{{text}}</span>
      </div>
              <svg class="svg-strelka" width="399" height="63" viewBox="174.505 88.155 49.303 12.094" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M2 7C2 3.68629 4.68629 1 8 1H391C394.314 1 397 3.68629 397 7V82C397 85.3137 394.314 88 391 88H226.151C219.261 
              88 212.581 90.3717 207.233 94.7166L203.284 97.9259C201.079 99.7169 197.921 99.7169 
              195.716 97.9259L191.767 94.7166C186.419 90.3717 179.739 88 172.849 88H8C4.68629 88 2 85.3137 2 82V7Z" 
              fill="#F5F5F5"/>
            </svg>
    </div>
    <div v-if="show && !img" :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }" class="tooltip">
            
        <div class="tooltip-noimg" :style="{border: border}">
              <span class="tooltip-content-text">{{text}}</span>
        </div>
              <svg class="svg-strelka" width="399" height="63" viewBox="174.505 88.155 49.303 12.094" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M2 7C2 3.68629 4.68629 1 8 1H391C394.314 1 397 3.68629 397 7V82C397 85.3137 394.314 88 391 88H226.151C219.261 
              88 212.581 90.3717 207.233 94.7166L203.284 97.9259C201.079 99.7169 197.921 99.7169 
              195.716 97.9259L191.767 94.7166C186.419 90.3717 179.739 88 172.849 88H8C4.68629 88 2 85.3137 2 82V7Z" 
              fill="#F5F5F5"/>
            </svg>
            
   
  </div>
  </template>
  
  <script lang="ts">
  export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    img: {
      type: String,
      default: ''
    },
    border: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    tooltipX: {
      type: Number,
      default: 0
    },
    tooltipY: {
      type: Number,
      default: 0
    }
  },

  }
  </script>
  
  <style lang="scss">

       .tooltip{
        
       
        display: flex;
        flex-direction: column;
        z-index: 999;
        position: fixed;
        left: 8%;
        bottom: 7rem;
        height: 100px;
        align-items: center;
        &-noimg{
          
         
          background-color: white;
          height: 100px;
          top: -21rem;
          right: -31rem;
          padding: 20px;
          width: 340px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 23px;
          border-radius: 7px;
          bottom: 143%;
        }
        &-content{
          background-color: white;
          height: 100px;
          top: -21rem;
          right: -31rem;
          padding: 20px;
          width: 340px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 23px;
          border-radius: 7px;
          bottom: 143%;
          &-text{
            all: unset;
            font-weight: 400;
            font-size: 14px;
            line-height: 120%;
            color: #4A4A4A;
        
      }
    }
    .svg-strelka {

      width: 39px;
      height: 18px;
      
      margin-top: -1%;
    }
  }
  </style>