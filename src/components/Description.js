
import React from 'react';
import styles from './Description.module.css';



const RecipeAuthor = () => {
    let authorLink ="https://www.pickuplimes.com/about";
    let authorPhoto ="https://www.pickuplimes.com/static/images/about/about_page_kitchen_2.856f4fa661c2.gif";
    let authorName = "Sadia Badiei";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src = {authorPhoto} alt = "Sadia in the kitchen" 
            className = {styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href = {authorLink}>BlogName</a>
            </div>
        </div>    
    );
}

class RecipeDescription extends React.Component {
    render () 
        {
// const RecipeDescription = () => {
        return <div>
                <div>
                    <h1>Stuffed Energy Balls</h1>
                    <p>Energy balls are a great, easy-to-transport snack. These are deliciously sweet, with a creamy, oozy, nutty filling. Take a few with you to keep you charged all day or enjoy as a simple evening snack with a cup of tea.</p>
                </div>
                <RecipeAuthor/>
                </div>
        }
    };



export default RecipeDescription;


