import Home from '../views/Home'
import Login from '../views/Login'
import RolesManagement from '../views/Home/RolesManagement'
import CategoriesManagement from '../views/Home/CategoriesManagement'
import OrganizationsManagement from '../views/Home/OrganizationsManagement'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: {
      name: 'roles-management'
    },
    children: [
      {
        path: 'roles-management',
        name: 'roles-management',
        component: RolesManagement
      },
      {
        path: 'categories-management',
        name: 'categories-management',
        component: CategoriesManagement
      },
      {
        path: 'organization-management',
        name: 'organization-management',
        component: OrganizationsManagement
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    redirect: {
      name: 'roles-management'
    }
  }
]
export default routes
