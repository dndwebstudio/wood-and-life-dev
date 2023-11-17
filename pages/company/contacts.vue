<template>
	<div>
		<HeaderContainer :title="'Контакты'" :classString="'text-6xl sm:text-9xl pt-24'" />
		<SectionContact />
		<LazySectionMap :data="mapData" :shops="mapData.shops" />
		<SectionChoose :data="choose" />

	</div>
</template>

<script setup lang="ts">
import HeaderContainer from "~/components/Ui/HeaderContainer.vue";
import SectionContact from "~/components/Section/SectionContact.vue";
import { ref } from "vue";

const choose = ref({
	title: "Выберите, что хотите построить",
	desc: "Ответьте на несколько вопросов, и мы рассчитаем стоимость",
	chooses: [
		{
			img: "/img/choose/1.png",
			title: "Баня бочка",
		},
		{
			img: "/img/choose/2.png",
			title: "А-фрейм",
		},
		{
			img: "/img/choose/3.png",
			title: "Модульный дом",
		},
		{
			img: "/img/choose/4.png",
			title: "Каркасные бани",
		},
		{
			img: "/img/choose/5.png",
			title: "Дачный домик из мини-бруса",
		},
		{
			img: "/img/choose/6.png",
			title: "Дом из двойного бруса",
		},
		{
			img: "/img/choose/7.png",
			title: "Беседка",
		},
		{
			img: "/img/choose/8.png",
			title: "Гриль-домик",
		},
		{
			img: "/img/choose/9.png",
			title: "Дачный комплекс",
		},
		{
			img: "/img/choose/10.png",
			title: "Хозяйственные постройки",
		},
	]

})

const mapData = ref({
	title: "Приезжайте на наши <br/> выставочные площадки",
	zoom: "4",
	coords: [64.731901, 88.422488],
	regions: [
		{
			letter: "А",
			data: [
				{ name: "Алтайский край", zoom: "15", coords: [56.841506, 60.593128] },
				{
					name: "Архангельская область",
					zoom: "12",
					coords: [61.906169, 73.111711],
				},
				{
					name: "Астраханская область",
					zoom: "11",
					coords: [60.835356, 76.813008],
				},
			],
		},
		{
			letter: "С",
			data: [
				{
					name: "Саратовская область",
					zoom: "10",
					coords: [63.614624, 66.743304],
				},
				{
					name: "Сахалинская область",
					zoom: "9",
					coords: [62.679137, 84.542186],
				},
				{
					name: "Свердловская область",
					zoom: "5",
					coords: [56.609015, 60.510974],
				},
			],
		},
		{
			letter: "С",
			data: [
				{
					name: "Саратовская область",
					zoom: "10",
					coords: [63.614624, 66.743304],
				},
				{
					name: "Сахалинская область",
					zoom: "9",
					coords: [62.679137, 84.542186],
				},
				{
					name: "Свердловская область",
					zoom: "5",
					coords: [56.609015, 60.510974],
				},
			],
		},
		{
			letter: "С",
			data: [
				{
					name: "Саратовская область",
					zoom: "10",
					coords: [63.614624, 66.743304],
				},
				{
					name: "Сахалинская область",
					zoom: "9",
					coords: [62.679137, 84.542186],
				},
				{
					name: "Свердловская область",
					zoom: "5",
					coords: [56.609015, 60.510974],
				},
			],
		},
		{
			letter: "С",
			data: [
				{
					name: "Саратовская область",
					zoom: "10",
					coords: [63.614624, 66.743304],
				},
				{
					name: "Сахалинская область",
					zoom: "9",
					coords: [62.679137, 84.542186],
				},
				{
					name: "Свердловская область",
					zoom: "5",
					coords: [56.609015, 60.510974],
				},
			],
		},
		{
			letter: "С",
			data: [
				{
					name: "Саратовская область",
					zoom: "10",
					coords: [63.614624, 66.743304],
				},
				{
					name: "Сахалинская область",
					zoom: "9",
					coords: [62.679137, 84.542186],
				},
				{
					name: "Свердловская область",
					zoom: "5",
					coords: [56.609015, 60.510974],
				},
			],
		},
	],
	shops: {
		shopList: [
			{
				id: "1",
				coords: [56.841506, 60.593128],
				region: "Алтайский край",
				name: "Магазин «Новый&nbsp;дом»",
				address: "с. Нечаевка, ул. Рубежная 62",
				time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
				img: "/img/map/house1.jpg",
			},
			{
				id: "2",
				coords: [61.906169, 73.111711],
				region: "Алтайский край",
				name: "Название площадки",
				address: "г .Семилуки, Российская улица 6",
				time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
				img: "/img/map/house2.jpg",
			},
			{
				id: "3",
				coords: [60.835356, 76.813008],
				region: "Саратовская область",
				name: "Название площадки",
				address: "г. Семилуки, Российская улица 6",
				time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
				img: "/img/map/house3.jpg",
			},
			{
				id: "4",
				coords: [63.614624, 66.743304],
				region: "Сахалинская область",
				name: "Название площадки",
				address: "г.Семилуки, Российская улица 6",
				time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
				img: "/img/map/house4.jpg",
			},
			{
				id: "5",
				coords: [62.679137, 84.542186],
				region: "Свердловская область",
				name: "Магазин «Новый&nbsp;дом»",
				address: "с. Нечаевка, ул. Рубежная 62",
				time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
				img: "/img/map/house1.jpg",
			},
			{
				id: "6",
				coords: [58.065743, 65.736334],
				region: "Архангельская область",
				name: "Название площадки",
				address: "г.Семилуки, Российская улица 6",
				time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
				img: "/img/map/house2.jpg",
			},
			{
				id: "7",
				coords: [56.609015, 60.510974],
				region: "Астраханская область",
				name: "Название площадки",
				address: "г.Семилуки, Российская улица 6",
				time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
				img: "/img/map/house3.jpg",
			},
			{
				id: "8",
				coords: [57.950175, 56.102077],
				region: "Алтайский край",
				name: "Название площадки",
				address: "г.Семилуки, Российская улица 6",
				time: "Пн-Пт 10:00-20:00, Сб-Вс 10:00-22:00",
				img: "/img/map/house4.jpg",
			},
		],
	},
});

</script>


<style scoped>
.shadow {
	box-shadow: 0px 24px 48px 0px rgba(145, 158, 171, 0.24), 0px 0px 4px 0px rgba(145, 158, 171, 0.24);
}
</style>