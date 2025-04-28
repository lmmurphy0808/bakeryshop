// CookiePlan.js
const CookiePlan = ({ name, level, rating }) => {
    return (
      <div className="cookie-plan">
        <h2>{name}</h2>
        <p>Level: {level}</p>
        <p>Rating: {rating}</p>
      </div>
    );
  };
  
  export default CookiePlan;
  