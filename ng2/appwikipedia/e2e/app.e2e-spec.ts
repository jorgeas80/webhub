import { appwikipediaPage } from './app.po';

describe('appwikipedia App', function() {
  let page: appwikipediaPage;

  beforeEach(() => {
    page = new appwikipediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
