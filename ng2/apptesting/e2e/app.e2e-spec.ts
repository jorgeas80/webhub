import { Ejer12Page } from './app.po';

describe('ejer12 App', function() {
  let page: Ejer12Page;

  beforeEach(() => {
    page = new Ejer12Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Test Tour of Heroes');
  });
});
