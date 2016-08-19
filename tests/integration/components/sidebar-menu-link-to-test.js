import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sidebar-menu-link-to', 'Integration | Component | sidebar menu link to', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sidebar-menu-link-to}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sidebar-menu-link-to}}
      template block text
    {{/sidebar-menu-link-to}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
