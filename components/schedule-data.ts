import { CalendarEvent, parseDate, parseTimeRange } from './calendar-utils';

// Schedule data for WildHacks 2026
// This data is extracted from the schedule table in schedule.mdx

export const scheduleEvents: CalendarEvent[] = [
  // Workshop Week Events
  {
    title: 'Emerging Coders: Web Development',
    description:
      'Curious about how websites are built? This beginner-friendly workshop by Emerging Coders will walk you through the basics of web development—from structuring a webpage with HTML to styling with CSS and adding interactivity with JavaScript.',
    start: new Date('2026-04-02T18:00:00-05:00'), // 6:00 PM CT
    end: new Date('2026-04-02T19:00:00-05:00'), // 7:00 PM CT
    location: 'TCH LR5',
    url: '/workshops/#emerging-coders-web-development',
  },
  {
    title: 'ColorStack: Introduction to Python',
    description:
      "New to coding? This beginner-friendly workshop is the perfect place to start. Join ColorStack to learn the fundamentals of Python—the world's most popular programming language.",
    start: new Date('2026-04-02T19:00:00-05:00'), // 7:00 PM CT
    end: new Date('2026-04-02T20:00:00-05:00'), // 8:00 PM CT
    location: 'Mudd 3514',
    url: '/workshops/#colorstack-introduction-to-python',
  },
  {
    title: 'DISC: React',
    description: 'Learn React fundamentals',
    start: new Date('2026-04-03T18:00:00-05:00'), // 6:00 PM CT
    end: new Date('2026-04-03T19:00:00-05:00'), // 7:00 PM CT
    location: 'TCH L168',
    url: '/workshops/#disc-react',
  },
  {
    title: 'IEEE: GitHub',
    description: 'Learn GitHub fundamentals',
    start: new Date('2026-04-03T19:00:00-05:00'), // 7:00 PM CT
    end: new Date('2026-04-03T20:00:00-05:00'), // 8:00 PM CT
    location: 'TCH M177',
    url: '/workshops/#ieee-github',
  },
  {
    title: 'Locket Cybersecurity: Introduction to Cybersecurity',
    description: 'Introduction to Cybersecurity',
    start: new Date('2026-04-04T17:00:00-05:00'), // 5:00 PM CT
    end: new Date('2026-04-04T18:00:00-05:00'), // 6:00 PM CT
    location: 'TCH L221',
    url: '/workshops/#locket-cybersecurity-introduction-to-cybersecurity',
  },
  {
    title: 'Women in Computing: GitHub',
    description: 'Learn GitHub fundamentals',
    start: new Date('2026-04-04T18:00:00-05:00'), // 6:00 PM CT
    end: new Date('2026-04-04T19:00:00-05:00'), // 7:00 PM CT
    location: 'TCH M152',
    url: '/workshops/#women-in-computing-github',
  },
  {
    title:
      'Women in Computing: Full Stack with Python (MLH TechTogether Event)',
    description: 'Full Stack with Python workshop',
    start: new Date('2026-04-05T12:45:00-05:00'), // 12:45 PM CT
    end: new Date('2026-04-05T13:30:00-05:00'), // 1:30 PM CT
    location: 'TCH M164',
    url: '/workshops/#women-in-computing-full-stack-with-python-mlh-techtogether-event',
  },
  {
    title: 'MLH: Making Better Hacks, Faster, Using GitHub Copilot!',
    description: 'Making Better Hacks, Faster, Using GitHub Copilot!',
    start: new Date('2026-04-05T14:30:00-05:00'), // 2:30 PM CT
    end: new Date('2026-04-05T15:30:00-05:00'), // 3:30 PM CT
    location: 'TCH L160',
    url: '/workshops/#making-better-hacks-faster-using-github-copilot',
  },

  // Saturday, April 5, 2026 - Hackathon Day 1
  {
    title: 'Check-In',
    description:
      'Check-in for WildHacks 2026. Have your student ID and WildHacker Code ready.',
    start: new Date('2026-04-05T09:00:00-05:00'), // 9:00 AM CT
    end: new Date('2026-04-05T10:00:00-05:00'), // 10:00 AM CT
    location: 'Front of LR2',
    url: '/logistics/checking-in',
  },
  {
    title: 'Sponsor Expo',
    description: 'Meet with sponsors and learn about opportunities',
    start: new Date('2026-04-05T09:00:00-05:00'), // 9:00 AM CT
    end: new Date('2026-04-05T10:00:00-05:00'), // 10:00 AM CT
    location: 'TCH L170',
  },
  {
    title: 'Opening Ceremony',
    description: 'WildHacks 2026 Opening Ceremony',
    start: new Date('2026-04-05T10:00:00-05:00'), // 10:00 AM CT
    end: new Date('2026-04-05T10:45:00-05:00'), // 10:45 AM CT
    location: 'LR2',
  },
  {
    title: 'Hacking Starts',
    description: 'The hackathon officially begins!',
    start: new Date('2026-04-05T10:45:00-05:00'), // 10:45 AM CT
    end: new Date('2026-04-05T10:45:00-05:00'), // 10:45 AM CT
    location: 'Mudd Library & Technological Institute',
  },
  {
    title: 'Team Formation Event',
    description: 'Find teammates for your hackathon project',
    start: new Date('2026-04-05T10:45:00-05:00'), // 10:45 AM CT
    end: new Date('2026-04-05T11:15:00-05:00'), // 11:15 AM CT
    location: 'TCH L160',
  },
  {
    title: 'Lunch from Tomate Fresh Kitchen',
    description: 'Saturday lunch provided by Tomate Fresh Kitchen',
    start: new Date('2026-04-05T12:30:00-05:00'), // 12:30 PM CT
    end: new Date('2026-04-05T13:00:00-05:00'), // 1:00 PM CT
    location: 'Mudd 1st Floor',
    url: '/logistics/meal-options/#saturday-lunch-from-tomate',
  },
  {
    title: "Dinner from Papa John's Pizza",
    description: "Saturday dinner provided by Papa John's Pizza",
    start: new Date('2026-04-05T18:30:00-05:00'), // 6:30 PM CT
    end: new Date('2026-04-05T19:30:00-05:00'), // 7:30 PM CT
    location: 'Mudd 1st Floor',
    url: '/logistics/meal-options/#saturday-dinner-from-papa-johns-pizza',
  },
  {
    title: '!Light Event with MLH',
    description: 'Social event with MLH',
    start: new Date('2026-04-05T20:30:00-05:00'), // 8:30 PM CT
    end: new Date('2026-04-05T21:30:00-05:00'), // 9:30 PM CT
    location: 'TCH L3',
    url: 'https://guide.mlh.io/organizer-resources/host-exciting-mini-events/mlh-mini-events/light',
  },
  {
    title: 'Movie Night!',
    description: 'Social event: Movie Night',
    start: new Date('2026-04-05T22:00:00-05:00'), // 10:00 PM CT
    end: new Date('2026-04-06T00:00:00-05:00'), // 12:00 AM CT
    location: 'TCH L3',
  },

  // Sunday, April 6, 2026 - Hackathon Day 2
  {
    title: 'Breakfast from Einstein Bros. Bagels',
    description: 'Sunday breakfast provided by Einstein Bros. Bagels',
    start: new Date('2026-04-06T09:30:00-05:00'), // 9:30 AM CT
    end: new Date('2026-04-06T10:30:00-05:00'), // 10:30 AM CT
    location: 'Mudd 1st Floor',
    url: '/logistics/meal-options/#sunday-breakfast-from-einstein-bros-bagels',
  },
  {
    title: 'Crowd Favorite Sign Up Deadline',
    description: 'Deadline to sign up for Crowd Favorite',
    start: new Date('2026-04-06T12:00:00-05:00'), // 12:00 PM CT
    end: new Date('2026-04-06T12:00:00-05:00'), // 12:00 PM CT
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdwWrmkcKbn_u0COXQt8rwsjepOIDNPRFnnHTIMcFCVKKHwFA/viewform?usp=sf_link',
  },
  {
    title: 'Lunch from 10Q Chicken',
    description: 'Sunday lunch provided by 10Q Chicken',
    start: new Date('2026-04-06T12:30:00-05:00'), // 12:30 PM CT
    end: new Date('2026-04-06T13:30:00-05:00'), // 1:30 PM CT
    location: 'Mudd 1st Floor',
    url: '/logistics/meal-options/#sunday-lunch-from-10q-chicken',
  },
  {
    title: 'Submissions Due and Hacking Ends',
    description:
      'All project submissions must be submitted by this time. Hacking officially ends.',
    start: new Date('2026-04-06T13:00:00-05:00'), // 1:00 PM CT
    end: new Date('2026-04-06T13:00:00-05:00'), // 1:00 PM CT
    url: '/project-guidelines/submission',
  },
  {
    title: 'Round 1 of Track Judging',
    description: 'Initial judging round for track awards',
    start: new Date('2026-04-06T13:45:00-05:00'), // 1:45 PM CT
    end: new Date('2026-04-06T14:30:00-05:00'), // 2:30 PM CT
    url: '/judging-and-awards/how-judging-works/#round-1---initial-judging',
  },
  {
    title: 'Crowd Favorite Presentations',
    description: 'Crowd Favorite project presentations',
    start: new Date('2026-04-06T13:45:00-05:00'), // 1:45 PM CT
    end: new Date('2026-04-06T14:30:00-05:00'), // 2:30 PM CT
    location: 'LR2',
    url: '/judging-and-awards/how-judging-works/#crowd-favorite',
  },
  {
    title: 'Round 2 of Track Judging',
    description: 'Live presentations for final track judging',
    start: new Date('2026-04-06T14:45:00-05:00'), // 2:45 PM CT
    end: new Date('2026-04-06T16:15:00-05:00'), // 4:15 PM CT
    location: 'Tech Auditorium',
    url: '/judging-and-awards/how-judging-works/#round-2---live-presentations',
  },
  {
    title: 'Closing Ceremony',
    description: 'WildHacks 2026 Closing Ceremony and Awards',
    start: new Date('2026-04-06T16:30:00-05:00'), // 4:30 PM CT
    end: new Date('2026-04-06T17:00:00-05:00'), // 5:00 PM CT
    location: 'Tech Auditorium',
  },
];
