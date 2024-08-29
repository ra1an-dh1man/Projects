
import java.util.HashMap;
import java.util.Map;

// package Pan_Aadhaar_Link;

public class AadhaarService {
    private static Map<String, Aadhaar> aadhaarMap = new HashMap<>();

    static{
        aadhaarMap.put("13215651", new Aadhaar("13215651", "Ashwani", "Mr. Anil Kumar", "Agra"));
        aadhaarMap.put("165132138", new Aadhaar("165132138", "Chetan", "Mr Mahesh", "Delhi"));
    }

    public Aadhaar getAadhaarByNumber(String aadhaarumber) {
        return aadhaarMap.get(aadhaarumber);
    }
}

