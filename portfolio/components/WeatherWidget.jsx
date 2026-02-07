'use client';

import { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, CloudSnow, Wind } from 'lucide-react';

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Default to Surabaya coordinates
        const lat = -7.2575;
        const lon = 112.7521;

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await response.json();

        setWeather({
          temp: Math.round(data.current_weather.temperature),
          weatherCode: data.current_weather.weathercode
        });
        setLoading(false);
      } catch (error) {
        console.error('Weather fetch failed:', error);
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh every 10 minutes
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (code) => {
    if (code === 0) return <Sun size={20} className="text-yellow-400" />;
    if (code >= 1 && code <= 3) return <Cloud size={20} className="text-slate-300" />;
    if (code >= 51 && code <= 67) return <CloudRain size={20} className="text-blue-400" />;
    if (code >= 71 && code <= 77) return <CloudSnow size={20} className="text-cyan-300" />;
    return <Wind size={20} className="text-slate-400" />;
  };

  if (loading) {
    return (
      <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
        <div className="animate-pulse flex items-center gap-2">
          <div className="w-5 h-5 bg-white/20 rounded"></div>
          <div className="w-12 h-4 bg-white/20 rounded"></div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300">
      {getWeatherIcon(weather.weatherCode)}
      <span className="font-semibold">{weather.temp}°C</span>
      <span className="text-xs text-slate-400">Surabaya</span>
    </div>
  );
}
