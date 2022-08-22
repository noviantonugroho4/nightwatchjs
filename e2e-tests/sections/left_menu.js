const { LocateStrategy } = require("nightwatch/lib/element");

module.exports = {
    sections: {
      left_menu: {
        selector: '#app > div.oxd-layout > div.oxd-layout-navigation > aside',
          elements: {
            admin_btn: {
              selector: '//li[1]/a[contains(@class, "menu-item")]',
              locateStrategy: 'xpath'
            },
            pim_btn: {
              selector: '//li[2]/a[contains(@class, "menu-item")]'
            }
          }
      }
    }
  };