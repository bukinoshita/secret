import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from 'utils/supabase/supabase';

const getSecret = async (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  const { id } = request.query;

  const { data, error } = await supabase
    .from('secret')
    .update({ opened: true })
    .eq('id', id)
    .eq('opened', false);

  if (error) {
    return response.status(400).end();
  }

  response.json({ iv: data[0].iv, cipherText: data[0].cipher_text });
};
export default getSecret;
