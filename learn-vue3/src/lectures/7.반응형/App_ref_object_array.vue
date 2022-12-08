<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr[0] : ', arr[0].value);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
