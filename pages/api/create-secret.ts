import { NowRequest, NowResponse } from '@now/node'

export default async (_req: NowRequest, res: NowResponse) => {
  // const { iv, cipherText } = req.body
  // const {
  //   data: { id }
  // } = await api.post('http://localhost:3000/api/secret/create', { iv, cipherText })

  res.status(201).send({ id: 'ekjweniew93enkjdnw2nksa' })
}
