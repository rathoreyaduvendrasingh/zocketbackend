const Campaigns = require('../models/campaign.model')


const getCampaigns = async (req, res) => {
  try {
    const campaign = await Campaigns.find({})
    res.json(campaign)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

const createCampaigns = async (req, res) => {
  let { name, sdate, edate, location, platform, status, budget } = req.body

  try {
    const campaign = new Campaigns({
      name,
      sdate,
      edate,
      location,
      platform,
      status,
      budget,
    })

    const createdCampaign = await campaign.save()
    res.status(201).json(createdCampaign)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

const deleteCampaigns = async (req, res) => {
  try {
    const campaign = await Campaigns.findById(req.params.id)
    if (campaign) {
      await campaign.remove()
      res.json({ message: 'Campaign removed' })
    } else {
      console.error(error.message)
      res.status(500).send('Server Error')
    }
  } catch (error) {}
}

module.exports = { getCampaigns, createCampaigns, deleteCampaigns }