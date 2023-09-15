import { NextApiRequest } from 'next';
import { NextApiResponseServerIo } from '@/types';
import { currentProfilePages } from '@/lib/current-profile-pages';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const profile = await currentProfilePages();
  } catch (error) {
    console.log('[MESSAGES_POST]', error);
    return res.status(500).json({ message: 'Internal Error' });
  }
}
