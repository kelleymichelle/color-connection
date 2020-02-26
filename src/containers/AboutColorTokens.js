import React from 'react'

export default function AboutColorToken() {
  const orangeImg = 'https://res.cloudinary.com/color-connection/image/upload/v1582682849/Screen_Shot_2020-02-25_at_12.17.11_PM_l6wori.png'
  const blueImg = 'https://res.cloudinary.com/color-connection/image/upload/v1582682833/Screen_Shot_2020-02-25_at_12.17.37_PM_kenxrc.png'
  const greenImg = 'https://res.cloudinary.com/color-connection/image/upload/v1582682844/Screen_Shot_2020-02-25_at_12.17.29_PM_qajrng.png'
  const goldImg = 'https://res.cloudinary.com/color-connection/image/upload/v1582682835/Screen_Shot_2020-02-25_at_12.17.20_PM_hbbho2.png'
  
  // const styles = {

  // }

  return (
    <div>
      <img src={orangeImg} alt="orange color token" />
      <img src={blueImg} alt="blue color token" />
      <img src={greenImg} alt="green color token" />
      <img src={goldImg} alt="gold color token" />
    </div>
  )
}