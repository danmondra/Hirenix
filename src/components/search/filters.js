'use client'

import styles from '@/styles/search.module.css'
import { useEffect, useState } from 'react'
import { FilterSelectionGroup } from '@/components/search/filterSelectionGroup'
import { filterParamsInfojobs } from '@/consts/infojobsFiltersDictionary'
import { ExpandIcon, FilterIcon } from '@/components/icons/icons'
import { objectToParams } from '@/utils/transformURLParams'
import { useRouter } from 'next/navigation'

const {
  sinceDate: sinceDateDictionary,
  teleworking: teleworkingDictionary,
  category: categoryDictionary,
  study: studyDictionary,
  workday: workdayDictionary,
  contractType: contractTypeDictionary,
  experienceMin: experienceMinDictionary
} = filterParamsInfojobs

export function Filters({ searchParams }) {
  const [toggleFilters, setToggleFilters] = useState(false)
  const [filters, setFilters] = useState({
    sinceDate: searchParams.sinceDate ?? '',
    teleworking: searchParams.teleworking ?? [],
    category: searchParams.category ?? [],
    study: searchParams.study ?? [],
    workday: searchParams.workday ?? [],
    contractType: searchParams.contractType ?? [],
    experienceMin: searchParams.experienceMin ?? ''
  })
  const router = useRouter()

  useEffect(() => {
    // Stop when there is not filters
    if(!toggleFilters) return

    const filtersParams = objectToParams({ ...searchParams, ...filters })
    router.push(`/search${filtersParams}`)
    // Convert filters URL string params
  }, [filters])

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
              dictionary={sinceDateDictionary}
              groupName='sinceDate'
              type='radio'
              currentValue={filters.sinceDate}
              setFilters={setFilters}
              filters={filters}
            >
              Fecha
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={teleworkingDictionary}
              groupName='teleworking'
              type='checkbox'
              currentValue={filters.teleworking}
              setFilters={setFilters}
              filters={filters}
            >
              Modalidad
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={categoryDictionary}
              groupName='category'
              type='checkbox'
              currentValue={filters.category}
              setFilters={setFilters}
              filters={filters}
            >
              Categoría del puesto
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={studyDictionary}
              groupName='study'
              type='checkbox'
              currentValue={filters.study}
              setFilters={setFilters}
              filters={filters}
            >
              Estudios Mínimos
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={workdayDictionary}
              groupName='workday'
              type='checkbox'
              currentValue={filters.workday}
              setFilters={setFilters}
              filters={filters}
            >
              Jornada Laboral
            </FilterSelectionGroup>
            <FilterSelectionGroup
              dictionary={contractTypeDictionary}
              groupName='contractType'
              type='checkbox'
              currentValue={filters.contractType}
              setFilters={setFilters}
              filters={filters}
            >
              Tipo de Contrato
            </FilterSelectionGroup>

            <fieldset className={styles.groupRanges}>
              <label htmlFor='experienceMinDictionary'>
                <h4>Experiencia Mínima (Años)</h4>
              </label>
              <input id='experienceMin' type='range' name='experienceMin' list='experienceMinValues' step='1' max={6} min={0} defaultValue={0} />
              <datalist id='experienceMinValues'>
                {experienceMinDictionary.map(({ id, label, key }) => (
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
