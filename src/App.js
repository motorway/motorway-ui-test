import React from 'react';
import { useQuery } from 'react-query'; // Using this to avoid the double API call caused by using useEffect
import logo from './logo.svg';
import loading from './loading.svg';
import EntryForm from './components/Form';
import './App.css';

const App = () => {
  const { data: images, isLoading, isError } = useQuery({
    queryKey: 'images',
    queryFn: async () => {
      const response = await fetch('images?limit=10');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Success:', data);
      return data.images;
    },
    onError: (error) => console.error('Error:', error),
  });

  //TODO: Add scroll event listener to get next pages when scrolled to the right

  //TODO: Make modal keyboard accessible

  const hideModal = (index) => {
    document.getElementById(`img_${index}`).checked = false;
  }

  return (
    <div className='app'>
      <header className='header'>
        <img className='logo' src={logo} loading='lazy' alt='Motorway' />
      </header>
      <main className='main'>
        <h1>Car Posts</h1>
        <div className='thumbs'>
          {isLoading ? <div className='photoContainer'><img className='photo' alt='loading' src={loading} /></div> : null}
          {isError ? <div className='photoContainer'>Error retrieving data</div> : null}
          {images && images.map((img, index) => (
            <div className='photoContainer shine' key={img.id}>
              <img
                loading='lazy'
                className='photo'
                src={`${img.url}.jpg`}
                alt={img.alt_description}
                aria-describedby={`description_${img.id}`}
              />
              <input
                type='checkbox'
                id={`img_${index}`}
                className='modalActivator'
                aria-hidden='true'
              />
              <label tabIndex={0} className="modalInteract" htmlFor={`img_${index}`}>
                <span className='sr-only'>{document.getElementById(`img_${index}`)?.checked ? 'Close Image' : 'Open Image'}</span>
              </label>

              <div className='modal'>
                <div className='modalContent'>
                  <div className='photoInfo'>
                    <img
                      loading='lazy'
                      className='userPhoto'
                      src={`${img.user.profile_image}.webp`}
                      alt={img.user.name}
                    />
                    <div>
                      <h2 className='photoInfoHeading'>{img.user.username}</h2>
                      <p className='photoInfoText' id={`description_${img.id}`}>{img.description}</p>
                    </div>
                  </div>
                  <div className='photoLargeContainer'>
                    <img 
                      loading='lazy'
                      className='photoLarge'
                      src={`${img.url}.jpg`}
                      alt={img.alt_description}
                      aria-describedby={`description_${img.id}`}
                    />
                  </div>
                </div>
              </div>
                  
              {index > 0 ? (
                <label tabIndex={0} onClick={() => hideModal(index)} className="photoNav photoNavLeft" htmlFor={`img_${index-1}`}>
                  <i className="arrow left">
                    <span className='sr-only'>Previous Post</span>
                  </i>
                </label>
              ):null}
              
              {index < (images.length - 1) ? (
                <label tabIndex={0} onClick={() => hideModal(index)} className="photoNav photoNavRight" htmlFor={`img_${index+1}`}>
                  <i className="arrow right">
                    <span className='sr-only'>Next Post</span>
                  </i>
                </label>
              ):null}
            </div>
          ))}
        </div>
        <EntryForm></EntryForm>
      </main>
    </div>
  );
}

export default App;
