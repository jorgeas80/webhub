import { appgooglebooksPage } from './app.po';

describe('appgooglebooks App', function() {
  let page: appgooglebooksPage;

  beforeEach(() => {
    page = new appgooglebooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
