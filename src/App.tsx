import { useEffect, useState } from 'react';
import './App.css';

interface Image {
  id: string;
  url: string;
  user: {
    profile_image: string;
  };
}

const App = () => {
  const [images, setImages] = useState<Image[] | null>(null);

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='app'>
      {
        images && images.map(img => (
          <div key={img.id} >
            <img src={`${img.url}.jpg`} alt=''/>
            <img src={`${img.user.profile_image}.webp`} alt=''/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
