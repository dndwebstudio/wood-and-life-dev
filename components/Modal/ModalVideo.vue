<template>
  <VueModal class="modal-video-wrap" :content-transition="'vfm-fade'">
    <div class="modal-video">
      <vue-plyr>
        <div class="plyr__video-embed">
          <iframe
            :src="videoLink"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
      </vue-plyr>
    </div>
  </VueModal>
</template>

<script setup lang="ts">
import "@skjnldsv/vue-plyr/dist/vue-plyr.css";

interface Props {
  videoLink: string;
  type?: boolean
}

withDefaults(defineProps<Props>(), {
  videoLink: "",
});
</script>

<style lang="scss">
.modal-video-wrap {
  .modal-wrap {
    padding: unset;
    max-width: 127.4rem;
    width: 60%;
    background: transparent;
    @include r($md) {
      min-width: 80vw;  
    }

    @include r($sm) {
      // max-width: 100%;
      min-width: 100vw;
      // padding-top: 5rem;
      // padding-left: $padding-left-sm;
      // padding-right: $padding-left-sm;
      height: auto;
      margin-top: auto;
    }
    
  }
  .btn-close-modal {
    top: 0;
    right: 0;
    color: #fff;

    .nuxt-icon {
      transition: transform 0.3s ease;
    }

    &:hover {
      .nuxt-icon {
        transform: scale(1.3);
        color: inherit;
      }
    }
  }
}

.modal-video {
}
</style>
