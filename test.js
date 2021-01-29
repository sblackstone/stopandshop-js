const getCookies = require('./getCookies');
const fetch = require('node-fetch');
const pry = require('pryjs');



(async function() {
  const cookies = await getCookies();
  console.log(JSON.stringify(cookies, null, 4));

  const example = "_vwo_uuid_v2=DE231D5FC544BBF5E3D63B793B0430DB0|94c0792c64fd15f20a5e184d62b90e52; _ga=GA1.2.685647193.1595339498; CoreID6=47010656755315953394993&ci=50960000|RSTSH; _fbp=fb.1.1595339500098.1703366826; h5QLsZ72=ADOAIJ1zAQAAudtdxaW0MHCuiilTGpy4jxywSRbcasL8mKhN5NpoKQeexZvT|1|1|2b5d564751ae073b11c41de5f589f2bcbacea00c; RES_TRACKINGID=17682735122096069; ResonanceSegment=1; optimizelyEndUserId=oeu1596069024988r0.511233394722975; ppdtk=VaMHM32Xgkm7U04s0jgRA3HVh3+ZSBRWWyc7GUZ8geSoao3ESD4Pp2RGl6Y2GCZb; C3UID-828=6799991771596672536; C3UID=6799991771596672536; _pin_unauth=dWlkPU9UWmxZbVUzTURJdE5HTmpOeTAwWm1Wa0xUbGhZVGN0TW1Gak1tVXdNVFkzT0dNMg; QSI_SI_1L0vpdypsahQBQp_intercept=true; __gads=ID=207963d580be1f78:T=1609002368:S=ALNI_MZodIxsnEeYynn6edyKruLcmCC_Og; __cfduid=ddcc0f2a38e6f2c8d92f15a129bd589361609855294; _elevaate_session_id=d0aeec00-9728-4c55-b47f-47de54c1667f; _gcl_au=1.1.1108913645.1611190715; _gid=GA1.2.20949316.1611871844; __utmzzses=1; IR_gbd=stopandshop.com; __utmzz=utmcsr=google|utmcmd=organic|utmccn=(not set)|utmctr=(not provided); QueueITAccepted-SDFrts345E-V3_stopandshop=EventId%3Dstopandshop%26QueueId%3D7b2df208-4e3d-47a2-bdeb-40865af9b0bf%26RedirectType%3Dsafetynet%26IssueTime%3D1611902368%26Hash%3D0a401a503653a7c4fc8c0d93f0ec22f6d4f23b66574f235bca207c9df18f9f13; C3S-828=on; QSI_HistorySession=https%3A%2F%2Fstopandshop.com%2F~1611871846409%7Chttps%3A%2F%2Fstopandshop.com%2Fpages%2Faccount-sign-in~1611879411514%7Chttps%3A%2F%2Fstopandshop.com%2F~1611895571049%7Chttps%3A%2F%2Fstopandshop.com%2Fshop%2Fauth%2F%3Fgateway%3D1~1611896970895%7Chttps%3A%2F%2Fstopandshop.com%2F~1611902369659; JSESSIONID=0BPJQO1SMRKOUCWWDM0CF3Q; x-apm-brtm-servertime=1611903440237; _dc_gtm_UA-1002630-32=1; _gat_UA-1002630-32=1; _uetsid=aac6a2e061b511eb83fe172784899487; _uetvid=ae7e3d8c021516a077c6044b70931fd1; IR_10966=1611903441107%7C0%7C1611902368872%7C%7C; IR_PI=e7d98513-d1fb-11ea-b323-123ef70df310%7C1611989841107; _derived_epik=dj0yJnU9NTl0WGxoT293OWh3R0x4d0dwUHZDTUZaWDJSc1RBTXImbj04RnpNblFGMkJPS0lqOGxEVWhJTzJ3Jm09NyZ0PUFBQUFBR0FUc2RF";


  const a = example.split("; ").map(x => x.split("=")[0]);
  const b = cookies.map(x => x.name);
  eval(pry.it);

  [
  '_vwo_uuid_v2',
  'CoreID6',
  'RES_TRACKINGID',
  'ResonanceSegment',
  'QSI_SI_1L0vpdypsahQBQp_intercept',
  '__gads',
  '_elevaate_session_id',
  '_derived_epik'
]



  const testData = await fetch("https://stopandshop.com/api/v2.0/user/preferences/preferred-pup", {
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,ja;q=0.8",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie
    },
    "referrer": "https://stopandshop.com/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors"
  });


  console.log(await testData.text());
  process.exit(-1);
})();
