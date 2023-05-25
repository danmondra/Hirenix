import styles from '@/styles/search.module.css'

export function FilterSelectionGroup({ children, dictionary, groupName, type }) {
  return (
    <fieldset className={styles.groupRadios}>
      <h4>{children}</h4>
      {dictionary.map(({ id, value, key }) => (
        <label key={id}>
          <input type={type} name={groupName} value={key} />
          {value}
        </label>
      ))}
    </fieldset>
  )
}
