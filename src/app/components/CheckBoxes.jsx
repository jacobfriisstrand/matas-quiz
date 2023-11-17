import styles from "./CheckBoxes.module.css";

function CheckBoxes(props) {
  return (
    <div key={props.id} className={styles.inputContainer}>
      {props.step === 1 ? (
        <input
          onChange={handleCheckboxChange}
          className={`${styles.inputChildren} checked:bg-black peer hover:bg-black appearance-none w-full focus-visible:border-4 border-black border p-5 rounded-full`}
          type="checkbox"
          name="svarmulighed"
          id={props.id}
          value={props.svarmulighed}
        />
      ) : (
        <input className={`${styles.inputChildren} checked:bg-black peer hover:bg-black appearance-none w-full focus-visible:border-4 border-black border p-5 rounded-full`} type="radio" name="svarmulighed" id={props.id} value={props.svarmulighed} />
      )}
      <label className={`${styles.inputChildren} p-5 cursor-pointer peer-checked:text-white peer-hover:text-white`} htmlFor={props.id}>
        {props.svarmulighed}
      </label>
    </div>
  );
}

export default CheckBoxes;
