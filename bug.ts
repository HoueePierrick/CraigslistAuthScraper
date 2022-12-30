import requestpromise from "request-promise";
import dotenv from "dotenv";
import fs from "fs";

const request = requestpromise.defaults({ jar: true });
dotenv.config();

async function main() {
  try {
    const html = await request.post(
      `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=https://accounts.craigslist.org/login/onetime&render=true`,
      {
        form: {
          inputEmailHandle: "houee.pierrick@gmail.com",
          inputPassword: "Connardo2022$!",
        },
        headers: {
          Referer: "https://accounts.craigslist.org/login",
        },
        simple: false,
        followAllRedirects: true,
      }
    );
    fs.writeFileSync("./login.html", html);
  } catch (error) {
    console.error(error);
  }
}

main();
