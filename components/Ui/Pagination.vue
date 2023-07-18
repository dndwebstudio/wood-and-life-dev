<template>
    <div class="pagination flex gap-20 font-medium mt-48 text-4xl">
        <!-- <span class="text-[#009767] border-b border-[#009767]">1</span> -->
        <span 
            v-for="(item, ind) in paginationLine.pages" 
            :key="ind"
            :class="getClassListPaginationItem(item.active, item.type)"
            @click="changeCurrentPage(item.pageValue)"
        >{{ item.value }}</span>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'; 


const emit = defineEmits(['changePage'])

interface Props{
    pageCurrent: number,
    pageLast: number,
    viewCountBorder: number,
    spaceValue: string
}

enum PaginationLineItemType {
    numberItem,
    spaceItem
}

interface PaginationLineItem {
    type: PaginationLineItemType,
    value: string,
    pageValue?: number,
    active: boolean
}

interface PaginationLine {
    pages: PaginationLineItem[]
}

const props = withDefaults(defineProps<Props>(), {
    pageCurrent: 1,
    pageLast: 1,
    viewCountBorder: 3,
    spaceValue: "..."
})

let pageCurrent = ref<number>(props.pageCurrent)

const paginationLine = computed<PaginationLine>(() => {
    let returnData: PaginationLine = {
        pages: []
    }

    let leftBorder = (pageCurrent.value-props.viewCountBorder) < 1 ? 1 : (pageCurrent.value-props.viewCountBorder)
    let rightBorder = (pageCurrent.value+props.viewCountBorder) > props.pageLast ? props.pageLast : (pageCurrent.value+props.viewCountBorder)

    for(let i = 1; i <= props.pageLast; i++){
        if(i == 1 || i == props.pageLast) {
            returnData.pages.push({
                type: PaginationLineItemType.numberItem,
                value: i+"",
                pageValue: i,
                active: i == pageCurrent.value
            })
        } else {
            if(i == leftBorder || i == rightBorder){
                if(i == leftBorder && ((i-1) != 1 && i != 1) ){
                    returnData.pages.push({
                        type: PaginationLineItemType.spaceItem,
                        value: props.spaceValue,
                        active: false
                    })
                }
                returnData.pages.push({
                    type: PaginationLineItemType.numberItem,
                    value: i+"",
                    pageValue: i,
                    active: i == pageCurrent.value
                })
                if(i == rightBorder && ((i+1) != props.pageLast && i != props.pageLast) ){
                    returnData.pages.push({
                        type: PaginationLineItemType.spaceItem,
                        value: props.spaceValue,
                        active: false
                    })
                }
            } else if (i > leftBorder && i < rightBorder) {
                returnData.pages.push({
                    type: PaginationLineItemType.numberItem,
                    value: i+"",
                    pageValue: i,
                    active: i == pageCurrent.value
                })
            }
        }
    }

    return returnData
})

function getClassListPaginationItem(isActive:boolean, itemType:PaginationLineItemType) {
    let returnData:string[] = []

    if(isActive){
        returnData.push('text-[#009767]')
        returnData.push('border-b')
        returnData.push('border-[#009767]')
    }

    if(itemType == PaginationLineItemType.numberItem){
        returnData.push('cursor-pointer')
    }else{
        returnData.push('cursor-default')
    }

    return returnData
}

function changeCurrentPage(value?:number){
    if(value){
        pageCurrent.value = value
        emit("changePage", pageCurrent.value)
    }
}

</script>