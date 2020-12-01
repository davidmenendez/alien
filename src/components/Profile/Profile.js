import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../Page';
import Table from '../Table';
import Spinner from '../Spinner';
import AlienIcon from '../AlienIcon';
import api from '../../utils/api';

const Profile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const cols = ['name', 'level'];

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const response = await api(`user/profile?id=${id}`)
        const { user } = await response.json();
        setProfile(user);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    };
    getProfile();
  }, [id]);

  return (
    <>
      {loading && <Spinner />}
      {profile && (
        <div>
          <header className="home-header">
            <AlienIcon fill={profile.color} />
            <h2>{profile.name}</h2>
          </header>
          <h3>{profile.name} stats</h3>
          <Table
            cols={cols}
            rows={[profile]}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
