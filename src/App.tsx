import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'

import { Pagination, Header } from 'components'
import { Item as Hero } from 'components/HeroItem/contracts'
import { SetPaginationArgs } from 'components/Pagination/constracts'
import { heroes } from 'services/mirror-api'

import GlobalStyles from 'styles/global'
import * as theme from 'styles/tokens'

import { Home } from 'pages'


function App() {

  const [heroList, setHeroList] = useState([])
  const [heroListPaginated, setHeroListPaginated] = useState([])
  const [filterName, setFilterName] = useState('')

  const onFilterName = ({ name }: Hero) => name.includes(filterName)
  const totalRecords = heroList.filter(onFilterName).length;

  const setPagination = ({ offset, pageLimit }: SetPaginationArgs) => {
    setHeroListPaginated(heroList.filter(onFilterName).slice(offset, offset + pageLimit))
  }

  useEffect(() => {
    heroes.getHeroes().then(setHeroList);
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header />

        <Home heroList={heroListPaginated} onFilterList={setFilterName} />

        <footer>
          <Pagination
            totalRecords={totalRecords}
            pageLimit={4}
            setPaginationOrderList={setPagination}
          />
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App;
