import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCarComponent } from './create-car/create-car.component';

const carRoutes: Routes = [
      
    { path: 'create', component: CreateCarComponent}
   /* { path: 'create', component:  }
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
