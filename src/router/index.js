import Vue from 'vue'
import Router from 'vue-router'
import Auther from '@/views/auth/index.vue'
import Index from '@/views/index/index.vue'
import User from '@/views/user/index/index.vue'
import UserName from '@/views/user/name/index.vue'
import UserPhone from '@/views/user/phone/step0/index.vue'
import UserPhone1 from '@/views/user/phone/step1/index.vue'
import UserAddress from '@/views/user/address/index.vue'
import Consumption from '@/views/consumption/index.vue'
import Integral from '@/views/integral/index.vue'
import Shop from '@/views/shop/index.vue'
import Reserve from '@/views/reserve/index/index.vue'
import ReserveMine from '@/views/reserve/mine/index.vue'
import ReserveShow from '@/views/reserve/show/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/auth/:comId/:appId/:pageId',
      name: 'auth',
      component: Auther
		},
    {
      path: '/index/:openid',
      name: 'index',
      component: Index
    },
		{
      path: '/user',
      name: 'user',
      component: User
    },
		{
      path: '/user/name',
      name: 'userName',
      component: UserName
    },
		{
      path: '/user/phone',
      name: 'userPhone',
      component: UserPhone
    },
		{
      path: '/user/phone1/:openid',
      name: 'userPhone1',
      component: UserPhone1
    },
		{
      path: '/user/address',
      name: 'userAddress',
      component: UserAddress
    },
		{
      path: '/consumption',
      name: 'consumption',
      component: Consumption
    },
		{
			path: '/integral',
			name: 'integral',
			component: Integral
		},
		{
			path: '/shop/:openid',
			name: 'shop',
			component: Shop
		},
		{
			path: '/reserve/show/:id',
			name: 'reserveShow',
			component: ReserveShow
		},
		{
			path: '/reserve/:openid/:id',
			name: 'reserve',
			component: Reserve
		},
		{
			path: '/reserve/mine',
			name: 'reserveMine',
			component: ReserveMine
		},
		
  ]
})
