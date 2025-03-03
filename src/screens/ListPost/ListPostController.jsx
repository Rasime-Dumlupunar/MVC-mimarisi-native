import React, {useEffect, useState} from 'react';
import ListPostView from './ListPostView';
import axios from 'axios';

const ListPostController = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then(res => setPostData(res.data))
      .catch(error => console.log(error));
  }, []);
  return <ListPostView postData={postData} />;
};

export default ListPostController;
