import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCampaign } from '../../../api/CampaignAPI';
import CampaignForm from '../../../components/forms/CampaignForm';

export default function EditCampaign() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleCampaign(id).then(setEditItem);
  }, [id]);

  return (<CampaignForm campObj={editItem} />);
}
