package nl.novadoc.navigator;

import java.util.Locale;

import com.ibm.ecm.extension.Plugin;
import com.ibm.ecm.extension.PluginAction;
import com.ibm.ecm.extension.PluginService;

import nl.novadoc.navigator.actions.OpenDialogAction;
import nl.novadoc.navigator.plugin.VersionInfo;

public class QAPlugin extends Plugin {

	public static VersionInfo versionInfo = new VersionInfo();

	@Override
	public String getId() {
		return "QAPlugin";
	}

	@Override
	public String getName(Locale arg0) {
		return "Q&A Plugin";
	}

	@Override
	public PluginAction[] getActions() {
		return new PluginAction[] { new OpenDialogAction() };
	}

	@Override
	public PluginService[] getServices() {
		return new PluginService[0];
	}

	@Override
	public String getDojoModule() {
		return "qa";
	}

	@Override
	public String getConfigurationDijitClass() {
		return "qa.config.ConfigurationPane";
	}

	@Override
	public String getVersion() {
		return versionInfo.getManifestVersion() + (versionInfo.getManifestCompressed() ? ".compressed" : "");
	}

	@Override
	public String getCopyright() {
		return "";
	}

	@Override
	public String getScript() {
		if (versionInfo.getManifestCompressed()) {
			return getId() + ".js.jgz";
		} else {
			return getDebugScript();
		}
	}

	@Override
	public String getDebugScript() {
		return getId() + ".js";
	}

	@Override
	public String getCSSFileName() {
		if (versionInfo.getManifestCompressed()) {
			return getId() + ".css.jgz";
		} else {
			return getDebugCSSFileName();
		}
	}

	@Override
	public String getDebugCSSFileName() {
		return getId() + ".css";
	}
}
