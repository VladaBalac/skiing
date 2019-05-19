import { SkiingModule } from './skiing.module';

describe('SkiingModule', () => {
  let skiingModule: SkiingModule;

  beforeEach(() => {
    skiingModule = new SkiingModule();
  });

  it('should create an instance', () => {
    expect(skiingModule).toBeTruthy();
  });
});
