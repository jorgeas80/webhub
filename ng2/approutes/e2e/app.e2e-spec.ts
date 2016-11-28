import { ApproutesPage } from './app.po';

describe('approutes App', function() {
  let page: ApproutesPage;

  beforeEach(() => {
    page = new ApproutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
