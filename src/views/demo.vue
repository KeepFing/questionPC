<template>
	<div>
		<el-form ref="form" label-width="80px">
		  <el-form-item label="标题">
		    <el-input v-model="questionTitle"></el-input>
		  </el-form-item>
		  <el-form-item label="anwserA">
		    <el-input v-model="anwserA"></el-input>
		  </el-form-item>
		  <el-form-item label="anwserB">
		    <el-input v-model="anwserB"></el-input>
		  </el-form-item>
		  <el-form-item label="anwserC">
		    <el-input v-model="anwserC"></el-input>
		  </el-form-item>
		  <el-form-item label="anwserD">
		    <el-input v-model="anwserD"></el-input>
		  </el-form-item>
		  <el-form-item label="anwser">
		    <el-select v-model="anwser" placeholder="" @change="changeAnwser($event)">
		      <el-option :label="anw.label" :value="anw.label" v-for="(anw,index) in anwserItem" :key="index"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="解析">
		    <el-input v-model="resovel"></el-input>
		  </el-form-item>
		   <el-form-item label="pointId">
		    <el-select v-model="pointId" placeholder="" @change="change($event)">
		      <el-option :label="point.point_name" :value="point.point_id" v-for="(point,index) in points" :key="index"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm()">立即创建</el-button>
		    <el-button @click="resetForm('ruleForm')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				points:[],
				questionTitle:'',
				anwserA:'',
				anwserB:'',
				anwserC:'',
				anwserD:'',
				anwser:'',
				resovel:'',
				pointId:'',
				anwserItem:[{label:'A'},{label:'B'},{label:'C'},{label:'D'}]
			}
		},
		mounted(){
			this.getData()
		},
		methods:{
			change(e){
				this.pointId = e
			},
			changeAnwser(e){
				this.anwser = e
			},
			submitForm(){
				var str = ""
				str = "[{'title':'A:"+this.anwserA+"','value':'A'},{'title':'B:"+this.anwserB
					+"','value':'B'},{'title':'C:"+this.anwserC+"','value':'C'},{'title':'D:"+this.anwserD+"','value':'D'}]"
				this.axios({
					method:'post',
					url:'http://localhost:3000/api/subject/saveQuestion',
					data:{
						"questionTitle":this.questionTitle,
						"anwserItem":str,
						"anwser":this.anwser,
						"resovel":this.resovel,
						"pointId":this.pointId
					}
				}).then(res=>{
					if (res.data.code == 0) {
						this.questionTitle = '',
						this.anwserA = '',
						this.anwserB = '',
						this.anwserC = '',
						this.anwserD = '',
						this.anwser = '',
						this.resovel = '',
						
						this.$notify({
				          title: '成功',
				          message: '保存成功',
				          type: 'success'
				        });
					}
				})
			},
			getData(){
				this.axios({
					method:'post',
					url:'http://localhost:3000/api/subject/getPoints',
					data:{
						subjectId:'4'
					}
				}).then(res=>{
					this.points = res.data.data
				})
			}
		}
	}
</script>

<style>
</style>