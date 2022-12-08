<template>
	<div>
		<div :style="styleCompObj">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae ad.
			Exercitationem porro aspernatur velit iure adipisci id quos aut labore
			placeat sunt esse delectus iste accusantium, expedita dolor animi.
		</div>
		<button @click="fontSize++">+</button>
		<button @click="fontSize--">-</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const styleObj = reactive({
			color: 'red',
			fontSize: '13px',
		});
		const fontSize = ref(13);
		const styleCompObj = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObj, styleCompObj, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
