<template>
	<div v-if="musicas.length == 0">
		<h1>Carregando...</h1>
	</div>
	<div v-else>
		<h1>{{musicas[index]}}</h1>
		<audio controls autoplay @ended="next" :src="`https://raw.githubusercontent.com/Daeronic/Cornotify/master/mp3/${musicas[index]}`"></audio>
		<br>
		<button :disabled="index == 0" @click="prev">&lt;</button>
		<button :disabled="index == musicas.length - 1" @click="next">&gt;</button>
		<ul>
			<li v-for="(musica, i) in musicas" :key="i"><a href="#" @click="index = i">{{musica}}</a></li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return {
			index: 0,
			musicas: []
		}
	},
	mounted(){
		axios.get('https://api.github.com/repos/Daeronic/Cornotify/git/trees/ba26e8a4cd1a62fc5c06a12715c308209d137f05').then(res => {
			this.musicas = res.data.tree.filter(item => item.type == 'blob').map(item => item.path)
		}).catch(() => {
			alert('Erro ao carregar as músicas!')
		})
	},
	methods: {
		prev(){
			if(this.index > 0){
				this.index--
			}
		},
		next(){
			if(this.index < this.musicas.length - 1){
				this.index++
			}
		}
	}
}
</script>