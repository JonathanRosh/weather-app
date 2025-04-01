# Weather App

A simple responsive weather application that allows users to get real-time weather information for any city worldwide. The app fetches weather data from the OpenWeather API and displays temperature, humidity, wind speed, and other weather conditions.

## Features
- Search for weather data by city name
- Displays temperature, weather conditions, humidity, wind speed, and pressure
- Provides a weather icon representing current conditions
- Error handling for incorrect city names
- Responsive and clean UI using EJS and CSS

## Technologies Used
- **Node.js** - Backend runtime environment
- **Express.js** - Web framework for handling routes
- **EJS** - Template engine for rendering dynamic HTML
- **Axios** - HTTP client for making API requests
- **OpenWeather API** - Provides weather data

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add your OpenWeather API key:
   ```env
   API_KEY=your_api_key_here
   ```
5. Start the application:
   ```sh
   npm start
   ```
6. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage
- Enter a city name in the input field and click "Search" to get weather details.
- The app will display the city's temperature, humidity, wind speed, and other weather data.
- If the city name is incorrect, an error message will be displayed.

## File Structure
```
weather-app/
│── public/
│   ├── styles/
│   │   ├── main.css
│── views/
│   ├── index.ejs
│── server.js
│── package.json
│── .env
```


## API Reference
- OpenWeather API: [https://openweathermap.org/api](https://openweathermap.org/api)

## License
This project is licensed under the MIT License.

---
Feel free to customize and add more details based on your preferences!

