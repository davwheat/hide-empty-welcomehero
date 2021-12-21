import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';

app.initializers.add('davwheat/hide-empty-welcomehero', () => {
  extend(WelcomeHero.prototype, 'oninit', function (this: WelcomeHero) {
    if (!app.forum.attribute('welcomeTitle')?.trim()) this.hidden = true;
  });
});
