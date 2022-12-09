const axios = require('axios')
const crypto = require('crypto')

class PreviewLinks {
    #API_BASE_URL = 'https://previewlinks.io/api/v1'

    #GENERATE_BASE_URL = 'https://previewlinks.io/generate'

    constructor({ apiToken }) {
        this.apiToken = apiToken
    }

    #http() {
        return axios.create({
            baseURL: this.#API_BASE_URL,
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this.apiToken}`,
            },
        })
    }

    signedImageUrl({ templateId, fields }) {
        const base64Fields = Buffer.from(JSON.stringify(fields)).toString('base64')

        const signature = crypto.createHmac('sha256', this.apiToken).update(base64Fields).digest('hex')

        return `${this.#GENERATE_BASE_URL}/templates/${templateId}/signed?fields=${base64Fields}&signature=${signature}`
    }

    listSites() {
        return this.#http().get('/sites')
    }

    showSite(siteId) {
        return this.#http().get(`/sites/${siteId}`)
    }

    listSiteTemplates(siteId) {
        return this.#http().get(`/sites/${siteId}/templates`)
    }

    /**
     * Returns a JSON response with a direct image URL
     */
    downloadImage({ siteId, templateId, fields }) {
        return this.#http().post(`/sites/${siteId}/templates/${templateId}/download`, { fields })
    }
}

module.exports = {
    PreviewLinks,
}
