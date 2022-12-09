<template>
	<div></div>
</template>

<script>
import { watch, ref, reactive } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		//getter;
		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log(`sum of x + y is: ${sum}`);
		// 		console.log(`oldValue: ${oldValue}`);
		// 	},
		// );

		// watch([x, y], ([newX, newY]) => {
		// 	console.log('newX : ', newX);
		// 	console.log('newY : ', newY);
		// });

		watch(obj, (newVal, oldVal) => {
			console.log('newValue : ', newVal);
			console.log('oldVal : ', oldVal);
		});

		return { x, y, obj };
	},
};
</script>

<style lang="scss" scoped></style>
