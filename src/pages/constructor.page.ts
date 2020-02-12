import { Page } from "@base/page";
import { TIMEOUT } from "dns";


// initializes the necessary variables
const url: string = "https://novostroyki.lun.ua/uk/%D0%B6%D0%BA-%D0%BF%D0%B0%D1%80%D1%83%D1%81-smart-%D0%BB%D1%8C%D0%B2%D1%96%D0%B2/%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B8";
const pageCss: string = "body";

const constractorWebSiteSelector:string = '/html/body/div[3]/section/div/div/div[2]/a/span';


class ConstructorPage extends Page {

constractorWebSiteLink(){
    return $(constractorWebSiteSelector)
}

constructor() {
    super(url, pageCss);
}
}
export default new ConstructorPage();