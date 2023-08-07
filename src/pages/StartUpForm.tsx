import React from 'react';
import { images, CustomImage } from './images';

function StartUpForm() {
  const handleClick = () => {};

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2 style={{ paddingTop: '41px', marginBottom: '1.25rem' }}>
        SELECT YOUR TYPE
      </h2>
      <p style={{ marginBottom: '1.25rem' }}>Select your screen device type</p>
      <div className="card-deck">
        <div className="card border-0 bg-gray-gradient card-hover-primary py-10">
          <img
            src="https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg"
            alt="investor icon"
            className="card-img-top px-20 pt-10"
          />
          <div className="card-body text-center">
            <p className="f-30-400 mb-0">
              <span className="d-block fw-700">Vertical</span>
            </p>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a
              href="#/fileUpload"
              className="stretched-link"
              title="vertical"
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        </div>
        <div className="card border-0 bg-gray-gradient card-hover-primary py-10">
          <img
            src="https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg"
            alt="investor icon"
            className="card-img-top px-20 pt-10"
          />
          <div className="card-body text-center">
            <p className="f-30-400 mb-0">
              <span className="d-block fw-700">Horizontal</span>
            </p>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a
              href="#/imageUpload"
              className="stretched-link"
              title="horizontal"
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartUpForm;
