import express from 'express'
const rChat = express.Router()

rChat.post('/direct', async (req: express.Request, res: express.Response) => {
  const { user, message, color, target } = req.body

  if (!user || !message) {
    res.sendStatus(400)
    return
  }

  const resp = await gClient.Chat.directMessage(user, message, color, target)
  res.send(resp)
})

rChat.post('/map', async (req: express.Request, res: express.Response) => {
  const { mapId, message, color, target } = req.body

  if (!mapId || !message) {
    res.sendStatus(400)
    return
  }

  const resp = await gClient.Chat.proximityMessage(mapId, message, color, target)
  res.send(resp)
})

rChat.post('/global', async (req: express.Request, res: express.Response) => {
  const { message, color, target } = req.body

  if (!message) {
    res.sendStatus(400)
    return
  }

  const resp = await gClient.Chat.globalMessage(message, color, target)
  res.send(resp)
})

export default rChat
