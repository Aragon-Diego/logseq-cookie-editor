import '@logseq/libs';
import cookiesJson from "./cookie.json" assert { type: 'json' };ç
import Cookies from 'js-cookie'

const insertCookie = () => {
  
  console.log("🚀 ~ cookie:", cookiesJson)
  for(let cookie in cookiesJson) {
    cookie = cookiesJson[cookie];
    const tempName = cookie.name;
    console.log("🚀 ~ insertCookie ~ tempName:", tempName)
    const tempValue = cookie.value;
    console.log("🚀 ~ insertCookie ~ tempValue:", tempValue)
    delete cookie.name;
    delete cookie.value;
    console.log("🚀 ~ insertCookie ~ cookie:", cookie)
    Cookies.set(tempName, tempValue, {... cookie});
  }
}


const main = () => {

  insertCookie();
}

logseq.ready(main).catch(console.error);