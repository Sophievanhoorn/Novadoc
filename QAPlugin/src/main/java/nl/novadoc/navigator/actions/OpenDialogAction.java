package nl.novadoc.navigator.actions;

import java.util.Locale;

import com.ibm.ecm.extension.PluginAction;

public class OpenDialogAction extends PluginAction {
	@Override
	public String getActionFunction() {
		return "performAction";
	}

	@Override
	public String getIcon() {
		return "";
	}

	@Override
	public String getId() {
		return "OpenDialogAction";
	}

	@Override
	public String getName(Locale arg0) {
		return "Open Dialog Action";
	}

	@Override
	public String getPrivilege() {
		return "";
	}

	@Override
	public String getServerTypes() {
		return "p8";
	}

	@Override
	public boolean isMultiDoc() {
		return false;
	}

	@Override
	public boolean isGlobal() {
		// True means active when no document or folder is selected
		return true;
	}

	@Override
	public String getActionModelClass() {
		return "qa/actions/" + getId();
	}
}