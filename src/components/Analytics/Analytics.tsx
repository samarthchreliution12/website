'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { useReportWebVitals } from 'next/web-vitals';

export default function Analytics() {
  useReportWebVitals((metric) => {
    const customEndpoint = "/api/analytics/web-vitals";
    const payload = JSON.stringify({
      id: metric.id,
      name: metric.name,
      value: metric.value,
      rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
      delta: metric.delta,
      navigationType: metric.navigationType, // 'navigate' | 'reload' | 'back-forward' | 'prerender'
    });

    // Use sendBeacon for non-blocking browser performance reports
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon(customEndpoint, blob);
    } else {
      fetch(customEndpoint, {
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'application/json',
        },
        keepalive: true,
      }).catch((err) => console.error('Failed to send web vitals beacon:', err));
    }
  });

  return <VercelAnalytics />;
}
