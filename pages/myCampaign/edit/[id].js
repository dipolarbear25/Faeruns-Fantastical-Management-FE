import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCampaign } from '../../../api/CampaignAPI';
import CampaignForm from '../../../components/forms/CampaignForm';

export default function EditArt() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  // make a call to the API to get the member data
  useEffect(() => {
    getSingleCampaign(id).then(setEditItem);
  }, [id]);

  // pass object to form
  return (<CampaignForm campObj={editItem} />);
}
