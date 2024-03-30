require('electron-cookies');
import '@logseq/libs';

const insertCookie = () => {
}


const main = () => {
  console.log("document.cookie: ", document.cookie)
  insertCookie();
}

logseq.ready(main).catch(console.error);