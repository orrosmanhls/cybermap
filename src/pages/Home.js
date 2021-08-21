import React, { useState } from 'react'
import Category from '../components/Category'
import PageTop from '../components/PageTop'
import MetaTags from "react-meta-tags";
import dataJSON from "../data.json";

const generateCategories = (companies) => {
  return companies.reduce((result, item) => {
      let key = item.category + (item.subcategory ? ' | ' + item.subcategory : '')
      if (!result[key]) result[key] = []
      result[key].push(item)
      return result
  }, {})
}

const sortCategories = (a, b) => {
  let aScore = window.score[a.split(' | ')[0]]
  let bScore = window.score[b.split(' | ')[0]]
  if (aScore && !bScore) return -1
  if (bScore && !aScore) return 1
  return (aScore - bScore) || ((a < b) ? -1 : 1)
}

export default function Home() {

  const [data, setData] = useState(dataJSON.companies);
  const [searchFilter, setSearchFilter] = useState(null);
  const [fundingFilter, setFundingFilter] = useState(new Set());
  const [categoryFilter, setCategoryFilter] = useState(new Set());
  const [fundingOptions, setFundingOptions] = useState(['$0-$10M', '$10M-$30M', '$30M-$50M', '$50M+']);
  const [isTile, setIsTile] = useState(true);
  const [sortedCategories, setSortedCategories] = useState(Object.keys(generateCategories(dataJSON.companies)).sort(sortCategories));

  const applyFilters = (categories, funding, search) => {
    let newCategoryFilter = categories ? new Set(categories) : categoryFilter
    let newFundingFilter = funding ? new Set(funding) : fundingFilter
    let newSearchFilter = search != null ? search.toLowerCase() : searchFilter

    let filteredData = dataJSON.companies;
    if (newSearchFilter)
        filteredData = filteredData.filter(item => item.name.toLowerCase().includes(newSearchFilter))
    if (newCategoryFilter.size)
        filteredData = filteredData.filter(item =>
            newCategoryFilter.has(item.category + (item.subcategory ? ' | ' + item.subcategory : '')) ||
            newCategoryFilter.has(item.category))
    if (newFundingFilter.size) {
        filteredData = filteredData.filter(item => {
            let funding = item.funding ? (parseFloat(item.funding, 10) * (item.funding.includes('M') ?
                1000 : item.funding.includes('B') ? 1000000 : 1)) : 0
            if (item.public || funding >= 50000) return newFundingFilter.has('$50M+')
            if (funding >= 30000 && funding < 50000) return newFundingFilter.has('$30M-$50M')
            if (funding >= 10000 && funding < 30000) return newFundingFilter.has('$10M-$30M')
            if (funding < 10000) return newFundingFilter.has('$0-$10M')
            return true
        })
    }
    setCategoryFilter(newCategoryFilter);
    setFundingFilter(newFundingFilter);
    setSearchFilter(newSearchFilter);
    setData(filteredData);
  }

  const handleCategoryFilter = (categories) => {
    applyFilters(categories)
  }

  const handleFundingFilter = (funding) => {
      applyFilters(null, funding)
  }

  const handleSearch = (e) => {
      applyFilters(null, null, e.target.value.toLowerCase())
  }

  const onViewChange = () => {
    setIsTile(prevIsTile => !prevIsTile);
  }

  let categories = generateCategories(data);
  let sortedKeys = Object.keys(categories).sort(sortCategories);


  return (
    <div>
      {console.log(sortedKeys)}
        <MetaTags>
            <title>CyberMap by YL Ventures</title>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"/>
            <meta property="og:image"
                  content="https://venturebeat.com/wp-content/uploads/2018/06/4708ae1e-979b-4490-964c-48c24cf325bd.jpg?fit=300%2C289&strip=all"/>
            <meta name="thumbnail"
                  content="https://venturebeat.com/wp-content/uploads/2018/06/4708ae1e-979b-4490-964c-48c24cf325bd.jpg?fit=300%2C289&strip=all"/>
            <meta name="description"
                  content="CyberMap by YL Ventures is the first open, interactive, comprehensive, live map of Israel’s Cybersecurity startup landscape"/>
        </MetaTags>
        <PageTop amount={data.length}
                 onSearch={handleSearch}
                 categoryFilter={!!categoryFilter.size} //////
                 categories={sortedCategories}
                 onCategoryFilter={handleCategoryFilter}
                 fundingFilter={!!fundingFilter.size}
                 funding={fundingOptions}
                 onFundingFilter={handleFundingFilter}
                 isTile={isTile}
                 onViewChange={onViewChange}/>
        <div className="companies-view background-dark-grey">
            {!!sortedKeys.length && sortedKeys.map((key) => 
              <Category isTile={isTile} key={key} items={categories[key]}/>
            )}
            {!sortedKeys.length && <div className="center white-text"><br/>No Results</div>}
        </div>
    </div>
  );
}
