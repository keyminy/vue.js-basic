<template>
	<div class="card">
		<img src="" class="card-img-top" alt="..." />
		<div class="card-body">
			<!--type : new, notice -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn" :class="isLikeClass">좋아요</a>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	props: {
		type: {
			type: String,
			default: 'news',
			validator: val => {
				return ['news', 'notice'].includes(val);
			},
		},
		title: {
			type: String,
			required: true, //필수속성
		},
		contents: {
			type: String,
			//required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		//기본값 반환하는 factory함수 선언
		obj: {
			type: Object,
			default: function () {
				return {};
			},
		},
	},
	setup(props) {
		//console.log('props.title : ', props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() => {
			return props.type === 'news' ? '뉴스' : '공지사항';
		});
		return { isLikeClass, typeName };
	},
};
</script>

<style scoped></style>
