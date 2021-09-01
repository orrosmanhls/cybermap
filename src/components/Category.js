import React, { Component, useState } from 'react'
import Tile from './Tile'
import List from './List'
import ListLabel from './ListLabel'
import Foldable from './Foldable'
import '../style/category.css'

export default function Category(props) {

  const [folded, setFolded] = useState(false);

  const toggleFold = () => {setFolded(prevState => !prevState)}

  let items = props.items;
  let isTile = props.isTile;

  const sortItems = (items) => {
    const newItems = [...items];
    return newItems.sort((a, b) => {                
        return b.position - a.position;
    });
  }
  return (
      <div className="background-dark-grey">
          <div className="container center">
              <div className="category-group inline-block left-align">
              { !isTile  &&
                  <div className="row">
                      <ListLabel category={items[0].category} subcategory={items[0].subcategory} length={items.length}/>
                      <div className="col s9">
                          {items.map((item) => <List key={(item.category + item.subcategory + item.name)} item={item} />)}
                      </div>
                  </div>
              }
              { isTile &&
                  <div>
                      <Foldable category={items[0].category} subcategory={items[0].subcategory} length={items.length} folded={folded} onFold={toggleFold}/>
                      <div>
                          { !folded && sortItems(items).map((item) =>
                              <Tile key={(item.category + item.subcategory + item.name)} item={item} /> )
                          }
                      </div>
                  </div>
              }
              </div>
          </div>
      </div>
  )
}