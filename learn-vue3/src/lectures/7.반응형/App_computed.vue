<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까??</h3>
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button @click="counter++">Counter : {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		});

		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		};

		const counter = ref(0);

		/* computed에 getter와 setter만들기 */
		const firstName = ref('홍');
		const lastName = ref('길동');
		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				/*구조분해 할당 */
				[firstName.value, lastName.value] = value.split(' ');
			},
		});
		console.log('Console 출력 : ', fullName.value);
		/* setter실행 */
		fullName.value = '짐 코딩';
		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
