import mqtt from 'mqtt'

export const getMqtt = async (req, res) => {
    try {
      console.log(req.body)
        const led = req.body.status
        const options = {
            clientId: 'API-MQTT',
            username: 'controllerMqtt',
            password: ''
          }
          const connectUrl = ''
          const client = mqtt.connect(connectUrl, options)
          client.on('connect', () => {
            console.log('Client connected by API:')
            // Subscribe
          })
          client.publish('', led.toString())
          
        return res.json(led)
    } catch (error) {
        return res.status(500).json(error)
    }
}