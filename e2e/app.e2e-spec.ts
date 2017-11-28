import { Ang2NewAppPage } from './app.po';

describe('ang2-new-app App', () => {
  let page: Ang2NewAppPage;

  beforeEach(() => {
    page = new Ang2NewAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
