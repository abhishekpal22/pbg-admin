'use strict';

/**
 * customer-say service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-say.customer-say');
