import Home from '../views/Home'
import Login from '../views/Login'
import TeachersManagement from '../views/Home/TeachersManagement'
import ActivityManagement from '../views/Home/ActivityManagement'
import SchoolOrganizationManagement from '../views/Home/SchoolOrganizationManagement'
import UserAccountManagement from '../views/Home/UserAccountManagement'
import ExaminationManagement from '../views/Home/ExaminationManagement'
import StudentCadreManagement from '../views/Home/StudentCadreManagement'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'teachers-management',
        name: 'teachers-management',
        component: TeachersManagement
      },
      {
        path: 'activity-management',
        name: 'activity-management',
        component: ActivityManagement
      },
      {
        path: 'schoolOrganization-management',
        name: 'schoolOrganization-management',
        component: SchoolOrganizationManagement
      },
      {
        path: 'userAccount-management',
        name: 'userAccount-management',
        component: UserAccountManagement
      },
      {
        path: 'examination-management',
        name: 'examination-management',
        component: ExaminationManagement
      },
      {
        path: 'studentCadre-management',
        name: 'studentCadre-management',
        component: StudentCadreManagement
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
export default routes
