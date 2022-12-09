<template>
	<div>
		<input type="text" @keyup.enter="addTodo" />
		<ul>
			<li v-for="(todo, idx) in todos" :key="idx">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);

		const addTodo = event => {
			/* Enter를 입력할 때만 입력되게 */
			todos.push(event.target.value);
			//enter후 값 비워주기
			event.target.value = '';
			event.target.focus(); //focus주기
		};

		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
