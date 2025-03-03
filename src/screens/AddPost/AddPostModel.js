class AddPostModel {
  state = {
    id: new Date().getTime(),
    date: new Date(),
    title: '',
    text: '',
    user: '',
  };
}

export default AddPostModel;
