import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip';
import '../style/tooltip.css'


export default function Tooltip(props) {

        return(
            <>
                <span
                    className="cybermap-tooltip_custom"
                    data-tip={props.text}
                    data-for={props.randomID}
                >
                <i className="material-icons valign-middle no-margin">
                    {props.icon}
                </i>
                </span>
                <ReactTooltip type={'light'} id={props.randomID} />
            </>
        )
}