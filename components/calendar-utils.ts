// Calendar utility functions for generating .ics files and Google Calendar links

export interface CalendarEvent {
  title: string;
  description?: string;
  start: Date;
  end: Date;
  location?: string;
  url?: string;
}

/**
 * Escapes special characters in text for .ics format
 */
function escapeICS(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

/**
 * Formats a date to ICS format (YYYYMMDDTHHmmssZ)
 */
function formatICSDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

/**
 * Generates an .ics file content from calendar events
 */
export function generateICS(events: CalendarEvent[], calendarName: string = 'WildHacks 2026'): string {
  let ics = 'BEGIN:VCALENDAR\r\n';
  ics += 'VERSION:2.0\r\n';
  ics += 'PRODID:-//WildHacks//Guide 2026//EN\r\n';
  ics += `X-WR-CALNAME:${escapeICS(calendarName)}\r\n`;
  ics += 'CALSCALE:GREGORIAN\r\n';
  ics += 'METHOD:PUBLISH\r\n';

  events.forEach((event, index) => {
    ics += 'BEGIN:VEVENT\r\n';
    ics += `UID:${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}@wildhacks.net\r\n`;
    ics += `DTSTAMP:${formatICSDate(new Date())}\r\n`;
    ics += `DTSTART:${formatICSDate(event.start)}\r\n`;
    ics += `DTEND:${formatICSDate(event.end)}\r\n`;
    ics += `SUMMARY:${escapeICS(event.title)}\r\n`;
    
    if (event.description) {
      ics += `DESCRIPTION:${escapeICS(event.description)}\r\n`;
    }
    
    if (event.location) {
      ics += `LOCATION:${escapeICS(event.location)}\r\n`;
    }
    
    if (event.url) {
      ics += `URL:${event.url}\r\n`;
    }
    
    ics += 'END:VEVENT\r\n';
  });

  ics += 'END:VCALENDAR\r\n';
  return ics;
}

/**
 * Converts relative URLs to absolute URLs
 */
function makeAbsoluteURL(url: string | undefined, baseURL: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  // Remove leading slash if baseURL already has trailing slash
  const base = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${base}${path}`;
}

/**
 * Downloads an .ics file
 */
export function downloadICS(events: CalendarEvent[], filename: string = 'wildhacks-2026.ics'): void {
  // Make URLs absolute if we're in a browser environment
  const baseURL = typeof window !== 'undefined' ? window.location.origin : '';
  const eventsWithAbsoluteURLs = events.map(event => ({
    ...event,
    url: makeAbsoluteURL(event.url, baseURL)
  }));
  
  const icsContent = generateICS(eventsWithAbsoluteURLs);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generates a Google Calendar URL for a single event
 */
export function generateGoogleCalendarURL(event: CalendarEvent): string {
  const params = new URLSearchParams();
  
  // Format dates for Google Calendar (YYYYMMDDTHHmmss)
  const formatGoogleDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
  };

  params.append('action', 'TEMPLATE');
  params.append('text', event.title);
  params.append('dates', `${formatGoogleDate(event.start)}/${formatGoogleDate(event.end)}`);
  
  if (event.location) {
    params.append('location', event.location);
  }
  
  if (event.description) {
    params.append('details', event.description);
  }

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates a Google Calendar URL for multiple events
 * Note: Google Calendar doesn't support adding multiple events at once via URL,
 * so this opens the first event and user can add others manually
 */
export function generateGoogleCalendarURLForEvents(events: CalendarEvent[]): string {
  if (events.length === 0) {
    return 'https://calendar.google.com/calendar/render';
  }
  
  // For multiple events, we'll create a URL that opens Google Calendar
  // and the user can manually add the .ics file or we open the first event
  return generateGoogleCalendarURL(events[0]);
}

/**
 * Parses time string (e.g., "6:00 PM - 7:00 PM") and returns start and end times
 */
export function parseTimeRange(timeStr: string, date: Date): { start: Date; end: Date } | null {
  // Handle various time formats
  const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!timeMatch) {
    // Try single time format (e.g., "10:00 AM")
    const singleTimeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (singleTimeMatch) {
      const hour = parseInt(singleTimeMatch[1]);
      const minute = parseInt(singleTimeMatch[2]);
      const isPM = singleTimeMatch[3].toUpperCase() === 'PM';
      let hour24 = hour === 12 ? (isPM ? 12 : 0) : (isPM ? hour + 12 : hour);
      
      const start = new Date(date);
      start.setHours(hour24, minute, 0, 0);
      // Default to 1 hour duration if no end time
      const end = new Date(start);
      end.setHours(end.getHours() + 1);
      return { start, end };
    }
    return null;
  }

  const startHour = parseInt(timeMatch[1]);
  const startMinute = parseInt(timeMatch[2]);
  const startIsPM = timeMatch[3].toUpperCase() === 'PM';
  const endHour = parseInt(timeMatch[4]);
  const endMinute = parseInt(timeMatch[5]);
  const endIsPM = timeMatch[6].toUpperCase() === 'PM';

  let startHour24 = startHour === 12 ? (startIsPM ? 12 : 0) : (startIsPM ? startHour + 12 : startHour);
  let endHour24 = endHour === 12 ? (endIsPM ? 12 : 0) : (endIsPM ? endHour + 12 : endHour);

  const start = new Date(date);
  start.setHours(startHour24, startMinute, 0, 0);

  const end = new Date(date);
  end.setHours(endHour24, endMinute, 0, 0);

  return { start, end };
}

/**
 * Parses date string (e.g., "April 2, 2026")
 */
export function parseDate(dateStr: string): Date | null {
  try {
    return new Date(dateStr);
  } catch {
    return null;
  }
}

