'use client'

import { Expand, Filter } from '@/components/icons'
import styles from '@/styles/search.module.css'
import { useState } from 'react'
import { FilterSelectionGroup } from './filterSelectionGroup'
import * as dictionaries from '@/consts/infojobsFiltersDictionary'

export function Filters() {
  const [toggleFilters, setToggleFilters] = useState(false)

  return (
    <div className={styles.filtersContainer}>
      <button
        className={styles.filtersToggle}
        onClick={() => setToggleFilters(!toggleFilters)}
      >
        <Filter size='medium' />
        <span>Filtrar</span>
        <Expand size='medium' rotate={toggleFilters} />
      </button>

      {
        toggleFilters &&
          <form className={styles.filters}>
            <FilterSelectionGroup
              dictionary={dictionaries.date}
              groupName='date'
              type='radio'
            >
              Fecha
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={dictionaries.teleworking}
              groupName='modality'
              type='checkbox'
            >
              Modalidad
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={dictionaries.category}
              groupName='category'
              type='checkbox'
            >
              Categoría del puesto
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={dictionaries.study}
              groupName='study'
              type='checkbox'
            >
              Estudios Mínimos
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={dictionaries.workday}
              groupName='workday'
              type='checkbox'
            >
              Jornada Laboral
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={dictionaries.contractType}
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
                {dictionaries.minExperience.map(({ id, label, key }) => (
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
