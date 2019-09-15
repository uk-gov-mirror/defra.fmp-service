const queries = require('./queries.json')
const conn = require('../../config').database.connectionString
const { Pool } = require('pg')
const pool = new Pool({
  connectionString: conn
});

module.exports = {
  getFloodZones: (x, y, radius) => {
    return pool.query(queries.getFloodZones, [x, y, radius])
  },
  getFloodZonesByPolygon: (polygon) => {
    return pool.query(queries.getFloodZonesByPolygon, [polygon])
  },
  isEngland: (x, y) => {
    return pool.query(queries.isEngland, [x, y])
  },
  getcustomerRequestInformationById: (id) => {
    return pool.query(queries.getcustomerRequestInformationById, [id])
  },
  getProduct4ReportType: (name) => {
    return pool.query(queries.getProduct4ReportType, [name])
  },
  getContentsCoastal: (isinland) => {
    if (!isinland)
      return pool.query(queries.getContentsCoastal);
    return pool.query(queries.getContentsInland);
  }
}