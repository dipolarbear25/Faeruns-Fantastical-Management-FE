import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getCharacters } from '../../api/CharacterAPI';
import { createCampaign, updateCampaign } from '../../api/CampaignAPI';

const initialState = {
  name: '',
  dmName: '',
  dateCreated: '',
};

function CampaignForm({ campObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [, setCharacters] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCharacters(user.uid).then(setCharacters);
    if (campObj.id) {
      setFormInput({ ...campObj });
    }
  }, [campObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (campObj.id) {
      updateCampaign(formInput).then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createCampaign(payload).then((title) => {
        const patchPayload = { id: title };
        updateCampaign(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{campObj.id ? 'Update' : 'Create'} Campaign</h2>
      <FloatingLabel controlId="floatingInput1" label="Dungeon Masters name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the Dungeon Master's name"
          name="dmName"
          value={formInput.dmName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Campaign name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the campaigns Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
        <Form.Control as="textarea" placeholder="Description" style={{ height: '100px' }} name="description" value={formInput.description} onChange={handleChange} required />
      </FloatingLabel> */}

      {/* Checkbox section for tags */}
      {/* <div>
        <b>Tags: </b>
        {characters.map((tag) => (
          <label key={tag.id}>
            <input type="checkbox" value={tag.id} onChange={handleChange} checked={formInput.tagIds.includes(tag.id)} />
            {tag.name}
          </label>
        ))}
      </div> */}

      {/* SUBMIT BUTTON */}
      <Button type="submit">{campObj.id ? 'Update' : 'Create'} Campaign</Button>
    </Form>
  );
}

CampaignForm.propTypes = {
  campObj: PropTypes.shape({
    name: PropTypes.string,
    dmName: PropTypes.string,
    dateCreated: PropTypes.instanceOf(Date),
    id: PropTypes.number,
  }),
};

CampaignForm.defaultProps = {
  campObj: initialState,
};

export default CampaignForm;
