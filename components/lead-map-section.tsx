"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Map,
  MapClusterLayer,
  MapPopup,
  MapControls,
} from "@/components/ui/mapcn-map-cluster-layer";

interface LeadProperties {
  city: string;
  state: string;
  industry: string;
  status: "qualified" | "contacted" | "converted";
}

// Lead data spread across all 15 target states
const LEADS_GEOJSON: GeoJSON.FeatureCollection<GeoJSON.Point, LeadProperties> = {
  type: "FeatureCollection",
  features: [
    // New York
    { type: "Feature", properties: { city: "New York City", state: "NY", industry: "Healthcare", status: "converted" }, geometry: { type: "Point", coordinates: [-74.006, 40.7128] } },
    { type: "Feature", properties: { city: "Buffalo", state: "NY", industry: "Insurance", status: "qualified" }, geometry: { type: "Point", coordinates: [-78.8784, 42.8864] } },
    { type: "Feature", properties: { city: "Rochester", state: "NY", industry: "Real Estate", status: "contacted" }, geometry: { type: "Point", coordinates: [-77.6109, 43.1566] } },
    { type: "Feature", properties: { city: "Albany", state: "NY", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-73.7562, 42.6526] } },
    { type: "Feature", properties: { city: "Yonkers", state: "NY", industry: "Automotive", status: "qualified" }, geometry: { type: "Point", coordinates: [-73.8988, 40.9312] } },
    { type: "Feature", properties: { city: "Syracuse", state: "NY", industry: "Legal", status: "contacted" }, geometry: { type: "Point", coordinates: [-76.1474, 43.0481] } },
    { type: "Feature", properties: { city: "Long Island City", state: "NY", industry: "Healthcare", status: "converted" }, geometry: { type: "Point", coordinates: [-73.9442, 40.7447] } },
    { type: "Feature", properties: { city: "White Plains", state: "NY", industry: "Finance", status: "qualified" }, geometry: { type: "Point", coordinates: [-73.7629, 41.0340] } },
    // Connecticut
    { type: "Feature", properties: { city: "Hartford", state: "CT", industry: "Insurance", status: "converted" }, geometry: { type: "Point", coordinates: [-72.6851, 41.7658] } },
    { type: "Feature", properties: { city: "New Haven", state: "CT", industry: "Healthcare", status: "qualified" }, geometry: { type: "Point", coordinates: [-72.9279, 41.3082] } },
    { type: "Feature", properties: { city: "Bridgeport", state: "CT", industry: "Real Estate", status: "contacted" }, geometry: { type: "Point", coordinates: [-73.1952, 41.1865] } },
    { type: "Feature", properties: { city: "Stamford", state: "CT", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-73.5387, 41.0534] } },
    { type: "Feature", properties: { city: "Waterbury", state: "CT", industry: "Automotive", status: "qualified" }, geometry: { type: "Point", coordinates: [-73.0515, 41.5582] } },
    // Massachusetts
    { type: "Feature", properties: { city: "Boston", state: "MA", industry: "Healthcare", status: "converted" }, geometry: { type: "Point", coordinates: [-71.0589, 42.3601] } },
    { type: "Feature", properties: { city: "Worcester", state: "MA", industry: "Legal", status: "qualified" }, geometry: { type: "Point", coordinates: [-71.8023, 42.2626] } },
    { type: "Feature", properties: { city: "Springfield", state: "MA", industry: "Insurance", status: "contacted" }, geometry: { type: "Point", coordinates: [-72.5898, 42.1015] } },
    { type: "Feature", properties: { city: "Cambridge", state: "MA", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-71.1097, 42.3736] } },
    { type: "Feature", properties: { city: "Lowell", state: "MA", industry: "Real Estate", status: "qualified" }, geometry: { type: "Point", coordinates: [-71.3161, 42.6334] } },
    { type: "Feature", properties: { city: "Quincy", state: "MA", industry: "Healthcare", status: "converted" }, geometry: { type: "Point", coordinates: [-71.0023, 42.2529] } },
    // Ohio
    { type: "Feature", properties: { city: "Columbus", state: "OH", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-82.9988, 39.9612] } },
    { type: "Feature", properties: { city: "Cleveland", state: "OH", industry: "Healthcare", status: "qualified" }, geometry: { type: "Point", coordinates: [-81.6944, 41.4993] } },
    { type: "Feature", properties: { city: "Cincinnati", state: "OH", industry: "Legal", status: "converted" }, geometry: { type: "Point", coordinates: [-84.5120, 39.1031] } },
    { type: "Feature", properties: { city: "Toledo", state: "OH", industry: "Automotive", status: "contacted" }, geometry: { type: "Point", coordinates: [-83.5552, 41.6641] } },
    { type: "Feature", properties: { city: "Akron", state: "OH", industry: "Insurance", status: "qualified" }, geometry: { type: "Point", coordinates: [-81.5190, 41.0814] } },
    { type: "Feature", properties: { city: "Dayton", state: "OH", industry: "Real Estate", status: "converted" }, geometry: { type: "Point", coordinates: [-84.1916, 39.7589] } },
    { type: "Feature", properties: { city: "Youngstown", state: "OH", industry: "Healthcare", status: "contacted" }, geometry: { type: "Point", coordinates: [-80.6495, 41.0998] } },
    // Kentucky
    { type: "Feature", properties: { city: "Louisville", state: "KY", industry: "Healthcare", status: "converted" }, geometry: { type: "Point", coordinates: [-85.7585, 38.2527] } },
    { type: "Feature", properties: { city: "Lexington", state: "KY", industry: "Finance", status: "qualified" }, geometry: { type: "Point", coordinates: [-84.4947, 38.0406] } },
    { type: "Feature", properties: { city: "Bowling Green", state: "KY", industry: "Automotive", status: "contacted" }, geometry: { type: "Point", coordinates: [-86.4433, 36.9685] } },
    { type: "Feature", properties: { city: "Owensboro", state: "KY", industry: "Insurance", status: "converted" }, geometry: { type: "Point", coordinates: [-87.1134, 37.7719] } },
    // Florida
    { type: "Feature", properties: { city: "Miami", state: "FL", industry: "Real Estate", status: "converted" }, geometry: { type: "Point", coordinates: [-80.1918, 25.7617] } },
    { type: "Feature", properties: { city: "Orlando", state: "FL", industry: "Healthcare", status: "qualified" }, geometry: { type: "Point", coordinates: [-81.3792, 28.5383] } },
    { type: "Feature", properties: { city: "Tampa", state: "FL", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-82.4572, 27.9506] } },
    { type: "Feature", properties: { city: "Jacksonville", state: "FL", industry: "Legal", status: "contacted" }, geometry: { type: "Point", coordinates: [-81.6557, 30.3322] } },
    { type: "Feature", properties: { city: "Fort Lauderdale", state: "FL", industry: "Insurance", status: "converted" }, geometry: { type: "Point", coordinates: [-80.1428, 26.1224] } },
    { type: "Feature", properties: { city: "St. Petersburg", state: "FL", industry: "Real Estate", status: "qualified" }, geometry: { type: "Point", coordinates: [-82.6403, 27.7676] } },
    { type: "Feature", properties: { city: "Tallahassee", state: "FL", industry: "Healthcare", status: "contacted" }, geometry: { type: "Point", coordinates: [-84.2807, 30.4383] } },
    { type: "Feature", properties: { city: "Hialeah", state: "FL", industry: "Automotive", status: "converted" }, geometry: { type: "Point", coordinates: [-80.2788, 25.8576] } },
    // Georgia
    { type: "Feature", properties: { city: "Atlanta", state: "GA", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-84.3880, 33.7490] } },
    { type: "Feature", properties: { city: "Augusta", state: "GA", industry: "Healthcare", status: "qualified" }, geometry: { type: "Point", coordinates: [-81.9748, 33.4735] } },
    { type: "Feature", properties: { city: "Savannah", state: "GA", industry: "Real Estate", status: "converted" }, geometry: { type: "Point", coordinates: [-81.0998, 32.0835] } },
    { type: "Feature", properties: { city: "Columbus", state: "GA", industry: "Legal", status: "contacted" }, geometry: { type: "Point", coordinates: [-84.9877, 32.4610] } },
    { type: "Feature", properties: { city: "Macon", state: "GA", industry: "Insurance", status: "qualified" }, geometry: { type: "Point", coordinates: [-83.6324, 32.8407] } },
    { type: "Feature", properties: { city: "Alpharetta", state: "GA", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-84.2941, 34.0754] } },
    // Indiana
    { type: "Feature", properties: { city: "Indianapolis", state: "IN", industry: "Healthcare", status: "converted" }, geometry: { type: "Point", coordinates: [-86.1581, 39.7684] } },
    { type: "Feature", properties: { city: "Fort Wayne", state: "IN", industry: "Automotive", status: "qualified" }, geometry: { type: "Point", coordinates: [-85.1394, 41.1306] } },
    { type: "Feature", properties: { city: "Evansville", state: "IN", industry: "Insurance", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.5711, 37.9716] } },
    { type: "Feature", properties: { city: "South Bend", state: "IN", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-86.2520, 41.6764] } },
    { type: "Feature", properties: { city: "Carmel", state: "IN", industry: "Real Estate", status: "qualified" }, geometry: { type: "Point", coordinates: [-86.1180, 39.9784] } },
    // Illinois
    { type: "Feature", properties: { city: "Chicago", state: "IL", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-87.6298, 41.8781] } },
    { type: "Feature", properties: { city: "Aurora", state: "IL", industry: "Healthcare", status: "qualified" }, geometry: { type: "Point", coordinates: [-88.3201, 41.7606] } },
    { type: "Feature", properties: { city: "Rockford", state: "IL", industry: "Automotive", status: "contacted" }, geometry: { type: "Point", coordinates: [-89.0940, 42.2711] } },
    { type: "Feature", properties: { city: "Joliet", state: "IL", industry: "Legal", status: "converted" }, geometry: { type: "Point", coordinates: [-88.0817, 41.5250] } },
    { type: "Feature", properties: { city: "Naperville", state: "IL", industry: "Insurance", status: "qualified" }, geometry: { type: "Point", coordinates: [-88.1535, 41.7858] } },
    { type: "Feature", properties: { city: "Springfield", state: "IL", industry: "Real Estate", status: "converted" }, geometry: { type: "Point", coordinates: [-89.6501, 39.7817] } },
    { type: "Feature", properties: { city: "Peoria", state: "IL", industry: "Healthcare", status: "contacted" }, geometry: { type: "Point", coordinates: [-89.5890, 40.6936] } },
    // Texas
    { type: "Feature", properties: { city: "Houston", state: "TX", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-95.3698, 29.7604] } },
    { type: "Feature", properties: { city: "Dallas", state: "TX", industry: "Real Estate", status: "converted" }, geometry: { type: "Point", coordinates: [-96.7970, 32.7767] } },
    { type: "Feature", properties: { city: "San Antonio", state: "TX", industry: "Healthcare", status: "qualified" }, geometry: { type: "Point", coordinates: [-98.4936, 29.4241] } },
    { type: "Feature", properties: { city: "Austin", state: "TX", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-97.7431, 30.2672] } },
    { type: "Feature", properties: { city: "Fort Worth", state: "TX", industry: "Automotive", status: "contacted" }, geometry: { type: "Point", coordinates: [-97.3308, 32.7555] } },
    { type: "Feature", properties: { city: "El Paso", state: "TX", industry: "Legal", status: "qualified" }, geometry: { type: "Point", coordinates: [-106.4850, 31.7619] } },
    { type: "Feature", properties: { city: "Lubbock", state: "TX", industry: "Insurance", status: "converted" }, geometry: { type: "Point", coordinates: [-101.8552, 33.5779] } },
    { type: "Feature", properties: { city: "Plano", state: "TX", industry: "Finance", status: "qualified" }, geometry: { type: "Point", coordinates: [-96.6989, 33.0198] } },
    // Nevada
    { type: "Feature", properties: { city: "Las Vegas", state: "NV", industry: "Hospitality", status: "converted" }, geometry: { type: "Point", coordinates: [-115.1398, 36.1699] } },
    { type: "Feature", properties: { city: "Reno", state: "NV", industry: "Finance", status: "qualified" }, geometry: { type: "Point", coordinates: [-119.8138, 39.5296] } },
    { type: "Feature", properties: { city: "Henderson", state: "NV", industry: "Real Estate", status: "converted" }, geometry: { type: "Point", coordinates: [-114.9817, 36.0395] } },
    { type: "Feature", properties: { city: "North Las Vegas", state: "NV", industry: "Healthcare", status: "contacted" }, geometry: { type: "Point", coordinates: [-115.1175, 36.1989] } },
    // Oklahoma
    { type: "Feature", properties: { city: "Oklahoma City", state: "OK", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-97.5164, 35.4676] } },
    { type: "Feature", properties: { city: "Tulsa", state: "OK", industry: "Legal", status: "qualified" }, geometry: { type: "Point", coordinates: [-95.9928, 36.1540] } },
    { type: "Feature", properties: { city: "Norman", state: "OK", industry: "Healthcare", status: "contacted" }, geometry: { type: "Point", coordinates: [-97.4395, 35.2226] } },
    { type: "Feature", properties: { city: "Broken Arrow", state: "OK", industry: "Insurance", status: "converted" }, geometry: { type: "Point", coordinates: [-95.7908, 36.0609] } },
    // Utah
    { type: "Feature", properties: { city: "Salt Lake City", state: "UT", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-111.8910, 40.7608] } },
    { type: "Feature", properties: { city: "West Valley City", state: "UT", industry: "Healthcare", status: "qualified" }, geometry: { type: "Point", coordinates: [-112.0011, 40.6916] } },
    { type: "Feature", properties: { city: "Provo", state: "UT", industry: "Real Estate", status: "converted" }, geometry: { type: "Point", coordinates: [-111.6585, 40.2338] } },
    { type: "Feature", properties: { city: "Ogden", state: "UT", industry: "Automotive", status: "contacted" }, geometry: { type: "Point", coordinates: [-111.9738, 41.2230] } },
    // California
    { type: "Feature", properties: { city: "Los Angeles", state: "CA", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-118.2437, 34.0522] } },
    { type: "Feature", properties: { city: "San Francisco", state: "CA", industry: "Healthcare", status: "converted" }, geometry: { type: "Point", coordinates: [-122.4194, 37.7749] } },
    { type: "Feature", properties: { city: "San Diego", state: "CA", industry: "Legal", status: "qualified" }, geometry: { type: "Point", coordinates: [-117.1611, 32.7157] } },
    { type: "Feature", properties: { city: "San Jose", state: "CA", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-121.8863, 37.3382] } },
    { type: "Feature", properties: { city: "Sacramento", state: "CA", industry: "Real Estate", status: "qualified" }, geometry: { type: "Point", coordinates: [-121.4944, 38.5816] } },
    { type: "Feature", properties: { city: "Fresno", state: "CA", industry: "Automotive", status: "contacted" }, geometry: { type: "Point", coordinates: [-119.7871, 36.7378] } },
    { type: "Feature", properties: { city: "Oakland", state: "CA", industry: "Insurance", status: "converted" }, geometry: { type: "Point", coordinates: [-122.2711, 37.8044] } },
    { type: "Feature", properties: { city: "Long Beach", state: "CA", industry: "Healthcare", status: "qualified" }, geometry: { type: "Point", coordinates: [-118.1937, 33.7701] } },
    // Oregon
    { type: "Feature", properties: { city: "Portland", state: "OR", industry: "Finance", status: "converted" }, geometry: { type: "Point", coordinates: [-122.6765, 45.5051] } },
    { type: "Feature", properties: { city: "Salem", state: "OR", industry: "Healthcare", status: "qualified" }, geometry: { type: "Point", coordinates: [-123.0351, 44.9429] } },
    { type: "Feature", properties: { city: "Eugene", state: "OR", industry: "Legal", status: "contacted" }, geometry: { type: "Point", coordinates: [-123.0868, 44.0521] } },
    { type: "Feature", properties: { city: "Gresham", state: "OR", industry: "Real Estate", status: "converted" }, geometry: { type: "Point", coordinates: [-122.4302, 45.5001] } },
    { type: "Feature", properties: { city: "Bend", state: "OR", industry: "Insurance", status: "qualified" }, geometry: { type: "Point", coordinates: [-121.3153, 44.0582] } },

    // ── Home Services Leads ────────────────────────────────────────────────
    // Chicago — 17 Solar Leads (city neighborhoods)
    { type: "Feature", properties: { city: "Lincoln Park", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.6469, 41.9214] } },
    { type: "Feature", properties: { city: "Wicker Park", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.6762, 41.9085] } },
    { type: "Feature", properties: { city: "Logan Square", state: "IL", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.7031, 41.9217] } },
    { type: "Feature", properties: { city: "Hyde Park", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.5931, 41.7943] } },
    { type: "Feature", properties: { city: "Pilsen", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.6590, 41.8556] } },
    { type: "Feature", properties: { city: "Bridgeport", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.6464, 41.8356] } },
    { type: "Feature", properties: { city: "Andersonville", state: "IL", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.6651, 41.9756] } },
    { type: "Feature", properties: { city: "Edgewater", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.6596, 41.9886] } },
    { type: "Feature", properties: { city: "Rogers Park", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.6649, 42.0126] } },
    { type: "Feature", properties: { city: "Uptown", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.6565, 41.9651] } },
    { type: "Feature", properties: { city: "Lakeview", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.6530, 41.9434] } },
    { type: "Feature", properties: { city: "Ravenswood", state: "IL", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.6742, 41.9726] } },
    { type: "Feature", properties: { city: "Avondale", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.7133, 41.9403] } },
    { type: "Feature", properties: { city: "Irving Park", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.7241, 41.9521] } },
    { type: "Feature", properties: { city: "Portage Park", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.7675, 41.9579] } },
    { type: "Feature", properties: { city: "Jefferson Park", state: "IL", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.7992, 41.9710] } },
    { type: "Feature", properties: { city: "Norwood Park", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.8092, 41.9856] } },

    // Illinois — Northern IL: 18 Solar Leads
    { type: "Feature", properties: { city: "Evanston", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.6877, 42.0450] } },
    { type: "Feature", properties: { city: "Waukegan", state: "IL", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.8448, 42.3636] } },
    { type: "Feature", properties: { city: "Schaumburg", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-88.0834, 42.0334] } },
    { type: "Feature", properties: { city: "Elgin", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-88.2826, 42.0354] } },
    { type: "Feature", properties: { city: "Palatine", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-88.0341, 42.1103] } },
    { type: "Feature", properties: { city: "Arlington Heights", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.9803, 42.0886] } },
    { type: "Feature", properties: { city: "Gurnee", state: "IL", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.9409, 42.3703] } },
    { type: "Feature", properties: { city: "Libertyville", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.9528, 42.2800] } },
    { type: "Feature", properties: { city: "Wheaton", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-88.1070, 41.8661] } },
    { type: "Feature", properties: { city: "Downers Grove", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-88.0112, 41.8081] } },
    { type: "Feature", properties: { city: "Bolingbrook", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-88.0684, 41.6986] } },
    { type: "Feature", properties: { city: "Orland Park", state: "IL", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.8537, 41.6303] } },
    { type: "Feature", properties: { city: "Tinley Park", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.7860, 41.5731] } },
    { type: "Feature", properties: { city: "Oak Lawn", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.7479, 41.7197] } },
    { type: "Feature", properties: { city: "Cicero", state: "IL", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.7539, 41.8456] } },
    { type: "Feature", properties: { city: "Oak Park", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.7845, 41.8850] } },
    { type: "Feature", properties: { city: "Skokie", state: "IL", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.7334, 42.0334] } },
    { type: "Feature", properties: { city: "Des Plaines", state: "IL", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.8834, 42.0500] } },

    // Indiana — 10 Solar & Roofing Leads
    { type: "Feature", properties: { city: "Hammond", state: "IN", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-87.5001, 41.5834] } },
    { type: "Feature", properties: { city: "Gary", state: "IN", industry: "Roofing", status: "qualified" }, geometry: { type: "Point", coordinates: [-87.3464, 41.5931] } },
    { type: "Feature", properties: { city: "Merrillville", state: "IN", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.3320, 41.4731] } },
    { type: "Feature", properties: { city: "Michigan City", state: "IN", industry: "Roofing", status: "converted" }, geometry: { type: "Point", coordinates: [-86.8950, 41.7075] } },
    { type: "Feature", properties: { city: "Lafayette", state: "IN", industry: "Solar", status: "qualified" }, geometry: { type: "Point", coordinates: [-86.8753, 40.4167] } },
    { type: "Feature", properties: { city: "Muncie", state: "IN", industry: "Roofing", status: "contacted" }, geometry: { type: "Point", coordinates: [-85.3864, 40.1934] } },
    { type: "Feature", properties: { city: "Anderson", state: "IN", industry: "Solar", status: "converted" }, geometry: { type: "Point", coordinates: [-85.6802, 40.1053] } },
    { type: "Feature", properties: { city: "Kokomo", state: "IN", industry: "Roofing", status: "qualified" }, geometry: { type: "Point", coordinates: [-86.1336, 40.4864] } },
    { type: "Feature", properties: { city: "Terre Haute", state: "IN", industry: "Solar", status: "contacted" }, geometry: { type: "Point", coordinates: [-87.4139, 39.4667] } },
    { type: "Feature", properties: { city: "Bloomington", state: "IN", industry: "Roofing", status: "converted" }, geometry: { type: "Point", coordinates: [-86.5264, 39.1653] } },

    // Kentucky — 6 Window Leads
    { type: "Feature", properties: { city: "Covington", state: "KY", industry: "Windows", status: "converted" }, geometry: { type: "Point", coordinates: [-84.5088, 39.0837] } },
    { type: "Feature", properties: { city: "Florence", state: "KY", industry: "Windows", status: "qualified" }, geometry: { type: "Point", coordinates: [-84.6274, 38.9987] } },
    { type: "Feature", properties: { city: "Newport", state: "KY", industry: "Windows", status: "contacted" }, geometry: { type: "Point", coordinates: [-84.4958, 39.0920] } },
    { type: "Feature", properties: { city: "Elizabethtown", state: "KY", industry: "Windows", status: "converted" }, geometry: { type: "Point", coordinates: [-85.8591, 37.6939] } },
    { type: "Feature", properties: { city: "Frankfort", state: "KY", industry: "Windows", status: "qualified" }, geometry: { type: "Point", coordinates: [-84.8733, 38.2009] } },
    { type: "Feature", properties: { city: "Hopkinsville", state: "KY", industry: "Windows", status: "converted" }, geometry: { type: "Point", coordinates: [-87.4886, 36.8656] } },

    // Ohio — 6 Window Leads
    { type: "Feature", properties: { city: "Hamilton", state: "OH", industry: "Windows", status: "converted" }, geometry: { type: "Point", coordinates: [-84.5613, 39.3995] } },
    { type: "Feature", properties: { city: "Middletown", state: "OH", industry: "Windows", status: "qualified" }, geometry: { type: "Point", coordinates: [-84.3983, 39.5153] } },
    { type: "Feature", properties: { city: "Springfield", state: "OH", industry: "Windows", status: "contacted" }, geometry: { type: "Point", coordinates: [-83.8088, 39.9242] } },
    { type: "Feature", properties: { city: "Mansfield", state: "OH", industry: "Windows", status: "converted" }, geometry: { type: "Point", coordinates: [-82.5154, 40.7584] } },
    { type: "Feature", properties: { city: "Lima", state: "OH", industry: "Windows", status: "qualified" }, geometry: { type: "Point", coordinates: [-84.1052, 40.7420] } },
    { type: "Feature", properties: { city: "Canton", state: "OH", industry: "Windows", status: "converted" }, geometry: { type: "Point", coordinates: [-81.3784, 40.7989] } },

    // Remaining Home Services — mixed states
    { type: "Feature", properties: { city: "Garland", state: "TX", industry: "HVAC", status: "qualified" }, geometry: { type: "Point", coordinates: [-96.6389, 32.9126] } },
    { type: "Feature", properties: { city: "Clearwater", state: "FL", industry: "Roofing", status: "converted" }, geometry: { type: "Point", coordinates: [-82.8001, 27.9659] } },
    { type: "Feature", properties: { city: "Marietta", state: "GA", industry: "Siding", status: "contacted" }, geometry: { type: "Point", coordinates: [-84.5499, 33.9526] } },
    { type: "Feature", properties: { city: "Riverside", state: "CA", industry: "Remodeling", status: "qualified" }, geometry: { type: "Point", coordinates: [-117.3961, 33.9533] } },
    { type: "Feature", properties: { city: "Summerlin", state: "NV", industry: "HVAC", status: "converted" }, geometry: { type: "Point", coordinates: [-115.2750, 36.1716] } },
    { type: "Feature", properties: { city: "Hillsboro", state: "OR", industry: "Plumbing", status: "qualified" }, geometry: { type: "Point", coordinates: [-122.9898, 45.5229] } },
    { type: "Feature", properties: { city: "Hempstead", state: "NY", industry: "Siding", status: "contacted" }, geometry: { type: "Point", coordinates: [-73.6187, 40.7062] } },
  ],
};

