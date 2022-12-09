<template>
	<div>
		<ul>
			<template v-for="(item, idx) in evenItems" :key="item.in">
				<li>ID : {{ item.id }}, 인덱스 : {{ idx }},아이템 : {{ item.msg }}</li>
			</template>
		</ul>
		<hr />
		<ul>
			<li v-for="(val, key, idx) in myObj" :key="key">
				{{ idx }}-{{ key }}-{{ val }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, msg: 'Java' },
			{ id: 2, msg: 'HTML' },
			{ id: 3, msg: 'CSS' },
			{ id: 4, msg: 'JS' },
		]);
		const evenItems = computed(() => {
			return items.filter(item => item.id % 2 === 0);
		});
		const myObj = reactive({
			title: '제목',
			author: '홍길동',
			pubDate: '2016-01-01',
		});
		return {
			items,
			evenItems,
			myObj,
		};
	},
};
</script>

<style lang="scss" scoped></style>
