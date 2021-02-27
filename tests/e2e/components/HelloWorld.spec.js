import { mount } from '@cypress/vue';
import HelloWorld from '@/components/HelloWorld';

// Example for Vue
describe('HelloWorld', () => {
  it('renders the slot name passed in', () => {
    mount(UIButton, {
      slots: {
        default: 'Button name'
      }
    });

    cy.get('.ui-button').should('contain', 'Button name');
  });
});
