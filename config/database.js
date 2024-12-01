const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite'); // Ensure 'postgres' is the client being used

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        // Use connectionString if you want to configure it directly from DATABASE_URL, or use individual connection properties
        connectionString: env('DATABASE_URL'), // Preferably use DATABASE_URL if you're using an external provider
        host: env('DATABASE_HOST', 'localhost'), // Default to localhost for local development
        port: env.int('DATABASE_PORT', 5432), // Default port for PostgreSQL
        database: env('DATABASE_NAME', 'pbg'), // Replace 'strapi' with your DB name
        user: env('DATABASE_USERNAME', 'postgres'), // PostgreSQL username (default: 'postgres')
        password: env('DATABASE_PASSWORD', 'Aa12345@'), // Replace with your password
        ssl: env.bool('DATABASE_SSL', false) && { // If you need SSL (for production environments)
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
        },
        schema: env('DATABASE_SCHEMA', 'public'), // Default schema is public
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) }, // Connection pool settings
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client, // Ensures the correct client is used (postgres in this case)
      ...connections[client], // Selects the corresponding config for the client (postgres here)
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000), // Timeout for acquiring connections
    },
  };
};
