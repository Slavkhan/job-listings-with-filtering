import {useEffect, useState} from 'react';
import data from './data';
import CardJob from './components/Card';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [filters, setFilters] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const filterElements = () => {
    const tempArr = [];
    for (const {id, role, level, languages, tools} of data) {
      tempArr.push({id, value: [role, level, ...languages, ...tools]});
    }
    // setRequirements(data.map(({id, role, level, languages, tools}) => ({id, value: [role, level, ...languages, ...tools]})));
    setRequirements(tempArr);
    setJobs(data);
  };
  useEffect(() => {
    filterElements();
  }, []);

  useEffect(() => {
    filterElements();
    const filteredValues = requirements.filter((elements) => filters.every((e) => elements.value.includes(e)));

    if (!!filteredValues.length) {
      setJobs(data.filter((el) => filteredValues.some((e) => el.id === e.id)));
    } else {
      setJobs(data);
    }
    //eslint-disable-next-line
  }, [filters]);

  const addFilter = (filterValue) => {
    if (filters.indexOf(filterValue) === -1) {
      setFilters((prev) => [...prev, filterValue]);
    }
  };
  const removeFilter = (filterValue) => {
    setFilters(filters.filter((e) => e !== filterValue));
  };
  const clearFilter = () => {
    setFilters([]);
  };

  return (
    <>
      <Filter filters={filters} removeFilter={removeFilter} clearFilter={clearFilter}></Filter>
      {jobs?.map?.((item, index) => (
        <CardJob key={item + index} item={item} addFilter={addFilter}></CardJob>
      ))}
    </>
  );
}

export default App;
