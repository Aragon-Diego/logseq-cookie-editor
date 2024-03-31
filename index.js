import '@logseq/libs';
import cookies from "./cookie.json" assert { type: 'json' };

const insertCookie = () => {
  console.log("🚀 ~ cookie:", cookies)
  for(let cookie in cookies) {
    cookie = cookies[cookie];
    const tempName = cookie.name;
    console.log("🚀 ~ insertCookie ~ tempName:", tempName)
    const tempValue = cookie.value;
    console.log("🚀 ~ insertCookie ~ tempValue:", tempValue)
    delete cookie.name;
    delete cookie.value;
    console.log("🚀 ~ insertCookie ~ cookie:", cookie)
    oreo.set(tempName, tempValue, {... cookie});
  }
  console.log("🚀 ~ main ~ oreo.list:", oreo.list)
}


const main = () => {
  console.log("🚀 ~ main ~ oreo.list:", oreo.list)
  insertCookie();
}

logseq.ready(main).catch(console.error);