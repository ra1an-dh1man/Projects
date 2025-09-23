<<<<<<< HEAD

import java.util.HashMap;
import java.util.Map;

public class PanService {
    private static Map<String, Pan> panMap = new HashMap<>();

    static {
        panMap.put("ABCD12394", new Pan("ABCD12394", "13215651", "HDFC BANK", "Stock, ELSS, FD"));
        panMap.put("ABCD12396", new Pan("ABCD12396", "165132138", "SBI BANK", "Stock, FD"));

    }

    public Pan getPanByAadhaar(String aadharNumber) {
        for(Pan pan: panMap.values()){
            if(pan.getaadhaarNumber().equals(aadharNumber)) {
                return  pan;
            }
        }
        return  null;
    }
}
=======

import java.util.HashMap;
import java.util.Map;

public class PanService {
    private static Map<String, Pan> panMap = new HashMap<>();

    static {
        panMap.put("ABCD12394", new Pan("ABCD12394", "13215651", "HDFC BANK", "Stock, ELSS, FD"));
        panMap.put("ABCD12396", new Pan("ABCD12396", "165132138", "SBI BANK", "Stock, FD"));

    }

    public Pan getPanByAadhaar(String aadharNumber) {
        for(Pan pan: panMap.values()){
            if(pan.getaadhaarNumber().equals(aadharNumber)) {
                return  pan;
            }
        }
        return  null;
    }
}
>>>>>>> bcc69c020710eb416c918aed627af15e2b2dd9fd
