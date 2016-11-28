import { AppseriesPage } from './app.po';

describe('appseries App', function() {
  let page: AppseriesPage;

  beforeEach(() => {
    page = new AppseriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
