import React from 'react'
import s from './index.module.css'
import GoogleMap from './GoogleMap'
import insta from '../../images/insta.png'
import whatsapp from '../../images/whatsapp.png'

export default function Footer() {
  return (

  <div className={s.wrapper}>

	<div className={s.text_container}> 
	  <div className={s.contact_container}>
		<h1>Contact</h1>
		<p className={s.number}> <a href="+49 999 999 99 99"> +49 999 999 99 99</a></p>
		<div className={s.social_media_content}>
		<div className={s.content_cont}>
		  <a href="https://www.instagram.com/tel_ran/">
		  <img src={insta} alt="" /></a>
		  <p>Instagram</p>
		</div>
		<div className={s.content_cont}>
		  <a href="https://api.whatsapp.com/send?phone=%2B493083797477&app=facebook&entry_point=page_cta&fbclid=IwAR3eUU2FYqyUPJNi23MAOH_es4Bg4zLhFCDPPH1volXz6W4XI9lfqXrgoBc">
		  <img src={whatsapp} alt="" />
		  </a>
		  <p>WhatsApp</p>
		</div>
		</div>
	  </div>
	  <div className={s.address}>
		<h1>Address</h1>
		<p className={s.strasse}>Linkstraße 2, 8 OG, 10785,</p>
		<p className={s.strasse}>Berlin, Deutschland</p>
		<p className={s.hours}>Working Hours:</p>
		<p className={s.duration}>24 hours a day</p>
	  </div>
	</div>
  

    <div className={s.google}>
      <GoogleMap />

      <div className={s.best_shop}>  <h5>The Best Shop For The Best goods (c)</h5>

	    <h6>2023</h6> </div>
    </div>

    </div>
  )
}
