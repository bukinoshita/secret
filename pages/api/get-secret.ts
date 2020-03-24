import { NowRequest, NowResponse } from '@now/node'
import { api } from 'utils/api'

export default async (
  request: NowRequest,
  response: NowResponse
): Promise<void> => {
  const { id, password } = request.query
  const {
    data: { iv, cipherText }
  } = await api.get(
    `${process.env.API_URL}/api/secret/get?id=${id}&password=${password}`
  )

  response.status(201).send({ iv, cipherText })
}
