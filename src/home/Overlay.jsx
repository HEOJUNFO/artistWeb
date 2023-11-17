import useStore from '../stores/homeStore.jsx'

export function Overlay() {
    const loaded = useStore((state) => state.loaded)
    const clicked = useStore((state) => state.clicked)
    const api = useStore((state) => state.api)

    return (
      <>
        <div className={`fullscreen bg ${loaded ? 'loaded' : 'notready'} ${clicked && 'clicked'}`}>
          <div onClick={() => loaded && api.start()}>
            {!loaded ? (
              'loading'
            ) : (
              <>
                <span style={{ color: '#606060' }}>Your gateway to music opportunities</span>
                <br />
                <span style={{ color: '#606060' }}>Join a community of artists just like you</span>
                <br />
                <b>
                  <span style={{ color: 'black' }}>click to continue</span>
                </b>
              </>
            )}
          </div>
        </div>
      </>
    )
  }

export default Overlay;