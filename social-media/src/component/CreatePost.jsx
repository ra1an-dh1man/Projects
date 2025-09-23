<<<<<<< HEAD
import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost({
      userId,
      postTitle,
      postBody,
      reactions,
      tags,
    });

  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>

<div className="mb-3">
        <label htmlFor="usrId" className="form-label">
          User Id
        </label>
        <input
        ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your User ID here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
        ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea rows={4}
        ref={postBodyElement}
          type="text"
          className="form-control"
          id="content"
          placeholder="How are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
        ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
        ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter you hashtags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
=======
import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost({
      userId,
      postTitle,
      postBody,
      reactions,
      tags,
    });

  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>

<div className="mb-3">
        <label htmlFor="usrId" className="form-label">
          User Id
        </label>
        <input
        ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your User ID here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
        ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea rows={4}
        ref={postBodyElement}
          type="text"
          className="form-control"
          id="content"
          placeholder="How are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
        ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
        ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter you hashtags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
>>>>>>> bcc69c020710eb416c918aed627af15e2b2dd9fd
