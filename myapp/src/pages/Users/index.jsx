import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../store/baseUrl';
import moment from 'moment';

export const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get(baseUrl)
      .then((response) => {
        const filteredData = response.data.filter(user => user.id > 100);
        setUserData(filteredData);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      {userData.map((item, index) => {
        const createDate = moment(item.create_at).fromNow();
        return (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Email {item.email}</p>
            <p>Address: {item.address}</p>
            <p>Phone: {item.phone}</p>
            <p>Created: {createDate}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};