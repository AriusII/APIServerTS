import express from 'express'
const rAdmin = express.Router()

//#region Players Actions

rAdmin.post(
  '/ban-player',
  async (req: express.Request, res: express.Response) => {
    const { player, duration, reason, moderator, ip } = req.body

    if (!player || !duration || !reason || !moderator || ip === undefined) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.banPlayer(
      player,
      duration,
      reason,
      moderator,
      ip
    )

    res.send(resp)
  }
)

rAdmin.post(
  '/mute-player',
  async (req: express.Request, res: express.Response) => {
    const { player, duration, reason, moderator, ip } = req.body

    if (!player || !duration || !reason || !moderator || ip === undefined) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.mutePlayer(
      player,
      duration,
      reason,
      moderator,
      ip
    )

    res.send(resp)
  }
)

rAdmin.post(
  '/kick-player',
  async (req: express.Request, res: express.Response) => {
    const { player } = req.body

    if (!player) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.kickPlayer(player)
    res.send(resp)
  }
)

rAdmin.post(
  '/kill-player',
  async (req: express.Request, res: express.Response) => {
    const { player } = req.body

    if (!player) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.killPlayer(player)
    res.send(resp)
  }
)

rAdmin.post(
  '/warp-player',
  async (req: express.Request, res: express.Response) => {
    const { player, mapId } = req.body

    if (!player || !mapId) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.playerWarpTo(player, mapId)
    res.send(resp)
  }
)

rAdmin.post(
  '/warp-player-location',
  async (req: express.Request, res: express.Response) => {
    const { player, mapId, x, y } = req.body

    if (!player || !mapId || !x || !y) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.playerWarpToLoc(player, mapId, x, y)
    res.send(resp)
  }
)

//#endregion

//#region Users Actions

rAdmin.post(
  '/ban-user',
  async (req: express.Request, res: express.Response) => {
    const { user, duration, reason, moderator, ip } = req.body

    if (!user || !duration || !reason || !moderator || ip === undefined) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.banUser(
      user,
      duration,
      reason,
      moderator,
      ip
    )

    res.send(resp)
  }
)

rAdmin.post(
  '/mute-user',
  async (req: express.Request, res: express.Response) => {
    const { user, duration, reason, moderator, ip } = req.body

    if (!user || !duration || !reason || !moderator || ip === undefined) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.muteUser(
      user,
      duration,
      reason,
      moderator,
      ip
    )

    res.send(resp)
  }
)

rAdmin.post(
  '/unban-user',
  async (req: express.Request, res: express.Response) => {
    const { user } = req.body

    if (!user) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.unbanUser(user)
    res.send(resp)
  }
)

rAdmin.post(
  '/unmute-user',
  async (req: express.Request, res: express.Response) => {
    const { user } = req.body

    if (!user) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.unmuteUser(user)
    res.send(resp)
  }
)

rAdmin.post(
  '/kick-user',
  async (req: express.Request, res: express.Response) => {
    const { user } = req.body

    if (!user) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.kickUser(user)
    res.send(resp)
  }
)

rAdmin.post(
  '/kill-user',
  async (req: express.Request, res: express.Response) => {
    const { user } = req.body

    if (!user) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.killUser(user)
    res.send(resp)
  }
)

rAdmin.post(
  '/warp-user',
  async (req: express.Request, res: express.Response) => {
    const { user, mapId } = req.body

    if (!user || !mapId) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.userWarpTo(user, mapId)
    res.send(resp)
  }
)

rAdmin.post(
  '/warp-user-location',
  async (req: express.Request, res: express.Response) => {
    const { user, mapId, x, y } = req.body

    if (!user || !mapId || !x || !y) {
      res.sendStatus(400)
      return
    }

    const resp = await gClient.Admin.userWarpToLoc(user, mapId, x, y)
    res.send(resp)
  }
)

//#endregion

export default rAdmin
