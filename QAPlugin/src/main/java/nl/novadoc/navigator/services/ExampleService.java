package nl.novadoc.navigator.services;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.ibm.ecm.extension.PluginResponseUtil;
import com.ibm.ecm.extension.PluginService;
import com.ibm.ecm.extension.PluginServiceCallbacks;
import com.ibm.ecm.json.JSONResponse;

public class ExampleService extends PluginService {
    @Override
    public String getId() {
        return "ExampleService";
    }

    @Override
    public void execute(PluginServiceCallbacks callbacks, HttpServletRequest request, HttpServletResponse response) throws Exception {
        // 1) Build response object (JSON)
        JSONResponse result = new JSONResponse();

        // 2) Do something...
        // Extract param(s)
        int number =  Integer.parseInt(request.getParameter("number"));

        // 3) Put the result in the response object
        result.put("result", number*number);
        System.out.println(number);

        // 4) Return response
        PluginResponseUtil.writeJSONResponse(request, response, result, callbacks, getId());
    }
}