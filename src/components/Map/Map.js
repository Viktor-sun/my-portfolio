import React from 'react';
import s from './Map.module.css';

export default function Map() {
  return (
    <div className={s.wrapper}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164153.5222970856!2d36.145742038497254!3d49.99450702572823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2z0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1630147933494!5m2!1sru!2sua"
        width="1200"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        loading="lazy"
        title="google-map"
      ></iframe>
    </div>
  );
}
