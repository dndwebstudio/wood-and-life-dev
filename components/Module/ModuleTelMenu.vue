<template>
    <div class="dropdown">
      <button class="header-main__tels-btn" @click="toggleMenu">
        <nuxt-icon name="phone" class="tel-icon" />
      </button>
      <div v-if="isMenuOpen" class="dropdown-menu" :class="{'show': isMenuOpen}" >
        <ul class="header-main__tels">
          <li v-for="(tel, idx) in tels" :key="idx" class="header-main__tels-item">
            <a :href="`tel:${tel.num.replace(/[^\d]/g, '')}`">{{ tel.num }}</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  

  <script setup lang="ts">

  interface Nums {
    num: string
  }

  interface Props {
    tels: Nums[]
  }

defineProps<Props>()
 
const isMenuOpen = ref(false)


const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value 
}



</script>

<style lang="scss">

.tel-icon{
  &:hover{
    color: var(--accent-color);
  }
}
.dropdown {
  position: relative;
  padding-top: 0.7rem;
  @include rmin($md) {
    display: none;
  }
}

.dropdown .dropdown-menu {
  position: absolute;
  top: 4rem;
  right: -4vw;
  display: none;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 18rem;
  @include r($sm){
    right: -2vw;
  }
}

.dropdown .dropdown-menu.show {
  display: block;
  
}

.header-main__tels {
  list-style: none;
  margin: 0;
  padding-top: .5rem;
  padding-left: .8rem;
}

.header-main__tels-item {
    margin-bottom: 0.9rem;

}

.header-main__tels-item a {
  color: #000;
  text-decoration: none;
  display: inline-block; 
  width: 100%; 
  height: 100%;
}

.header-main__tels-item a:hover {
  color: var(--green-500);
  text-shadow: 0 0 5px #fff;
}

</style>
