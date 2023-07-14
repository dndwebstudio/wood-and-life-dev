
import { defineStore } from "pinia";

interface Tooltip {
  dataText: string;
  dataImg: string;
  defineTextClass: string;
}

export const useTooltipStore = defineStore("tooltips", {
  state: (): { tooltips: Ref<Tooltip[]>, otherProperty: [] } => ({
    tooltips: ref([
      {
        dataText: "Стоимость односекционной бани-бочки из ели размером 2х2 м",
        dataImg: "/img/bathouse-calculator/sizes/small.svg",
        defineTextClass: ".priceSpan"
      },
      {
        dataText: "При правильной эксплуатации и регулярном уходе",
        dataImg: "",
        defineTextClass: ".fifty-years"
      },
      {
        dataText: "Лишняя влага удаляется из древесины с помощью специального термообрабатывающего оборудования",
        dataImg: "",
        defineTextClass: ".sushka"
      },
      {
        dataText: "Печь повышенной мощности - lorem ipsum dolor sit amet sad",
        dataImg: "",
        defineTextClass: ".pech"
      },
    ]),
    otherProperty: []
  })
});

