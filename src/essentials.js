import configuration from '../config'; // <-- Configuration file

const Essentials = {
  env: (process.env.NODE_ENV || 'production').trim(),
  port: (configuration.port || process.env.PORT || 3000)
}
module.exports = Essentials;
