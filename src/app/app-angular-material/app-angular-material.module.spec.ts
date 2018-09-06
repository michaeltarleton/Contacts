import { AppAngularMaterialModule } from './app-angular-material.module';

describe('AppAngularMaterialModule', () => {
  let appAngularMaterialModule: AppAngularMaterialModule;

  beforeEach(() => {
    appAngularMaterialModule = new AppAngularMaterialModule();
  });

  it('should create an instance', () => {
    expect(appAngularMaterialModule).toBeTruthy();
  });
});
