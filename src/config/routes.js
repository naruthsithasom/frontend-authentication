import TodoPage from '../components/pages/Index'
import LoginPage from '../components/pages/Login'
import ProfilePage from '../components/pages/Profile' 
import RegisterPage from '../components/pages/Register'

const components= { 
  todo: {
    url: '/todo',
    component: TodoPage
  },
  login: {
    url: '/LoginPage',
    component: LoginPage
  },
  profile: {
    url: '/profile',
    component: ProfilePage
  },
  register: {
    url: '/register',
    component: RegisterPage
  }
}
// Role ไหนเข้าหน้าไหนได้บ้าง=
export default {
  gest: {
    allowedRoutes:[
      component.login,
      component.register
    ],
    redirectRoutes:'/login'
  },
  user: {
    allowedRoutes:[
      component.todo,
      component.profile,
    ],
    redirectRoutes:'/profile'
  }

}