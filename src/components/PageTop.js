import React from 'react'
import Dropdown from './Dropdown'
import '../style/pageTop.css'
import '../style/dropdown.css'

export default function PageTop(props) {
  const onClickTile = () => { if(!props.isTile) props.onViewChange() }
  const onClickList = () => { if(props.isTile) props.onViewChange() }

        return(
            <div className="background-dark-grey page-top white-text center">
                <div className="container">
                    <h1 className="no-margin opacity-08 font-lighter hero-title">
                        Welcome to CyberMap
                    </h1>
                    <br />
                    <div className="row">
                        <div className="col s0 m1 l2"></div>
                        <div className="col s12 m10 l8 pre-wrap align-justify">
{`
CyberMap by YL Ventures is the first open, interactive, comprehensive, live map of Israel’s cybersecurity startup landscape.
`}
                        </div>
                        <div className="col s0 m1 l2"></div>
                    </div>
                    <br/><hr/><br/>
                    <div className="font-14">
                        <span className="left left-align main-company-counter hide-on-med-and-down">
                            {props.amount} {props.amount === 1 ? 'Company' : 'Companies' }
                        </span>
                        <div className="right left-align top-menu">
                            <span>
                                <Dropdown title="Categories" colored={props.categoryFilter} options={props.categories} onChange={props.onCategoryFilter} />
                            </span>
                            <span>
                                <Dropdown title="Funding" colored={props.fundingFilter} options={props.funding} onChange={props.onFundingFilter} />
                            </span>
                            <span>
                                <div className="inline-block search">
                                    <i className="material-icons valign-middle">search</i>
                                    <input className="browser-default search-input" type="text" autoComplete="off" onChange={props.onSearch} />
                                </div>
                            </span>
                            <div className="inline-block hide-on-med-and-down">
                                <span className="vertical-line"></span>
                                <span className="left-view-changer">
                                    <i className={"material-icons valign-middle cursor-pointer" + (!props.isTile ? ' grey-text' : '') } onClick={onClickTile}>view_module</i>
                                </span>
                                <span>
                                    <i className={"material-icons valign-middle cursor-pointer" + (props.isTile ? ' grey-text' : '') } onClick={onClickList}>view_headline</i>
                                </span>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <br/>
                    </div>
                </div>
            </div>
        )
}
