import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const carRoutes: Routes = [
    /* TO DO ALL ROUTES
    { path: 'create', component: }
    { path: 'create', component:  }
    { path: 'create', component:  }
    { path: 'create', component:  }
    { path: 'create', component:  }
    { path: 'create', component:  }
    { path: 'create', component:  }
    { path: 'create', component:  }
    { path: 'create', component:  }
    { path: 'create', component:  } */
]

@NgModule({
    imports: [RouterModule.forChild(carRoutes)],
    exports: [RouterModule]
})
export class CarRoutingModule {}
