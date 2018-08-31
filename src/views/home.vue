<template>
	<div>
		<el-container style="height: 98vh; border: 1px solid #eee">
			<el-header style="font-size:16px;background-color: rgb(70,76,91);padding: 0 35px;">
				<p style="margin: 0;color: white;">五六点教育</p>
			</el-header>

			<el-container>
				<el-aside width="230px" style="border-right: 1px solid gainsboro;">
					<el-menu>
						<el-menu-item :index="menu.name" v-for="(menu,index) in menuList" v-if="!menu.children" :key="index">
							<span slot="title" @click="go(menu)">{{menu.menu}}</span>
						</el-menu-item>
						<el-submenu :index="menu.name" v-else>
							<template slot="title">
								<span>{{menu.menu}}</span>
							</template>
							<el-menu-item-group>
								<el-menu-item :index="child.name" v-for="(child,index) in menu.children" :key="index">{{child.menu}}</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view>
					</router-view>
				</el-main>
			</el-container>

			<!--<el-footer>Footer</el-footer>-->
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
//				menuList: [{
//					"menu": "课程管理",
//					"name": "1",
//					"children": [{
//						"menu": "服务管理",
//						"name": "1-1",
//						"url": "/"
//					}, {
//						"menu": "课程管理",
//						"name": "1-2",
//						"url": "/course"
//					}]
//				}, {
//					"menu": "用户管理",
//					"name": "2",
//					"url": "/userManage"
//				}, {
//					"menu": "学生管理",
//					"name": "3",
//					"url": "/studentManage"
//				}, {
//					"menu": "班级管理",
//					"name": "4",
//					"url": "/classManage"
//				}, {
//					"menu": "分校管理",
//					"name": "5",
//					"url": "/subSchoolManage"
//				}, {
//					"menu": "系统管理",
//					"name": "6",
//					"children": [{
//						"menu": "成员管理",
//						"name": "6-1",
//						"url": "/memberManage"
//					}, {
//						"menu": "角色管理",
//						"name": "6-2",
//						"url": "/roleManage"
//					}, {
//						"menu": "操作日志",
//						"name": "6-3",
//						"url": "/logManage"
//					}]
//				}, {
//					"menu": "信息统计",
//					"name": "7",
//					"url": "/countIndex"
//				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	
	.el-aside {
		color: #333;
	}
</style>