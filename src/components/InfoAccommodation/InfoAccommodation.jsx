import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Collapse from "../Collapse/Collapse";
import styles from "./InfoAccommodation.module.scss";

export default function InfosAccommodation ({
  title,
  description,
  equipments,
  location,
  hostName,
  tags,
  hostPicture,
  rating,
}) {
  
  const displayName = hostName.split(' ');
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_ContHostAndHousing}>
        <div className={styles.wrapper_ContHostAndHousing_ContHousing}>
          <div className={styles.wrapper_ContHostAndHousing_ContHousing_Text}>
            <h1 className={styles.wrapper_ContHostAndHousing_ContHousing_Text_Title}>{title} </h1>
            <h2 className={styles.wrapper_ContHostAndHousing_ContHousing_Text_Location}>{location}</h2>
          </div>
        <div className={styles.wrapper_ContHostAndHousing_ContHousing_Tags}>
          <Tag tags={tags} />
        </div>
         </div>
        <div className={styles.wrapper_ContHostAndHousing_ContHost}>          
          <div className={styles.wrapper_ContHostAndHousing_ContHost_Info}>
            <div className={styles.wrapper_ContHostAndHousing_ContHost_Info_displayName}>
              <span>{displayName[0]}</span>
              <span>{displayName[1]}</span>              
            </div>
            <img
              src={hostPicture}
              alt="Profil de l'hôte"
            />
          </div>
          <div className={styles.wrapper_ContHostAndHousing_ContHost_Rating}>
            <Rating rating={rating} />
          </div>          
        </div>
      </div>
      <div className={styles.wrapper_ContCollapse}>
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={equipments} />
      </div>
    </div>
  );
};
