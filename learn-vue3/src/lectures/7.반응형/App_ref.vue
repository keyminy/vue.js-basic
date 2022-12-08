<template>
	<div>
		<p>{{ message }}</p>
		<button @click="addMessage">add Click</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		let message = ref('Hello Vue');
		const addMessage = () => {
			message.value += '!';
		};
		console.log('message : ', message);
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
