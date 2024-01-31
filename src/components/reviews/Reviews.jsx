import { IoIosStarOutline } from "react-icons/io";
import "./reviews.css"

const Reviews = () =>{
    return(
        <div className="reviews-container">
            <div>
                <h1>Reviews from users</h1>
                <h3>1000+ Reviews
                    <span>
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                    </span>
                </h3>
            </div>
            <div className="reviews">
                <div className="review">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa veniam eveniet labore autem distinctio commodi hic odit minima odio minus cumque magni.</p>
                    <article>John Doe</article>
                </div>
                <div className="review">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa veniam eveniet labore autem distinctio commodi hic odit minima odio minus cumque magni.</p>
                    <article>John Doe</article>
                </div>
                <div className="review">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa veniam eveniet labore autem distinctio commodi hic odit minima odio minus cumque magni.</p>
                    <article>John Doe</article>
                </div>
                <div className="review">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa veniam eveniet labore autem distinctio commodi hic odit minima odio minus cumque magni.</p>
                    <article>John Doe</article>
                </div>
                <div className="review">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa veniam eveniet labore autem distinctio commodi hic odit minima odio minus cumque magni.</p>
                    <article>John Doe</article>
                </div>
            </div>
        </div>
    )
}
export default Reviews;