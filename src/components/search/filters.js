'use client'

import styles from '@/styles/search.module.css'
import { useState } from 'react'
import { FilterSelectionGroup } from '@/components/search/filterSelectionGroup'
import { filterParamsInfojobs } from '@/consts/infojobsFiltersDictionary'
import { ExpandIcon, FilterIcon } from '@/components/icons/icons'

export function Filters({ searchParams }) {
  const [toggleFilters, setToggleFilters] = useState(false)
  console.log(searchParams)

  const {
    sinceDate,
    teleworking,
    category,
    study,
    workday,
    contractType,
    experienceMin
  } = filterParamsInfojobs

  return (
    <div className={styles.filtersContainer}>
      <button
        className={styles.filtersToggle}
        onClick={() => setToggleFilters(!toggleFilters)}
      >
        <FilterIcon size='medium' />
        <span>Filtrar</span>
        <ExpandIcon size='medium' rotate={toggleFilters} />
      </button>

      {
        toggleFilters &&
          <form className={styles.filters}>
            <FilterSelectionGroup
              dictionary={sinceDate}
              groupName='date'
              type='radio'
            >
              Fecha
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={teleworking}
              groupName='modality'
              type='checkbox'
            >
              Modalidad
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={category}
              groupName='category'
              type='checkbox'
            >
              Categoría del puesto
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={study}
              groupName='study'
              type='checkbox'
            >
              Estudios Mínimos
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={workday}
              groupName='workday'
              type='checkbox'
            >
              Jornada Laboral
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={contractType}
              groupName='contractType'
              type='checkbox'
            >
              Tipo de Contrato
            </FilterSelectionGroup>

            <fieldset className={styles.groupRanges}>
              <label htmlFor='experienceMin'>
                <h4>Experiencia Mínima (Años)</h4>
              </label>
              <input id='experienceMin' type='range' name='experienceMin' list='experienceMinValues' step='1' max={6} min={0} defaultValue={0} />
              <datalist id='experienceMinValues'>
                {experienceMin.map(({ id, label, key }) => (
                  <option value={key} label={label} key={id} />
                ))}
              </datalist>
            </fieldset>

            <fieldset className={styles.groupRanges}>
              <label htmlFor='experienceMin'>
                <h4>Sueldo Mínimo (Anual)</h4>
              </label>
              <input id='experienceMin' type='range' name='experienceMin' list='experienceMinValues' step='1' max={60000} min={1000} defaultValue={0} />
              <p />
            </fieldset>

          </form>
      }
    </div>
  )
}
