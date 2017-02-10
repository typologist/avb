import { AvailaballPage } from './app.po';

describe('availaball App', function() {
  let page: AvailaballPage;

  beforeEach(() => {
    page = new AvailaballPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
