import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guard.guard';



const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

  { path: '',
    loadChildren: () => import ('./landing/landing.module')
      .then(m => m.LandingModule)
  },
  { path: 'blog',
    canActivate: [AuthGuard],
    loadChildren: () => import ('./blog/blog.module')
      .then(m => m.BlogModule)
  },
  { path: 'login',
    loadChildren: () => import ('./auth/login/login.module')
      .then(m => m.LoginModule)
  },
  { path: 'register',
    loadChildren: () => import ('./auth/register/register.module')
      .then(m => m.RegisterModule)
  },
  { path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import ('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  { path: 'show/:postId',
    canActivate: [AuthGuard],
    loadChildren: () => import ('./show/show.module')
      .then(m => m.ShowModule)
  }
  // { path: 'edit/:postId', canActivate: [AuthGuard],
  //   loadChildren: () => import./blog/edit/edit.moduleule')
  //     .then(m => m.EditModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
