import React, { useEffect } from 'react'
import Modal from './Modal'
import '../style/list.css'
const M = window.M


export default function List(props) {

    useEffect(() => {
      M.Modal.init(this.instance.querySelectorAll('.modal'));
    }, []);

    const open = () => {
        let modal = this.instance.getElementsByClassName('modal')[0]
        let twtr = this.instance.getElementsByClassName('twtr')[0]
        if(twtr) twtr.className = 'twitter-timeline'
        window.twttr.widgets.load(modal)
        M.Modal.getInstance(modal).open()
    }

        let item = props.item
        let key = (item.category + item.subcategory + item.name).replace(/[^a-zA-Z0-9]/g,'')

        return(
            <span ref={el => (this.instance = el)}>
                <div className="background-white company-list inline-block center cursor-pointer" onClick={open}>
                    <img className="logo-list" src={item.logo} alt="logo"></img>
                </div>
                <Modal id={key} item={item}/>
            </span>
        )
}