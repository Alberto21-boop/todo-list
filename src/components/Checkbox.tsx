import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox({ checked = false, onChange }: CheckboxProps) {
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;
    onChange?.(checked);
  };

  return (
    <label className={styles.customCheckbox}>
      <input
        className={styles.taskCheck}
        type="checkbox"
        checked={checked}
        onClick={handleClick}
      />
      <span />
    </label>
  );
}
