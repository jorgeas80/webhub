import { appformPage } from './app.po';

describe('appform App', function() {
  let page: appformPage;

  beforeEach(() => {
    page = new appformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
