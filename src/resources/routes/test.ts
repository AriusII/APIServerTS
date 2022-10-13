import express from 'express'
const test = express.Router()

test.get('/', (req: express.Request, res: express.Response) => {
    res.send("respond with a resource 1")
})

export default test


// const router = express.Router();

// router.get('/ladder/:filter',[CheckJwt], LadderController.getByFilter);
// router.post('/ladder', [CheckJwt], LadderController.create)
// export { router as LadderRouter };
