define([
	"dojo/_base/declare",
	"ecm/model/Action",
	"ecm/model/Request",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/dialog/BaseDialog"
	//ecm.content.ContentDialog,
	//ecm.content.ContentDialogHelper,
	//ecm.widget.Button,
	//ecm.widget.CheckBox,
	//ecm.widget.FolderTree,
	//ecm.widget.MessageBar,
	//ecm.widget.PrintODPane,
	//ecm.widget.TextBox
], function(
	declare,
	Action,
	Request,
	ConfirmationDialog,
	MessageDialog,
	BaseDialog
) {
	return declare("qa.actions.OpenDialogAction", [Action], {
		performAction: function() {
			console.log("OpenDialogAction called");

			//Dialog properties
			var showActionBar = true;
			var title = "Q&A Dialog";
			var stringContent = "<div><h3>Title</h3><p>This is the dialog content.</p><button id='okButton'>OK</button><button id='cancelButton'>Cancel</button></div>"

			var dialogSize = {
				width: 500,
				height: 500
			};

			//creating the dialog
			var dialog = new BaseDialog({
				//expandable: false,
				lockFullscreen: true,
				showActionBar: showActionBar,
				setSizeToViewportRatio : true,
				title: title,
				message: stringContent
			});

			console.log(dialog);

			//setting the propperties
			//dialog.setSize(dialogSize.width, dialogSize.height);
			//dialog.setTitle(title);
			//dialog.showActionBar(showActionBar);
			//dialog.addButton();

			//			dialog.setMaximized(true);

			//			dialog._attachPoints[1].getValue();

			console.log(dialog);
			//Open the dialog
			dialog.show();

			//			dialog.buildRendering(stringContent);
			//			dialog.show();
		}
	});
});