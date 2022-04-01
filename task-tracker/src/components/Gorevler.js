import React from 'react'

import Gorev from './Gorev';

const Gorevler = ({halitler}) => {
    // console.log(halit);
  return (
    <div>
        {halitler.map((halit)=>(
            <Gorev osman = {halit}/>
        )

        )}
    </div>
  )
}

export default Gorevler