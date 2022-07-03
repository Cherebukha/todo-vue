<template>
	<div :class="`todo-item` + (todo.isDone ? ` done` : ``)" @click="switchDoneStatus(todo.id)">
		<p>{{ todo.text }}</p>
	</div>
</template>

<script>
export default {
	props: {
		todo: {
			text: String,
			isDone: Boolean
		}
	},
	methods: {
		switchDoneStatus(id) {
			this.$store.commit('SWITCH_MEMO_DONE_STATUS', id);
		}
	}
}
</script>

<style scoped>
.todo-item {
	position: relative;
	width: 100%;
	margin-bottom: 0.5em;
	padding: 0.4em 0 0.4em 1em;
	text-align: left;
}
.todo-item:before {
	position: absolute;
	content: '';
	top: 0;
	left: 0;
	width: 0.4em;
	height: 100%;
	background-color: yellow;	
}
.todo-item.done:before {
	background-color: green;
}
</style>