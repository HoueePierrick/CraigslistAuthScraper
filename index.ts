import request from "request-promise";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const JSRender = "&render=true";
const url = "https://accounts.craigslist.org/login";
const url2 =
  "https://accounts.craigslist.org/login?rp=%2Flogin%2Fhome%3Flang%3Dfr%26cc%3Dfr&rt=L&lang=fr&cc=fr";
const url3 = "https://accounts.craigslist.org/login/onetime";
const url5 =
  "https://accounts.craigslist.org/login/confirm?key=193621877-8RRTvKCFRG1UmY16xxczsWPiNMopt4";

async function main() {
  try {
    const html = await request.post(
      // `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url}${JSRender}`,
      url,
      // url3,
      // `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url3}${JSRender}`,
      // `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=https://accounts.craigslist.org/login/onetime&render=true`,
      {
        form: {
          inputEmailHandle: "houee.pierrick@gmail.com",
          inputPassword: "Connardo2022$!",
        },
        headers: {
          Referer: "https://accounts.craigslist.org/login",
        },
        // Option to accept other status than 2xx
        simple: false,
        // Allows redirects
        followAllRedirects: true,
        // Allows cookies storage
        jar: true,
      }
    );
    fs.writeFileSync("./login.html", html);
  } catch (error) {
    console.error(error);
  }
}

main();
