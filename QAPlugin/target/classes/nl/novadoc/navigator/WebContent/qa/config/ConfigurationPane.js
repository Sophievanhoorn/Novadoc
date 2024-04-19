define([
	"dojo/_base/declare",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/widget/admin/PluginConfigurationPane",
	"dojo/text!./templates/ConfigurationPane.html"
],
function(declare, _TemplatedMixin, _WidgetsInTemplateMixin, PluginConfigurationPane, template) {
	return declare("qa.config.ConfigurationPane", [ PluginConfigurationPane, _TemplatedMixin, _WidgetsInTemplateMixin], {
		templateString: template,
		widgetsInTemplate: true,
		pluginProperties: [],
		
		load: function(callback) {
			if(this.configurationString){
				var jsonConfig = JSON.parse(this.configurationString);
				
				for(var index in this.pluginProperties) {
					var pluginProperty = this.pluginProperties[index];
					var config = jsonConfig.configuration[index];
					
					if(config) {
						this[pluginProperty].set('value', config.value);
					}
				}
			}			
		},
		
		_onParamChange: function() {
			var configArray = new Array();
			//configArray.push({name: "caseSearchConfig", value: this.caseSearchConfig.get('value')});

			var configJson = {"configuration" : configArray};
			this.configurationString = JSON.stringify(configJson);
			
			this.onSaveNeeded(true);
		},
		
		validate: function() {
			// if(!this.versionRules.isValid() || this.versionRules._isEmpty())
			// 	return false;
			
			return true;
		}
	});
});
