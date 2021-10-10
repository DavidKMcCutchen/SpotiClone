import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECT_ENVIRONMENT } from './project.token';
import { ProjectEnvironment } from "./project.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: ProjectEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: PROJECT_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
