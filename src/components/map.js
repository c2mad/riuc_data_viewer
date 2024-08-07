import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../components/dynamic_map'), {
  ssr: false
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const Map = (props) => {
  const { width , height  } = props;
  return (
    <div style={{ aspectRatio: width / height }}>
      <DynamicMap {...props} />
    </div>
  )
}

export default Map;