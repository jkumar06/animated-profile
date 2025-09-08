import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sun, Moon, Cloud, CloudRain, CloudSnow, CloudDrizzle, CloudLightning } from 'lucide-react';

// No API key: using Open-Meteo (free, no auth) for current weather
const fetchWeather = async (lat, lon) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
  const res = await fetch(url);
  const data = await res.json();
  return data.current_weather;
};

const reverseGeocode = async (lat, lon) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
  const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
  const data = await res.json();
  const c = data.address || {};
  return c.city || c.town || c.village || c.suburb || c.state || c.county || data.display_name || 'Your location';
};

const iconForCode = (code, isNight) => {
  if ([0].includes(code)) return isNight ? Moon : Sun;
  if ([1, 2, 3].includes(code)) return Cloud;
  if ([51, 53, 55].includes(code)) return CloudDrizzle;
  if ([61, 63, 65, 80, 81, 82].includes(code)) return CloudRain;
  if ([71, 73, 75, 85, 86].includes(code)) return CloudSnow;
  if ([95, 96, 99].includes(code)) return CloudLightning;
  return Cloud;
};

const WeatherClock = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ latitude, longitude });
        try {
          const w = await fetchWeather(latitude, longitude);
          setWeather(w);
          try {
            const name = await reverseGeocode(latitude, longitude);
            setLocation((l) => ({ ...(l || {}), name }));
          } catch (e) {
            // ignore
          }
        } catch (e) {
          setError('Weather fetch failed');
        }
      },
      () => setError('Location permission denied')
    );
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const isNight = time.getHours() < 6 || time.getHours() >= 18;
  const Icon = weather ? iconForCode(weather.weathercode, isNight) : null;

  return (
    <motion.div
      className="glass rounded-2xl px-5 py-3 flex items-center gap-4 text-white/90 shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      {/* Animated time */}
      <div className="flex items-baseline gap-1">
        <motion.span
          key={hours}
          className="text-2xl font-bold"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {hours}
        </motion.span>
        <span className="text-2xl font-bold">:</span>
        <motion.span
          key={minutes}
          className="text-2xl font-bold"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          {minutes}
        </motion.span>
        <span className="text-lg opacity-70">:{seconds}</span>
      </div>

      {/* Weather */}
      <div className="h-6 w-px bg-white/20" />
      {weather ? (
        <motion.div className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {Icon && <Icon className="w-5 h-5 text-blue-300" />}
          <span className="text-sm">
            {Math.round(weather.temperature)}°{weather.units?.temperature ?? 'C'}
          </span>
        </motion.div>
      ) : (
        <span className="text-sm opacity-70">{error ? error : 'Locating…'}</span>
      )}

      {/* Location name */}
      {location?.name && (
        <>
          <div className="h-6 w-px bg-white/20" />
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4 text-blue-300" />
            <span className="truncate max-w-[18rem]">{location.name}</span>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default WeatherClock;

