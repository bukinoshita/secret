import { NowRequest, NowResponse } from '@now/node'

export default async (
  _request: NowRequest,
  response: NowResponse
): Promise<void> => {
  // const { id } = request.query
  // const {
  //   data: { iv, cipherText }
  // } = await api.get(`http://localhost:3000/api/secret/get?id=${id}`)

  response.status(201).send({ iv: '', cipherText: '' })
}
