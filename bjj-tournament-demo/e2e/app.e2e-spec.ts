import { BjjTournamentDemoPage } from './app.po';

describe('bjj-tournament-demo App', function() {
  let page: BjjTournamentDemoPage;

  beforeEach(() => {
    page = new BjjTournamentDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
