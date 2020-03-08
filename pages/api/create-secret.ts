import { NowRequest, NowResponse } from '@now/node'

import { api } from '../../utils/api'

export default async (req: NowRequest, res: NowResponse) => {
  const { iv, cipherText } = req.body
  const {
    data: { id }
  } = await api.post('http://localhost:3000/api/secret/create', { iv, cipherText })

  res.status(201).send({ id })
}
