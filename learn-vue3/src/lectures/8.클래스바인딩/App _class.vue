<template>
	<div>
		<div class="text" :class="[activeClass, errorClass]">텍스트 입니다.</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);
		//const classObject = reactive({ active: true, 'text-danger': true });
		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value; //토글기능
		};
		return { isActive, toggle, hasError, classObject, activeClass, errorClass };
	},
};
</script>

<style>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
