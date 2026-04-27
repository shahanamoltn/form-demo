
define(
	'JJ.Form.Form'
,   [
		'contactFormModule.Router',
  'MyAccountMenu',
  'Utils'
	]
,   function  (ContactFormRouter, MyAccountMenu,Utils) 
{
	'use strict';

	return  {
		 mountToApp: function (container) {
      var myAccountMenu = container.getComponent("MyAccountMenu");
      var contactGroup = {
        id: "contact_group",
        name: "Contact",
        index: 10,
      };
      if (myAccountMenu) {
        myAccountMenu.addGroup(contactGroup);

        var contactEntry = {
          id: "contact_form",
          groupid: "contact_group",
          name: "Contact Form",
          url: "contact",
          index: 1,
        };

        myAccountMenu.addGroupEntry(contactEntry);
      }
      console.log(Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/Form/SuiteScript2/Form.Service.ss"
            ),
            true
        ))
      // 🔹 Initialize Router
      return new ContactFormRouter({
        application: container,
      });
    },
  };
});
