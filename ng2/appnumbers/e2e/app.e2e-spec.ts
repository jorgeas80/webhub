import { appnumbersPage } from './app.po';

describe('appnumbers App', function() {
  let page: appnumbersPage;

  beforeEach(() => {
    page = new appnumbersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
