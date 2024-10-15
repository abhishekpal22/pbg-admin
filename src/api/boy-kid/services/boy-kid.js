'use strict';

/**
 * boy-kid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boy-kid.boy-kid');
