import {HeroesComponent} from './component/heroes/heroes.component'
import {DashboardComponent} from './component/dashboard/dashboard.component'

export const ROUTER: any = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
]
