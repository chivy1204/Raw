// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';

describe('Raw App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: Raw', async () => {
    await page.navigateTo();
    expect(await page.getAppTitle()).toEqual('Raw');
  });
});
