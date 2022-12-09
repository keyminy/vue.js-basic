<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv">
				DIV 영역
				<p @click.self="clickP">
					P 영역
					<span @click="clickSpan">SPAN 영역</span>
					<a href="https://google.com" @click.prevent.stop="clickA">a영역</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = e => {
			console.log('clickSpan');
		};
		const clickA = () => {
			alert('어떤 기능~~');
		};
		return { clickDiv, clickP, clickSpan, clickA };
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>
