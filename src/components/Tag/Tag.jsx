import styles from "./Tag.module.scss";

export default function Tag({ tags }) {
  return (
    <div className={styles.wrapper} >
      {tags.map((tag, index) => (      
        <div className={styles.wrapper_tag} key={index}> {tag} </div>
      ))}
    </div>    
  )
}
