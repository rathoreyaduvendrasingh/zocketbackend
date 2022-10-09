const express = require('express')
const {
  getCampaigns,
  createCampaigns,
  deleteCampaigns,
} = require('./campaign.controller');

const router = express.Router()

router.route('/').get(getCampaigns).post(createCampaigns)
router.route('/:id').delete(deleteCampaigns)

module.exports = router