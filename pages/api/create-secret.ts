import { NowRequest, NowResponse } from '@now/node'

export default async (request: NowRequest, response: NowResponse) => {
  const { iv, cipherText } = request.body
  // const {
  //   data: { id }
  // } = await api.post('http://localhost:3000/api/secret/create', { iv, cipherText })

  console.log({ iv, cipherText })

  response.status(201).send({ id: 'ec9c6ec0-2c30-47e2-b001-52e1fbf1ed0f' })
}
