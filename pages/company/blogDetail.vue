<template>
	<div>
		<HeaderContainer :title="blogTitle" :classString="'text-6xl sm:text-9xl pt-24'" />
		<section class="">
			<div class="container">
				<SectionDetailBlog :detailData="deatilData" />
				<SectionOtherArticles :otherArticles="otherArticles"/>
			</div>
		</section>
		<SectionChoose :data="choose" />
	</div>
</template>

<script setup lang="ts">
import HeaderContainer from "~/components/Ui/HeaderContainer.vue";
import SectionDetailBlog from "~/components/Section/SectionDetailBlog.vue";
import SectionOtherArticles from "~/components/Section/SectionOtherArticles.vue";
import { ref } from "vue";

let blogTitle = ref<string>("Выбираем идеальную купель для бани")

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

interface DetailBlogDescriptionPath {
	title: string;
	text: string;
	addedClass: string;
	images?: string[];
}

interface DetailBlogData {
	descriptionPath: DetailBlogDescriptionPath[];
}

const deatilData = ref<DetailBlogData>({
	descriptionPath: [
		{
			title: `Введение`,
			text: `<span class="text-[18px] xl:text-[24px] leading-[21px] xl:leading-[31px]">Подробный гайд по выбору купели для бани для новичков — рассказываю о собственном опыте владения
							деревянной купелью.
							<br />
							<br />
							У нас в городе наконец-то наступили крепкие холода. Самое милое дело: затопить купель для бани и
							поплескаться в тёплой водичке, когда на улице минус 15 градусов. Ощущения незабываемые.</span>
							<br />
							<br />
							<img class="w-full" src="/img/blog-detail/1.png" alt="">
							<br />
							<span class="text-[16px] xl:text-[18px] leading-[19px] xl:leading-[21px]">Если вы раздумываете, нужна ли вам на участке купель с подогревом, то эту
								статью я пишу именно для вас. Расскажу про свой опыт использования деревянной купели из
								кедра на даче и поделюсь рекомендациями по выбору лучшей модели.</span>`,
			addedClass: "text-4xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]"
		},
		{
			title: `Какая купель лучше деревянная или пластиковая и почему?`,
			text: `<div class="text-[28px] xl:text-[64px] lg:text-[46px] leading-[31px] xl:leading-[64px] lg:leading-[50px] font-medium pb-16">Купель из пластика или дерева:<br /> плюсы и минусы
							</div>
							<span class="text-[16px] xl:text-[18px] leading-[19px] xl:leading-[21px]"> Конечно, в плане эксплуатации композитная купель выигрывает: надёжная, долговечная, не гниёт, не
							протекает, да и стоит существенно дешевле — цены начинаются от 25000 рублей. Из минусов: внешний
							вид страдает, нет того неповторимого ощущения живого дерева. Пластик он и есть
							пластик.Преимущества купелей из древесины кедра, лиственницы или дуба очевидны: красота,
							эстетика, экологичность. Некоторые пишут о каких-то таинственных фитонцидах, но в этом я не
							уверен. Немаловажный плюс живого дерева — это приятный смолистый аромат. Но и минусы
							существенны: они более требовательны к уходу, рассыхаются без воды, могут подтекать. Ну и цены,
							сами понимаете, не маленькие — у нас <a href="#" style="color:#009767;text-decoration:underline"> такую </a> можно купить за 100000 рублей.
							<br />
							<br />
							Для себя я, конечно, однозначно сделал выбор в пользу деревянной модели. Я работаю с деревом,
							люблю запах, текстуру деревянных изделий и ни за что не променяю его на пластик. Но если
							оценивать рационально, то имеет смысл совместить: пластиковую ёмкость сделать вставкой в
							деревянную обкладку. Скамеечки, трапик также поставить деревянные. Цены неплохие модели
							начинаются от 70000 рублей.</span>`,
			addedClass: "text-3xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]"
		},
		{
			title: `Какую печь для купели выбрать — внешнюю или погружную?`,
			text: `<div class="text-[28px] xl:text-[64px] lg:text-[46px] leading-[31px] xl:leading-[64px] lg:leading-[50px] font-medium pb-16">Какую печь для купели выбрать — внешнюю или погружную?
							</div>
							<span class="text-[16px] xl:text-[18px] leading-[19px] xl:leading-[21px]">Я пользовался купелями как с внешней («Офуро»), так и внутренней печью («ПечЪнов») . Конечно,
							внешняя печь лучше и удобнее. Сохраняется больше места, дрова закладывать удобнее, не нужно
							придумывать защитный короб в самой ёмкости.
							<br />
							<br />
							Это моя купель с наружной печкой:</span>
							<br />
							<br />
							<img class="pb-16" src="/img/blog-detail/2.png" alt="">
							<div class="text-[16px] xl:text-[18px] leading-[19px] xl:leading-[21px]">И для сравнения печь, размещённая внутри:</div>
							<br />
							<br />
							<img class="pb-16" src="/img/blog-detail/3.png" alt="">
							<span class="text-[16px] xl:text-[18px] leading-[19px] xl:leading-[21px]">По времени топить одинаково: наша стандартная конусовидная купель объёмом около 2300 л
							нагревается примерно 3 часа при окружающей температуре -15 градусов. Летом нагрев сокращается до
							1,5 часов.</span>`,
			addedClass: "text-3xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]"
		},
		{
			title: `Какая купель лучше: кедр, дуб или лиственница?`,
			text: `<div class="text-[28px] xl:text-[64px] lg:text-[46px] leading-[31px] xl:leading-[64px] lg:leading-[50px] font-medium pb-16">Какую купель для бани выбрать: из кедра, лиственницы или
								дуба?</div>
							<b class="text-[18px] xl:text-[20px] leading-[22px] xl:leading-[26px]">Тут, смотрите, какая ситуация. У каждой древесины есть свои преимущества:</b>
							<ul class="text-[16px] xl:text-[18px] leading-[19px] xl:leading-[21px] py-16 pl-8 pb-0">
								<li class="list-disc pb-16">
									Лиственница меньше подвержена гниению и рассыханию (слышал байки, что Санкт-Петербург и
									Венеция до сих пор частично стоят на столбах из лиственницы);
								</li>
								<li class="list-disc pb-16">
									Кедр из этих деревьев самый ароматный. К тому же обладает очень красивым розоватым
									оттенком. Но сучковатый. Ещё в преимуществах часто упоминают выделения масел, но я в это
									вообще не верю. Через 2-3 года постоянного использования вряд ли там ещё что-то
									выделяется. </li>
								<li class="list-disc">
									У дуба самая высокая плотность, а значит дубовая купель меньше подвержена усыханию и
									разбуханию. Это, конечно, очень хорошо. Но и цена соответствует. </li>
							</ul>`,
			addedClass: "text-3xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]"
		},
		{
			title: `Какая температура воды нужна для купания зимой?`,
			text: `<div class="text-[28px] xl:text-[64px] lg:text-[46px] leading-[31px] xl:leading-[64px] lg:leading-[50px] font-medium pb-16">До какой температуры нужно греть воду в купели зимой?
							</div>
							<div class="text-[18px] xl:text-[20px] leading-[22px] xl:leading-[26px]"> И зимой, и летом воду необходимо греть ровно до 39 градусов Цельсия — ни больше, ни меньше.
							Перегреете даже на 1 градус — и уже будет жарко. Это я вам по своему опыту говорю.</div>
							<div class="pt-16 videoBlockBlog relative">
								<iframe class="absolute" width="100%" height="98%" src="https://www.youtube.com/embed/7PIji8OubXU"
									title="YouTube video player" frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen></iframe>
							</div>`,
			addedClass: "text-3xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]"
		},
		{
			title: `Как долго остывает?`,
			text: `<div class="bg-[url('/img/blog-detail/bg.png')] bg-[#F5F5F5] py-10 px-16">
								<div class="text-4xl text-[#009767] font-medium pb-8">
									Внимание! Если вода нагрелась до высоких температур, исправить это можно лишь доливанием
									холодной.
								</div>
								<div class="flex gap-6">
									<div style="width:16px;height:21px">
									<svg width="20" height="21" viewBox="0 0 20 21" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M2 4.5625L2 6.5625C2 8.77164 3.79086 10.5625 6 10.5625L17 10.5625"
											stroke="#838383" />
										<path d="M12 5.5625L17 10.5625L12 15.5625" stroke="#838383" />
									</svg>
									</div>
									<div class="text-[#838383]">
										Чтобы избежать перегрева воды, нужно перемешивать воду в купели во время нагревания,
										так как верхние слои воды всегда горячие, нижние — холодные.
									</div>
								</div>
							</div>`,
			addedClass: "text-3xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]"
		},
		{
			title: `Как часто нужно менять воду в
									деревянной купели?`,
			text: `<div class="text-[28px] xl:text-[64px] lg:text-[46px] leading-[31px] xl:leading-[64px] lg:leading-[50px] font-medium pb-16">Как часто нужно менять воду?</div>
							<div class="text-[18px] xl:text-[20px] leading-[22px] xl:leading-[26px]"> Конечно, воду нужно менять после каждого купания. Потому что на утро на поверхности вы увидите
							всякие волосинки, ошмётки кожи, ворсинки с войлочной шапочки и прочие лохмотья.
							<br />
							<br />
							Моя купель наполняется примерно за 2 часа.</div>`,
			addedClass: "text-3xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]"
		},
		{
			title: `Можно ли топить углём?`,
			text: `<div class="text-[28px] xl:text-[64px] lg:text-[46px] leading-[31px] xl:leading-[64px] lg:leading-[50px] font-medium pb-16">Можно ли топить печь для купели углём?</div>
							Честно говоря, о таком не слышал. Знаю, что есть газовые печи. В принципе, наверное, можно и
							углём попробовать. Если у вас есть такой опыт — поделитесь со мной в комментариях, пожалуйста.`,
			addedClass: "text-3xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]"
		},
		{
			title: `Нужен ли фундамент для купели на
									даче?`,
			text: `<div class="text-[28px] xl:text-[64px] lg:text-[46px] leading-[31px] xl:leading-[64px] lg:leading-[50px] font-medium pb-16">Какой фундамент нужен под купель?</div>
							Безусловно, фундамент нужен и желательно свайно-винтовой, чтобы купель не гуляла, не шевелилась.
							Тогда и течи будут появляться реже. Допустимо также устанавливать купель на крепкое ровное
							основание — например, на бетонную плиту или асфальтовую площадку. А вот ставить купель на
							фундаментные блоки или прямо на землю — ну нет, это несерьёзно.
							<br />
							<br />
							Когда мы делаем бани со встроенной купелью на террасе, то обязательно дополнительно
							устанавливаем 4 винтовые сваи. Смотрите, какая красота:
							<div class="text-6xl font-medium pt-16 pb-16 mt-[80px]">Стабильность и прочность</div>
							Твёрдость и ровность – это два требования к фундаменту бани-купели. Прочность фундамента
							необходима, чтобы выдерживать немалый вес бани-купели, воды и людей, находящихся внутри.
							Ровность поверхности необходимо обеспечить уровнем, чтобы вода была на одной высоте относительно
							краёв ванны. Устройство фундамента не означает обязательное использование дорогих материалов,
							что приведёт к излишнему удорожанию этой работы. Есть множество различных материалов, которые
							позволят построить основу для бани-купели с учётом всех требований по надёжности, прочности и
							эстетике.
							<div class="text-6xl font-medium pt-16 pb-16 mt-[80px]">Следует подумать о циркуляции воздуха под купелью
							</div>
							Желательно устанавливать баню-купель на небольшой высоте над покрытием, с зазором. Это позволит
							влаге не скапливаться под днищем устройства. Зазор нужен вне зависимости от того, будет баня
							установлена в тени или на солнце. Вместных климатических условиях велик риск того, что под
							купелью может образоваться грибок или плесень. Однако, благодаря стекловолокну, из которого
							изготовлены наши купели, ничего страшного не произойдёт и от плесени и грибка достаточно легко
							избавиться. Поэтому зазор под купелью – лишь рекомендация.`,
			addedClass: "text-3xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]",
			images: [
				"/img/blog-detail/4.png",
				"/img/blog-detail/5.png",
				"/img/blog-detail/6.png"
			]
		},
		{
			title: `Как ухаживать за деревянной
									купелью?`,
			text: `<div class="text-[28px] xl:text-[64px] lg:text-[46px] leading-[31px] xl:leading-[64px] lg:leading-[50px] font-medium pb-16">Как ухаживать за деревянной купелью?</div>
							Моей дачной купели из лиственницы уже 2 года. Каждый год я изнутри прохожу шлейфмашинкой и
							немножко наждачкой: убираю всякие ворсинки. Ничем не крашу ни снаружи, ни внутри. Меня
							устраивает обычная лиственница.
							<br />
							<br />
							Но если натереть каким-нибудь специальным маслом, то срок службы и внешний вид сохранятся
							дольше. Но через год всё равно придётся ей снова марафетить. Но через несколько лет — красьте-не
							красьте, — дерево неизбежно потеряет свой вид. Это природа, это нормально.
							<br />
							<br />
							Летом без воды купель рассыхается, если несколько месяцев держать её пустой. Поэтому
							рекомендуется время от времени поливать её из шланга или оставить на недельку с водой. Если
							держать полной дольше, то может заплесневеть изнутри.
							<br />
							<br />
							Рекомендую приобрести крышку или тент — так летом вода дольше остаётся чистой, а зимой будет
							надёжная защита от снега.`,
			addedClass: "text-3xl xl:pb-[80px] xl:mt-[80px] lg:pb-[120px] lg:mt-[120px] pb-[60px] mt-[60px]"
		}
	]
})


interface OtherArticlesItem {
	title: string;
	url: string;
	img: string;
}

let otherArticles = ref<OtherArticlesItem[]>([
	{
		title: "Модульные дома: просторный и удобный дом за короткий срок",
		url: "/company/blogDetail",
		img: "/img/blog-detail/10.png"
	},
	{
		title: "Модульные дома: новый тренд в жилищном строительстве",
		url: "/company/blogDetail",
		img: "/img/blog-detail/9.png"
	},
	{
		title: "7 мифов о домах А-фрейм",
		url: "/company/blogDetail",
		img: "/img/blog-detail/8.png"
	},
	{
		title: "5 лучших печей для бани",
		url: "/company/blogDetail",
		img: "/img/blog-detail/7.png"
	},
])

</script>

<style scoped>
</style>