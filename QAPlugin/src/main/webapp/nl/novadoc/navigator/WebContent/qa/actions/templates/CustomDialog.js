define([
	"dojo/_base/declare",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/BatchStatusDialog",
], function(
	declare,
	MessageDialog,
	ConfirmationDialog,
	BatchStatusDialog
) {
	return declare("CustomDialog", [BaseDialog], {
		/**
				 * Show an error dialog
				 * 
				 * @method showErrorDialog
				 * @param {String} title
				 * @param {String} message
				 */
		showErrorDialog: function(title, message) {
			this._showDialog("error", "ecmErrorDialog dijitDialog minor", title, message)
		},

		/**
		 * Show a message dialog
		 * 
		 * @method showMessageDialog
		 * @param {String} title
		 * @param {String} message
		 */
		showMessageDialog: function(title, message) {
			this._showDialog("info", "ecmMessageDialog dijitDialog minor", title, message)
		},

		/**
		 * Show a warning dialog
		 * 
		 * @method showWarningDialog
		 * @param {String} title
		 * @param {String} message
		 */
		showWarningDialog: function(title, message) {
			this._showDialog("warning", "ecmWarningDialog dijitDialog minor", title, message)
		},

		/**
		 * Show a dialog
		 * 
		 * @method showDialog
		 * @param {String} type
		 * @param {String} baseClass
		 * @param {String} title
		 * @param {String} message
		 */
		_showDialog: function(type, baseClass, title, message) {
			var dialog = MessageDialog({
				"type": type,
				"baseClass": baseClass
			});

			dialog.setTitle(title);
			dialog.setMessage(message, type);
			dialog.setSize(this.defaultWidth, this.defaultHeight);
			dialog.show();
		},

		/**
		 * Show a confirmation dialog
		 * 
		 * @method showConfirmationDialog
		 * @param {String} title
		 * @param {String} message
		 * @param {Function} onExecute this happens onExecute
		 * @param {String} okText optional
		 * @param {String} cancelText optional
		 */
		showConfirmationDialog: function(title, message, onExecute, okText, cancelText) {
			var dialog = new ConfirmationDialog({
				text: message,
				onExecute: function() {
					onExecute();
				},
				useClassicLayout: true
			});
			dialog.setTitle(title);

			if (okText) dialog._addedButtons[0]._setLabelAttr(okText);
			if (cancelText) dialog.cancelButton._setLabelAttr(cancelText);

			dialog.setSize(this.defaultWidth, this.defaultHeight);
			dialog.show();
		},

		/**
		 * Show an progress dialog.
		 * 
		 * @method showProgressDialog
		 * @param {String} title
		 * @param {String} message
		 * @return {BatchStatusDialog} To be able to hide it
		 */
		showProgressDialog: function(title, message) {
			// modeless false -> lock the background
			var progressDialog = new BatchStatusDialog({
				"modeless": false,
				"title": title
			});

			progressDialog.updateStatusMessage(message);
			progressDialog.show();

			return progressDialog;
		},

		// CustomDialog module definition
		CustomDialog: (function() {
			// Private variables and functions
			var dialogElement = null;

			// Public methods
			return {
				// Initialize the dialog
				init: function() {
					// Create the dialog HTML dynamically
					dialogElement = document.createElement('div');
					dialogElement.classList.add('custom-dialog');
					dialogElement.innerHTML = `
                <div class="custom-dialog-header">Custom Dialog</div>
                <div class="custom-dialog-body">
                    <form>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email">
                    </form>
                </div>
                <div class="custom-dialog-footer">
                    <button id="cancel-button">Cancel</button>
                    <button id="submit-button">Submit</button>
                </div>
            `;

					// Attach event listeners
					dialogElement.querySelector('#cancel-button').addEventListener('click', function() {
						// Close the dialog or perform cancel action
						console.log('Cancel button clicked');
						CustomDialog.close();
					});

					dialogElement.querySelector('#submit-button').addEventListener('click', function() {
						// Perform submit action or form validation
						var name = dialogElement.querySelector('#name').value;
						var email = dialogElement.querySelector('#email').value;
						console.log('Name:', name);
						console.log('Email:', email);
						CustomDialog.close();
					});

					// Append the dialog to the document body
					document.body.appendChild(dialogElement);
				},

				// Open the dialog
				open: function() {
					if (!dialogElement) {
						this.init();
					}
					dialogElement.style.display = 'block';
				},

				// Close the dialog
				close: function() {
					if (dialogElement) {
						dialogElement.style.display = 'none';
					}
				}
			};
		}),
	});
});
