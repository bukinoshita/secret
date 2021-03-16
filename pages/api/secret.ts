import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from 'utils/supabase/supabase';

const createSecret = async ({ iv, cipherText }) => {
  const { data, error } = await supabase
    .from('secret')
    .insert([{ iv, cipher_text: cipherText }]);

  return { data, error };
};

const secret = async (request: NextApiRequest, response: NextApiResponse) => {
  switch (request.method) {
    case 'POST':
      const { data, error } = await createSecret(JSON.parse(request.body));
      const { id } = data[0];
      return response.json({ data: id, error });
  }
};

export default secret;
