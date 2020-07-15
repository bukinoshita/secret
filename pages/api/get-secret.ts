import { NextApiRequest, NextApiResponse } from 'next'

import { api } from 'utils/api'

const getSecret = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  const { id, password } = request.query
  const {
    data: { iv, cipherText },
  } = await api.get(
    `${process.env.API_URL}/api/secret/get?id=${id}&password=${password}`
  )

  response.status(201).json({ iv, cipherText })
}

export default getSecret