const STATUS_COLORS = {
  qualified: "#4D7EFF",
  contacted: "#a78bfa",
  converted: "#22c55e",
};

const STATUS_LABELS = {
  qualified: "Qualified",
  contacted: "Contacted",
  converted: "Converted",
};

export default function LeadMapSection() {
  const [selectedPoint, setSelectedPoint] = useState<{
    coordinates: [number, number];
    properties: LeadProperties;
  } | null>(null);

  return (
    <section className="relative w-full bg-[#060606] border-t border-white/5 overflow-hidden py-20 lg:py-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-[#4D7EFF]/30 bg-[#4D7EFF]/10 text-[#4D7EFF] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D7EFF] animate-ping" />
            Live Lead Activity
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
            Leads Generated
            <br />
            <span className="text-[#4D7EFF]">Across the Nation</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed">
            KovaCalls AI agents are qualifying and converting leads in real time
            across 15 states — from coast to coast.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-5 mt-8"
        >
          {(Object.entries(STATUS_COLORS) as [keyof typeof STATUS_COLORS, string][]).map(
            ([status, color]) => (
              <div key={status} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full border-2 border-white/20"
                  style={{ backgroundColor: color }}
                />
                <span className="text-white/50 text-xs uppercase tracking-wider font-medium">
                  {STATUS_LABELS[status]}
                </span>
              </div>
            ),
          )}
        </motion.div>
      </div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="h-[480px] md:h-[560px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
          <Map
            center={[-96, 38]}
            zoom={3.6}
            fadeDuration={0}
            theme="dark"
          >
            <MapClusterLayer<LeadProperties>
              data={LEADS_GEOJSON}
              clusterRadius={40}
              clusterMaxZoom={8}
              clusterColors={["#4D7EFF", "#a78bfa", "#22c55e"]}
              clusterThresholds={[10, 30]}
              pointColor="#4D7EFF"
              onPointClick={(feature, coordinates) =>
                setSelectedPoint({ coordinates, properties: feature.properties })
              }
            />

            {selectedPoint && (
              <MapPopup
                key={`${selectedPoint.coordinates[0]}-${selectedPoint.coordinates[1]}`}
                longitude={selectedPoint.coordinates[0]}
                latitude={selectedPoint.coordinates[1]}
                onClose={() => setSelectedPoint(null)}
                closeOnClick={false}
                focusAfterOpen={false}
                closeButton
                className="!bg-[#111] !border-white/10 !text-white min-w-[160px]"
              >
                <div className="space-y-1.5 text-[13px] pt-1">
                  <p className="font-bold text-white text-sm">
                    {selectedPoint.properties.city},{" "}
                    {selectedPoint.properties.state}
                  </p>
                  <p className="text-white/50">
                    Industry:{" "}
                    <span className="text-white/80">
                      {selectedPoint.properties.industry}
                    </span>
                  </p>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor:
                          STATUS_COLORS[selectedPoint.properties.status],
                      }}
                    />
                    <span
                      style={{
                        color: STATUS_COLORS[selectedPoint.properties.status],
                      }}
                      className="text-xs font-semibold uppercase tracking-wide"
                    >
                      {STATUS_LABELS[selectedPoint.properties.status]}
                    </span>
                  </div>
                </div>
              </MapPopup>
            )}

            <MapControls position="bottom-right" showZoom />
          </Map>
        </div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-3 gap-4 md:gap-8"
      >
        {[
          { value: "15", label: "States Active" },
          { value: "130+", label: "Cities Covered" },
          { value: "94%", label: "Lead Qualification Rate" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-3xl md:text-4xl font-black text-white tracking-tighter">
              {value}
            </p>
            <p className="text-white/35 text-xs uppercase tracking-widest font-medium mt-1">
              {label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
