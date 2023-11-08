import { AiFillStar } from "react-icons/ai";

const Ratings = () => {
  return (
    <div className="ratings">
      <div className="stars">
        <AiFillStar className="star"/>
        <AiFillStar className="star"/>
        <AiFillStar className="star"/>
        <AiFillStar className="star"/>
        <AiFillStar className="star"/>
      </div>
      <span>(5 reviews)</span>
    </div>
  )
}

export default Ratings
