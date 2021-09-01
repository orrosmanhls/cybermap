import React from 'react'
import '../style/listlabel.css'

export default function ListLabel(props) {
        return (
            <div className="col s3">
                <div className="btn cursor-default turquoise-background white-text list-label valign-middle left-align turquoise-hover" onClick={props.onFold}>
                    <div className="list-label-tex">
                        <div className="bold font-18">{props.category} </div>
                        <div className="weight-200 no-uppercase">{props.subcategory}</div>
                        <div className="no-uppercase list-company-count">{props.length} {props.length > 1 ? 'companies' : 'company'}</div>
                    </div>
                </div>
            </div>
        )
}