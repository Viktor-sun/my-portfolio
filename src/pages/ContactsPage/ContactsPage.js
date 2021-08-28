import React from 'react';
import Address from '../../components/Address';
import Background from '../../components/Background';
import SectionTitle from '../../components/SectionTitle';
import FormSubmit from '../../components/FormSubmit';
import Map from '../../components/Map';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <>
      <Background height="300px">
        <SectionTitle title="My Contacts" />
      </Background>
      <section className={s.section}>
        <div className={s.wrapper}>
          <Address />
          <FormSubmit />
        </div>

        <Map />
      </section>

      <Background height="70px" />
    </>
  );
}
