import { defineStore } from "pinia";

export const useBathouseProjectsStore = defineStore("bathouseProjects", {
  state: () => ({
    projects: [
      {
        form: "Круглая",
        icon: "bathouse-forms/round",
        configs: [
          {
            type: {
              img: "/img/bathouse-types/round/round-1.jpg",
              name: "Бочка 2 м",
            },
            title: "Круглая баня-бочка 2 м",
            price: "от 149 000 руб.",
            popup: {
              title: "Базовая комплектация",
              listItems: [
                        "Каркас бани из профилированного бруса толщиной 45мм камерной сушки 10-12%.",
                        "Дровяная печь с внутренней топкой.",
                        "Камни для печи 100 кг",
                        "Пожаробезопасное многослойное основание — сэндвич под печь из нержавеющей стали, минерита и базальтового картона.",
                        "Проходной узел под дымоход из нержавеющей стали",
                        "Дымоход в сборе.",
                        "Лаги под готовую баню.",
                        "Бетонные блоки под баню бочку.",
                        "В парной 2 параллельные полки из липы",
                        "Напольный трапик в парной.",
                        "Форточка в парной 30х40 см.",
                        "Вентиляционные отверстия",
                        "Сливное отверстие.",
                        "Стальные обручи с регулирующимися стяжками.",
                        "Входная дверь филенчатая глухая.",
                        "Внутренняя дверь бани остекленная.",
                        "Комплект электрики",
                        "Кровля — мягкая черепица.",
                        "Наружная обработка бани-бочки в 2 слоя лаком антисептиком, цвет на выбор."
                      ]
                    },
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-2.jpg",
              name: "Бочка 3 м",
            },
            title: "Круглая баня-бочка 3 м",
            price: "от 100 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "5 м",
              },
              {
                name: "Диаметр",
                value: "5 м",
              },
              {
                name: "Длина парной",
                value: "4 м",
              },
              {
                name: "Вход",
                value: "С верху",
              },
              {
                name: "Количество комнат",
                value: "3",
              },
              {
                name: "Вместимость",
                value: "До 50 человек",
              },
              {
                name: "Материал",
                value: "Металл",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-3.jpg",
              name: "Бочка 3.5 м",
            },
            title: "Круглая баня-бочка 3.5 м",
            price: "от 1 000 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "100 м",
              },
              {
                name: "Диаметр",
                value: "50 м",
              },
              {
                name: "Длина парной",
                value: "20 м",
              },
              {
                name: "Вход",
                value: "Откуда-то от туда",
              },
              {
                name: "Количество комнат",
                value: "15",
              },
              {
                name: "Вместимость",
                value: "До 400 человек",
              },
              {
                name: "Материал",
                value: "Дуб",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-4.jpg",
              name: "Бочка 4 м",
            },
            title: "Круглая баня-бочка 4 м",
            price: "от 149 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-5.jpg",
              name: "Бочка 4.5 м",
            },
            title: "Круглая баня-бочка 4.5 м",
            price: "от 149 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-6.jpg",
              name: "Бочка 5 м",
            },
            title: "Круглая баня-бочка 5 м",
            price: "от 149 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-7.jpg",
              name: "Бочка 5.5 м",
            },
            title: "Круглая баня-бочка 5.5 м",
            price: "от 149 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-8.jpg",
              name: "Бочка 6 м",
            },
            title: "Круглая баня-бочка 6 м",
            price: "от 149 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-7.jpg",
              name: "Бочка 5.5 м",
            },
            title: "Круглая баня-бочка 5.5 м",
            price: "от 149 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-8.jpg",
              name: "Бочка 6 м",
            },
            title: "Круглая баня-бочка 6 м",
            price: "от 149 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
        ],
      },
      {
        form: "Квадро",
        icon: "bathouse-forms/quadro",
        configs: [
          {
            type: {
              img: "/img/bathouse-types/round/round-1.jpg",
              name: "Бочка 2 м",
            },
            title: "Круглая баня-бочка 2 м",
            price: "от 149 000 руб.",
            popup: {
              title: '',
              listItems: ['']
            },
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-2.jpg",
              name: "Бочка 3 м",
            },
            title: "Круглая баня-бочка 3 м",
            price: "от 100 000 руб.",
            popup: "",
            features: [
              {
                name: "Общая длина",
                value: "5 м",
              },
              {
                name: "Диаметр",
                value: "5 м",
              },
              {
                name: "Длина парной",
                value: "4 м",
              },
              {
                name: "Вход",
                value: "С верху",
              },
              {
                name: "Количество комнат",
                value: "3",
              },
              {
                name: "Вместимость",
                value: "До 50 человек",
              },
              {
                name: "Материал",
                value: "Металл",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-3.jpg",
              name: "Бочка 3.5 м",
            },
            title: "Круглая баня-бочка 3.5 м",
            price: "от 1 000 000 руб.",
            popup: "",
            features: [
              {
                name: "Общая длина",
                value: "100 м",
              },
              {
                name: "Диаметр",
                value: "50 м",
              },
              {
                name: "Длина парной",
                value: "20 м",
              },
              {
                name: "Вход",
                value: "Откуда-то от туда",
              },
              {
                name: "Количество комнат",
                value: "15",
              },
              {
                name: "Вместимость",
                value: "До 400 человек",
              },
              {
                name: "Материал",
                value: "Дуб",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-4.jpg",
              name: "Бочка 4 м",
            },
            title: "Круглая баня-бочка 4 м",
            price: "от 149 000 руб.",
            popup: "",
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
          {
            type: {
              img: "/img/bathouse-types/round/round-5.jpg",
              name: "Бочка 4.5 м",
            },
            title: "Круглая баня-бочка 4.5 м",
            price: "от 149 000 руб.",
            popup: "",
            features: [
              {
                name: "Общая длина",
                value: "2 м",
              },
              {
                name: "Диаметр",
                value: "2 м",
              },
              {
                name: "Длина парной",
                value: "1.8 м",
              },
              {
                name: "Вход",
                value: "С торца",
              },
              {
                name: "Количество комнат",
                value: "1",
              },
              {
                name: "Вместимость",
                value: "До 2 человек",
              },
              {
                name: "Материал",
                value: "Кедр и ель",
              },
            ],
            gallery: [
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
              {
                img: "/img/bathouse-projects/round/image-1.jpg",
              },
            ],
          },
        ],
      },
    ],
    additions: {
      desc: "<b>Любой типовой проект можно дополнить</b> панорамным стеклом, террасой, перенести двери и окна, вынести топку на улицу",
      img: "/img/bathouse-projects/additions/image-1.jpg",
      alt: "",
    },
  }),
});
