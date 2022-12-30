import request from "request-promise";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const JSRender = "&render=true";
// const url = "https://accounts.craigslist.org/login";
// const url2 =
//   "https://accounts.craigslist.org/login?rp=%2Flogin%2Fhome%3Flang%3Dfr%26cc%3Dfr&rt=L&lang=fr&cc=fr";
// const url3 = "https://accounts.craigslist.org/login/onetime";
// const url5 =
//   "https://accounts.craigslist.org/login/confirm?key=193621877-8RRTvKCFRG1UmY16xxczsWPiNMopt4";
const url = "https://www.docmorris.de/meindocmorris/anmelden";

async function main() {
  try {
    const html = await request.post(
      // `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url}${JSRender}`,
      // url,
      // url3,
      // `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url3}${JSRender}`,
      `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url}&render=true`,
      {
        form: {
          login_username: "phouee78",
          login_password: "DeutschlandKehl2022$!",
          fromSelf: true,
          t: "a070f4f9-4d83-4d71-8a42-23919d7ab46a",
        },
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language":
            "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,ar-MA;q=0.6,ar;q=0.5,he-IL;q=0.4,he;q=0.3,de;q=0.2",
          "cache-control": "max-age=0",
          "content-type": "application/x-www-form-urlencoded",
          "sec-ch-ua":
            '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          cookie:
            "__cmpconsentx8604=BPjiQUzPjiQUzAfJcBDEDXAAAAAVmABAKyA; __cmpcvcx8604=__c7290_s335_c2292_c2291_s1494_c9515_c2236_s23_c5043_c2202_c5737_s7_c5742_s1_s26_c16367_c2094_c2093_s905_c2086_s2_s11_c2085_s1432_c6131_c9270_s30_c13020_U__; __cmpcpcx8604=__51_52_54__; _gcl_au=1.1.954201943.1670230968; _fbp=fb.1.1670230968850.880816931; et_uk=3814d665e7694d24ae65caa51a3b1c1d; et_gk=eabaf200c63f486a8832e73863992d54|03.02.2023 09:02:49; usm_um_rt=9119339598; _autuserid2=7173587405808731342; _uetvid=9761e7e0747b11ed89f98f27c70b876f; NoCookie=true; crdc-zHxulO7emU1nQ__=v1mOxsUA__aqz; _gid=GA1.2.449105399.1672414792; _pk_ses.874.5fde=1; ksid=Ll5O1K5IUGoqIe2G7fjLPIUC; JSESSIONID=FAF4AF5E43DE27AC05E5319F31DC7CB9; _pk_id.874.5fde=9d98f9a23f441026.1670337610.29.1672414937.1672414793.; _ga=GA1.1.1461937305.1670230964; _uetsid=341adb20885811ed955ef74e95e6a436; _ga_SQ6LG9QXHM=GS1.1.1672414793.39.1.1672414958.47.0.0",
          Referer: "https://www.docmorris.de/meindocmorris/anmelden",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        // Option to accept other status than 2xx
        simple: false,
        // Allows redirects
        followAllRedirects: true,
        // Allows cookies storage
        jar: true,
      }
    );
    fs.writeFileSync("./docmorris.html", html);
  } catch (error) {
    console.error(error);
  }
}

main();
