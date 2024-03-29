import '@logseq/libs';

const insertCookie = () => {
  document.cookie = 'loom_anon_comment=9aca4eef470a49a69ac88ce39fdfc38f; ajs_anonymous_id=2d734fcf-1b1f-473e-881d-b0578af2b026; mutiny.user.token=a49ba5b3-d945-41ca-8a25-734d038a2e37; mutiny.user.token=a49ba5b3-d945-41ca-8a25-734d038a2e37; _gid=GA1.2.1292521466.1711694104; _fs_sample_user=false; _tt_enable_cookie=1; _ttp=ac32dL2wne8iACI4XjpJLXP6E_a; _clck=1rfbyxn%7C2%7Cfkh%7C0%7C1549; __hstc=185935670.a249251df62fa367b3ce5144754888d8.1711694104740.1711694104740.1711694104740.1; hubspotutk=a249251df62fa367b3ce5144754888d8; _ga=GA1.1.777964506.1708024331; _gcl_au=1.1.1843991906.1711694104.1363038718.1711694162.1711694162; loom_anon_id=; loom_anon_comment=; loom_anon_comment_name=; ajs_user_id=25427040; loom-sst=lsst-00bc80e8-09a2-43b6-af78-261840337040; _rdt_uuid=1711694104088.d98f3520-0c4b-4ade-a7d5-6577ff74de54; _uetsid=79ee3130ed9611ee8fe213f43e3eb63e; _uetvid=79ee4ea0ed9611eea0fc59e2660836f3; __stripe_mid=c3341da3-5c24-480b-bea9-de7d110700a4993af0; _clsk=shkseq%7C1711694192762%7C10%7C0%7Cj.clarity.ms%2Fcollect; loomhq:thirdPartyCookieSupported=true; _ga_H93TGDH6MB=GS1.1.1711743149.3.0.1711743149.60.0.0; __stripe_sid=7f4e35ed-b349-48c4-a233-c722f03f9e6fcedaf4; _dd_s=rum=2&id=fa80f547-e988-4473-a5dc-736c35e3f643&created=1711743148215&expire=1711744048288&logs=0';
  console.log("document.cookie: ", window.CookieStore.getAll())
}


const main = () => {
  console.log("document.cookie: ", window.CookieStore.getAll('loom_referral_video'))
  insertCookie();
}

logseq.ready(main).catch(console.error);