import { appfilterPage } from './app.po';

describe('appfilter App', function() {
  let page: appfilterPage;

  beforeEach(() => {
    page = new appfilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
