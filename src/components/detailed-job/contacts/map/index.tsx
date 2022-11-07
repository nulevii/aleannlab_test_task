import { useMemo } from 'react'
import { Map, Overlay } from 'pigeon-maps'
import sprite from '../../../../assets/icons.svg'

const LocationMap = ({ styles, location }: {
  styles: Record<string, string>
  location: { lat: number, long: number }

}) => {
  const center: [number, number] = useMemo(() => ([location.lat, location.long]), [])

  return (
    <Map
      boxClassname={styles.map}
      height={200}
      defaultCenter={center}
      defaultZoom={3} >
      <Overlay anchor={center} offset={[13, 36]}>
        <svg className={styles.mapLocationIcon}>
          <use href={sprite + '#location'}></use>
        </svg>
      </Overlay>
    </Map>
  )
}

export default LocationMap
