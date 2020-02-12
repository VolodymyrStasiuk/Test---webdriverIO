import { Page } from "@base/page";
import { TIMEOUT } from "dns";


// initializes the necessary variables
const url: string = "https://lun.ua/";
const pageCss: string = "body";

const apartmentsFromTheConstructionSelector: string = ".image-desktop";
const searchFieldSelector: string = "[data-qa=geo-field]";
const submitSearchSelector: string = '//*[@id="geo-select"]/button';

const DocumentsTabSelector: string = '//*[@id="building-menu"]/a[3]';
const landYardSelector: string ="#d-permissions";


//const constractorWebSiteSelector:string = '/html/body/div[3]/section/div/div/div[2]/a/span';



class HomePage extends Page {
    //initializes the browser elements
   // get welcomeText() {
    //    return $(title);
   // }

   apartmentsFromTheConstructionLink() {
        return $(apartmentsFromTheConstructionSelector);
    }



    searchInputField() {

        return $(searchFieldSelector)
    }
    submitSearchButton(){
        return $(submitSearchSelector);
    }




    documentsTab() {
        return $(DocumentsTabSelector);
    }
    landYardDocumentsExpander(){
        return $(landYardSelector);
    }

    constructor() {
        super(url, pageCss);
    }
}
export default new HomePage();
