import { YMaps, Map, Placemark, FullscreenControl } from 'react-yandex-maps'
import React from 'react'

const YanMap = () => {
  return (
    <YMaps>
        <div >
            <Map width={'100%'} height={'288px'}
            defaultState={{
                center:[41.364664, 69.287696],
                zoom:7,
            }} >
                <Placemark geometry={[41.364664, 69.287696]} />
                <FullscreenControl options={{float:'left'}}/>
                
            </Map>
        </div>
    </YMaps>
  )
}

export default YanMap