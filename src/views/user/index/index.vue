<template>
  <div>
	  <mt-header title="个人资料" class='header' v-bind:fixed='true'>
		  <mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
	  <mt-cell title="姓名" to="/user/name" is-link v-bind:value="user.name">
		</mt-cell>
		<section v-on:click='genderVisible = true'>
		  <mt-cell title="性别" is-link v-bind:value="user.gender"></mt-cell>
		</section>
		<section v-on:click='openPicker'>
		  <mt-cell title="生日" is-link v-bind:value="birthdayFormat"></mt-cell>
		</section>
		<mt-cell title="地址" to="/user/address" is-link v-bind:value="user.area + user.street">
		</mt-cell>
		<mt-cell title="手机号" v-bind:to="user.phone == '' ? '/user/phone1' : '/user/phone'" is-link v-bind:value="user.phone">
		</mt-cell>
		<mt-popup v-model="genderVisible" position="bottom" class='w-100'>
			<mt-radio v-model="user.gender" v-bind:options="['男', '女']"></mt-radio>
		</mt-popup>
		<mt-datetime-picker ref="picker" type="date" v-bind:startDate='startDate' v-on:confirm='update' v-model='user.birthday' v-bind:value='user.birthday'></mt-datetime-picker>
	</div>
</template>

<style lang='sass' scoped>
@import './index.scss'
</style>

<script src='./index.js'></script>