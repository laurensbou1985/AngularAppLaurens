import { AngularAppLaurensPage } from './app.po';

describe('angular-app-laurens App', function() {
  let page: AngularAppLaurensPage;

  beforeEach(() => {
    page = new AngularAppLaurensPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
