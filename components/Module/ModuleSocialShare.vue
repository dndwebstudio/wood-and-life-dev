<template>
    <div class="flex gap-6 pb-48 items-center">
        <span class="text-[#333]">Поделиться:</span>
        <div class="flex gap-2">
            <a target="_blank" :href="'https://vk.com/share.php?url='+props.url+'&title='+props.title+'&utm_source=share2'"><img class="w-[30px] h-[30px]" src="/img/social/vk.svg" alt=""></a>
            <a target="_blank" :href="'https://www.facebook.com/sharer.php?src=sp&u='+props.url+'&title='+props.title+'&utm_source=share2'"><img class="w-[30px] h-[30px]" src="/img/social/facebook.svg" alt=""></a>
            <a target="_blank" :href="'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl='+props.url+'&st.comments='+props.title+''"><img class="w-[30px] h-[30px]" src="/img/social/odn.svg" alt=""></a>
            <a target="_blank" :href="'https://t.me/share/url?url='+props.url+'&text='+props.title+'&utm_source=share2'"><img class="w-[30px] h-[30px]" src="/img/social/tg.svg" alt=""></a>
            <a target="_blank" :href="'http://twitter.com/share?text='+props.title+'&url='+props.url"><img class="w-[30px] h-[30px]" src="/img/social/twitter.svg" alt=""></a>
            <a target="_blank" :href="'https://api.whatsapp.com/send?text='+props.title+' '+props.url+'&utm_source=share2'"><img class="w-[30px] h-[30px]" src="/img/social/viber.svg" alt=""></a>
            <a target="_blank" :href="'viber://forward?text='+props.title+' '+props.url+'&utm_source=share2'"><img class="w-[30px] h-[30px]" src="/img/social/wapp.svg" alt=""></a>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props{
    url: string;
    title: string;
}

let props = defineProps<Props>(

)
</script>