import React, { useState } from 'react'
import { userImg } from '../../utils/sidebarData'
import UserLink from '../Cards/UserLink'
import { MdFavorite, MdFavoriteBorder, MdMoreHoriz, MdOutlineTextsms, MdShare } from 'react-icons/md'
import Comments from './Comments'



const postData = {
  user: {
    id: 1,
    name: 'Ahmed',
    stats: 'a few seconds ago'
  },
  description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium suscipit maiores nulla commodi debitis nostrum.',
  image: userImg
}

const Post = ({ post }) => {

  const isLoading = false
  const [showComments, setShowComments] = useState(false)
  return (
    <div className='post'>
      <div className="post-head">

        <UserLink image={postData.image} name={postData.user.name} stats={postData.user.stats} id={postData.user.id} />
        <span className="options">
          <MdMoreHoriz />
        </span>
      </div>
      <div className="post-body">
        <p>{postData.description}</p>
        <img src={postData.image} alt="" />
      </div>
      <div className="post-footer">
        <div className="item ">
          {isLoading
            // ? (
            // "loading"
            // ) : data.includes(currentUser.id)
            ? (
              <MdFavorite
                style={{ color: "red" }}
              // onClick={handleLike}
              />
            ) : (
              <MdFavoriteBorder
              // onClick={handleLike}
              />
            )}

          {/* {data?.length} */}
          12 Likes
        </div>
        <div className="item "
          onClick={() => setShowComments(!showComments)}
        >
          <MdOutlineTextsms />
          See Comments
        </div>
        <div className="item">
          <MdShare />
          Share
        </div>
      </div>

      {showComments && <Comments />}
    </div>
  )
}

export default Post