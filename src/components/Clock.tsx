import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pstTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(time);

  const pstDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(time);

  return (
    <div className="flex gap-8 text-right">
      <div className="info-block">
        <div className="info-label">Pakistan Standard Time (PST)</div>
        <div className="info-value tabular-nums">{pstTime}</div>
      </div>
      <div className="info-block hidden sm:block">
        <div className="info-label">Current Date</div>
        <div className="info-value">{pstDate}</div>
      </div>
    </div>
  );
}
