import React, {Component} from 'react'
import Category from '../components/Category'
import PageTop from '../components/PageTop'
import MetaTags from "react-meta-tags";
import dataJSON from "../data.json"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: dataJSON.companies,
            searchFilter: null,
            fundingFilter: new Set(),
            categoryFilter: new Set(),
            fundingOptions: ['$0-$10M', '$10M-$30M', '$30M-$50M', '$50M+'],
            isTile: true,
            sortedCategories: Object.keys(this.generateCategories(dataJSON.companies)).sort(this.sortCategories)
          }
    }

    sortCategories(a, b) {
        let aScore = window.score[a.split(' | ')[0]]
        let bScore = window.score[b.split(' | ')[0]]
        if (aScore && !bScore) return -1
        if (bScore && !aScore) return 1
        return (aScore - bScore) || ((a < b) ? -1 : 1)
    }

    generateCategories(data) {
        return data.reduce((result, item) => {
            let key = item.category + (item.subcategory ? ' | ' + item.subcategory : '')
            if (!result[key]) result[key] = []
            result[key].push(item)
            return result
        }, {})
    }

    applyFilters = (categories, funding, search) => {
        let categoryFilter = categories ? new Set(categories) : this.state.categoryFilter
        let fundingFilter = funding ? new Set(funding) : this.state.fundingFilter
        let searchFilter = search != null ? search.toLowerCase() : this.state.searchFilter

        let data = dataJSON.companies
        if (searchFilter)
            data = data.filter(item => item.name.toLowerCase().includes(searchFilter))
        if (categoryFilter.size)
            data = data.filter(item =>
                categoryFilter.has(item.category + (item.subcategory ? ' | ' + item.subcategory : '')) ||
                categoryFilter.has(item.category))
        if (fundingFilter.size) {
            console.log(fundingFilter)
            data = data.filter(item => {
                const funding = item.total_funding;
                console.log(funding);                
                if (funding >= 50) return fundingFilter.has('$50M+')
                if (funding >= 30 && funding < 50) return fundingFilter.has('$30M-$50M')
                if (funding >= 10 && funding < 30) return fundingFilter.has('$10M-$30M')
                if (funding < 10) return fundingFilter.has('$0-$10M')
                return true
            })
        }

        this.setState({...this.state, categoryFilter, fundingFilter, searchFilter, data})
    }

    handleCategoryFilter = (categories) => {
        this.applyFilters(categories)
    }

    handleFundingFilter = (funding) => {
        this.applyFilters(null, funding)
    }

    handleSearch = (e) => {
        this.applyFilters(null, null, e.target.value.toLowerCase())
    }

    onViewChange = () => {
        this.setState({...this.state, isTile: !this.state.isTile})
    }

    render() {
        let categories = this.generateCategories(this.state.data)
        let sortedKeys = Object.keys(categories).sort(this.sortCategories)

        return (
            <div>
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
                <PageTop amount={this.state.data.length}
                         onSearch={this.handleSearch}
                         categoryFilter={!!this.state.categoryFilter.size}
                         categories={this.state.sortedCategories}
                         onCategoryFilter={this.handleCategoryFilter}
                         fundingFilter={!!this.state.fundingFilter.size}
                         funding={this.state.fundingOptions}
                         onFundingFilter={this.handleFundingFilter}
                         isTile={this.state.isTile}
                         onViewChange={this.onViewChange}/>
                <div className="companies-view background-dark-grey">
                    {!!sortedKeys.length && sortedKeys.map((key) => <Category isTile={this.state.isTile} key={key}
                                                                              items={categories[key]}/>)}
                    {!sortedKeys.length && <div className="center white-text"><br/>No Results</div>}
                </div>
            </div>
        );
    }
}

export default Home;
