import { IrwanBootstrapPage } from './app.po';

describe('irwan-bootstrap App', function() {
  let page: IrwanBootstrapPage;

  beforeEach(() => {
    page = new IrwanBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
