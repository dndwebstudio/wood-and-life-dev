import { defineStore } from "pinia";

interface Popup {
    dataTitle: string;
  dataDesc: string;
  dataList: {
    [key: string]: string;
  };
  dataImg: string;
  defineTextClass: string;
}

export const usePopupStore = defineStore("popups", {
  state: (): { popups: Ref<Popup[]>, prePriceOpen: boolean, summ: {num: number, str: string},  otherProperty: [] } => ({
    popups: ref([
      {
        dataTitle: "111",
        dataDesc: "Стоимость односекционной бани-бочки из ели размером 2х2 м",
        dataList: {
            item1: "",
            item2: "",
        },
        dataImg: "/img/bathouse-calculator/sizes/small.svg",
        defineTextClass: ".priceSpan"
      },
      {
        dataTitle: "111",
        dataDesc: "Стоимость односекционной бани-бочки из ели размером 2х2 м",
        dataList: {
            item1: "",
            item2: "",
        },
        dataImg: "",
        defineTextClass: ".fifty-years"
      },
      {
        dataTitle: "111",
        dataDesc: "Стоимость односекционной бани-бочки из ели размером 2х2 м",
        dataList: {
            item1: "",
            item2: "",
        },
        dataImg: "",
        defineTextClass: ".sushka"
      },
    ]),   
    summ: {num: 0, str: ''}, // cумма для отображения в банере в области калькулятора
    prePriceOpen: false,
    otherProperty: []
  }),
  actions: {
    changeSumm(prop: {num: number, str: string}) {
     
       this.summ = prop;

    },
    togglePrePrice(prop: boolean) {
      this.prePriceOpen = prop;
    }
  },
});