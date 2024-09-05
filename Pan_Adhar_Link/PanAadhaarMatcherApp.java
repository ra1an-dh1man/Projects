
import java.util.Scanner;

public class PanAadhaarMatcherApp {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        AadhaarService aadhaarService = new AadhaarService();
        PanService panService = new PanService();

        System.out.println("Enter the Aadhaar Number");
        String aadhaarNumber = scn.nextLine();

        Aadhaar aadhaar = aadhaarService.getAadhaarByNumber(aadhaarNumber);
        Pan pan = panService.getPanByAadhaar(aadhaarNumber);

        scn.close();

        if(aadhaar != null && pan != null) {
            System.out.println("Aadhar Details= "  + aadhaar);
            System.out.println("Pan Details= " + pan);
        }
        else
            System.out.println("No Match Found");
        }
}
