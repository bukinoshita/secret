import { NowRequest, NowResponse } from '@now/node'

import { api } from 'utils/api'

const createSecret = async (request: NowRequest, response: NowResponse) => {
  const { iv, cipherText, pwd } = request.body
  console.log(process.env.API_URL)
  const {
    data: { id }
  } = await api.post(`${process.env.API_URL}/api/secret/create`, {
    iv,
    cipherText,
    pwd
  })

  response.status(201).send({ id })
}

export default createSecret
