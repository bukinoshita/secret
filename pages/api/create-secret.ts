import { NextApiRequest, NextApiResponse } from 'next'

import { api } from 'utils/api'

const createSecret = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { iv, cipherText, pwd } = request.body
  const {
    data: { id },
  } = await api.post(`${process.env.API_URL}/api/secret/create`, {
    iv,
    cipherText,
    pwd,
  })

  response.status(201).json({ id })
}

export default createSecret
