<template>
	<form id="todo-form" @submit="addMemo">
		<label>
			<span>Text:</span>
			<textarea name="text" v-model="text" required></textarea>
		</label>

		<button type="submit">Create</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			text: '',
			increment: 1
		}
	},
	methods: {
		addMemo(e) {
			e.preventDefault()

			this.$store.commit('PUSH_MEMO', {
				id: this.increment,
				text: this.text,
				isDone: false
			})

			this.text = ''
			this.increment++
		}
	}
}
</script>

<style scoped>
#todo-form {
	display: flex;
	flex-direction: column;
	margin-bottom: 2em;
}
#todo-form label {
	display: flex;
	flex-direction: column;
}
</style>