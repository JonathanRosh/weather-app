import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const port = 3000;
const API_KEY = process.env.API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const DEFAULT_CITY = "London";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function formatCity(city) {
  return city
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

async function getWeatherData(city) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return {
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temp: response.data.main.temp,
      main: response.data.main,
      wind: response.data.wind,
      clouds: response.data.clouds,
      dt: response.data.dt,
      timezone: response.data.timezone,
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error(
        `City "${city}" not found. Please check the spelling and try again.`
      );
    } else {
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
  }
}

app.get("/", async (req, res) => {
  try {
    const weatherData = await getWeatherData(DEFAULT_CITY);
    res.render("index.ejs", weatherData);
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("index.ejs", { error: error.message });
  }
});

app.post("/submit", async (req, res) => {
  const city = formatCity(req.body.city) || "";

  if (!city) {
    return res.render("index.ejs", { error: "Please enter a city name" });
  }

  try {
    const weatherData = await getWeatherData(city);
    res.render("index.ejs", weatherData);
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("index.ejs", { error: error.message, city: city });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
