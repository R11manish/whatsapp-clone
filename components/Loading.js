import { Circle } from 'better-react-spinkit';

function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src='./images/whatsapp.png'
          alt=''
          style={{ marginBottom: 10, height: '200px', width: '200px' }}
        />
        <Circle color='#3CBC28' size={60} />
      </div>
    </center>
  );
}

export default Loading;
