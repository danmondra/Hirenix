import styles from '@/styles/search.module.css'

export function FilterSelectionGroup({ children, dictionary, groupName, type, currentValue, setFilters, filters }) {
  const handleChange = (key) => {
    if(type === 'checkbox') {
      handleCheckbox(key)
      return
    }
    setFilters({ ...filters, [groupName]: key })
  }

  const handleCheckbox = (key) => {
    // TODO --- Fix this with better solution, this is only a patch, happend when searchParams retrieve a string value in order to array
    let groupArray = filters[groupName]

    if(typeof filters[groupName] === 'string') {
      groupArray = [filters[groupName]]
    }

    if(filters[groupName]?.includes(key)) {
      const newGroupValue = groupArray?.filter(k => k !== key)

      setFilters({ ...filters, [groupName]: newGroupValue })
      return
    }
    setFilters({ ...filters, [groupName]: [...groupArray, key] })
  }

  return (
    <fieldset className={styles.groupRadios}>
      <h4>{children}</h4>
      {dictionary.map(({ id, value, key }) => (
        <label key={id}>
          <input
            type={type}
            name={groupName}
            value={key}
            checked={currentValue.includes(key)}
            onChange={() => handleChange(key)}
          />
          {value}
        </label>
      ))}
    </fieldset>
  )
}
