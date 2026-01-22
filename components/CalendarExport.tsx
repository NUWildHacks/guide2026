import React from 'react';
import { CalendarEvent, downloadICS, generateGoogleCalendarURLForEvents } from './calendar-utils';

interface CalendarExportProps {
  events: CalendarEvent[];
  calendarName?: string;
}

export default function CalendarExport({ events, calendarName = 'WildHacks 2026' }: CalendarExportProps) {
  const handleDownloadICS = () => {
    downloadICS(events, `${calendarName.toLowerCase().replace(/\s+/g, '-')}.ics`);
  };

  const handleOpenGoogleCalendar = () => {
    if (events.length > 1) {
      // For multiple events, download .ics file and open Google Calendar import page
      downloadICS(events, `${calendarName.toLowerCase().replace(/\s+/g, '-')}.ics`);
      // Open Google Calendar import page where user can upload the .ics file
      window.open('https://calendar.google.com/calendar/u/0/r/settings/import', '_blank');
    } else if (events.length === 1) {
      // For single event, open Google Calendar with pre-filled event
      window.open(generateGoogleCalendarURLForEvents(events), '_blank');
    }
  };

  if (events.length === 0) {
    return null;
  }

  return (
    <div style={{ 
      margin: '2rem 0',
      padding: '1.5rem',
      border: '2px solid var(--primary-color)',
      borderRadius: 0,
      backgroundColor: 'rgba(var(--primary-rgb), 0.05)'
    }}>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
        📅 Add to Calendar
      </h3>
      <p style={{ marginBottom: '1rem', color: 'rgba(var(--foreground-rgb), 0.8)' }}>
        Add all WildHacks 2026 events to your personal calendar.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={handleDownloadICS}
          className="button-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#5f459b',
            color: 'white',
            border: '2px solid #5f459b',
            padding: '0.5rem 1.5rem',
            fontWeight: '500',
            borderRadius: 0,
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(95, 69, 155, 0.9)';
            e.currentTarget.style.borderColor = 'rgba(95, 69, 155, 0.9)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(95, 69, 155, 0.3)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#5f459b';
            e.currentTarget.style.borderColor = '#5f459b';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>📥</span>
          <span>Download .ics File</span>
        </button>
        <button
          onClick={handleOpenGoogleCalendar}
          className="button-secondary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#56a0d7',
            color: 'white',
            border: '2px solid #56a0d7',
            padding: '0.5rem 1.5rem',
            fontWeight: '500',
            borderRadius: 0,
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(86, 160, 215, 0.9)';
            e.currentTarget.style.borderColor = 'rgba(86, 160, 215, 0.9)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(86, 160, 215, 0.3)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#56a0d7';
            e.currentTarget.style.borderColor = '#56a0d7';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>📆</span>
          <span>Add to Google Calendar</span>
        </button>
      </div>
      <p style={{ 
        marginTop: '1rem', 
        fontSize: '0.875rem', 
        color: 'rgba(var(--foreground-rgb), 0.6)',
        fontStyle: 'italic'
      }}>
        {events.length > 1 
          ? `The .ics file contains ${events.length} events and can be imported into Google Calendar, Apple Calendar, Outlook, and other calendar apps. Clicking "Add to Google Calendar" will download the file and open Google Calendar's import page.`
          : 'Click to add this event to your Google Calendar.'}
      </p>
    </div>
  );
}

