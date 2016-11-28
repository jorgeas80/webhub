import { appusereventsPage } from './app.po';

describe('appuserevents App', function() {
  let page: appusereventsPage;

  beforeEach(() => {
    page = new appusereventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
