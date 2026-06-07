# Dataset Inventory

| Source                     | Grain    | Status           | Use                                |
| -------------------------- | -------- | ---------------- | ---------------------------------- |
| MAP travel-time surfaces   | 1km      | Usable           | Emergency transport access         |
| OpenStreetMap road network | Line     | Usable           | Road-network analysis              |
| Health-facility registries | Facility | Variable         | Facility locations and EmOC status |
| Ambulance-depot data       | Point    | Variable, sparse | Emergency transport coverage       |
| WorldPop population        | 100m     | Usable           | Population at risk                 |

## Required Properties

Travel-time methodology, road-network currency, facility EmOC status, ambulance availability, license.

## Rejection Rule

Rejected if travel-time or facility data methodology unverifiable.
