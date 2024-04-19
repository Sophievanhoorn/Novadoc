//// Define a constructor function for the custom dialog object
//function CustomDialog(title, message, buttons) {
//	this.title = title;
//	this.message = message;
//	this.buttons = buttons;
//}
//
//// Add a method to the prototype to display the dialog
//CustomDialog.prototype.show = function(callback) {
//	// Create dialog container
//	var dialog = document.createElement('div');
//	dialog.classList.add('dialog');
//
//	// Add title
//	var titleElement = document.createElement('h2');
//	titleElement.textContent = this.title;
//	dialog.appendChild(titleElement);
//
//	// Add message
//	var messageElement = document.createElement('p');
//	messageElement.textContent = this.message;
//	dialog.appendChild(messageElement);
//
//	// Add buttons
//	var self = this; // Store a reference to 'this' for use inside the event listener
//	this.buttons.forEach(function(buttonInfo) {
//		var button = document.createElement('button');
//		button.textContent = buttonInfo.label;
//		button.addEventListener('click', function() {
//			// Close dialog when button is clicked
//			document.body.removeChild(dialog);
//			if (typeof callback === 'function') {
//				callback(buttonInfo.value);
//			}
//		});
//		dialog.appendChild(button);
//	});
//
//	// Add dialog to document body
//	document.body.appendChild(dialog);
//};