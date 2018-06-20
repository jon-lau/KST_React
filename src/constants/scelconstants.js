/* This is the file where SCEL Dashboard will be defining constants. */

export const SCEL_SOLAR = 'Solar Irradiation';

export const CHART_CONST = {
  SCEL_SOLAR: 'Solar Irradiation',
  SCEL_PRESSURE: 'Pressure',
  SCEL_TEMP: 'Temperature',
  SCEL_BATT: 'Battery (V)',
  SCEL_LIFE: 'Uptime (m)',
  SCEL_HUMID: 'Humidity',
  SCEL_PANEL: 'Panel Voltage (V)',
  SCEL_WINDSPEED: 'Wind Speed' /* Not implemented Yet */,
};

export const TIME_DATA_KEY = "time";

export const WELCOME = 'Welcome to the Smart Campus Energy Lab';
export const HTTP_SUCCESS = 200;
export const DASHBOARD_V2 = 'SCEL Dashboard v2';

export const RED = 0;

export const MAX_DATA_POINTS = 8640;
export const LARGE_GRAPH_WIDTH = 600;
export const LARGE_GRAPH_HEIGHT = 300;
export const LARGE_GRAPH_FONT_SIZE = 24;

export const BUTTONCOLORS = ['red', 'orange', 'yellow','green', 'blue', 'teal', 'purple'];
export const DEFAULTZOOM = 0;
export const NOSETTINGS = 0;
export const NOSHARE = 0;
export const ACTIVESETTINGS = 1;
export const ACTIVESHARE = 1;
export const SETTINGS= 'Settings: ';
export const ZOOMSETTINGS= 'Zoom Settings: ';
export const SHARESETTINGS= 'Share Settings: ';

/* Graph Component */
export const GOOGLE_MAPS_URL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places';
export const HOLMES_HALL_LAT = 21.2969;
export const HOLMES_HALL_LONG = -157.81548;
export const ONE_SEC_DELAY = 1000;
export const PRESET_ZOOM_PARAM = 17; /* Can change depending on how zoomed out we want to be */