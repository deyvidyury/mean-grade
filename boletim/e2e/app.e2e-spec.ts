import { BoletimPage } from './app.po';

describe('boletim App', () => {
  let page: BoletimPage;

  beforeEach(() => {
    page = new BoletimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
