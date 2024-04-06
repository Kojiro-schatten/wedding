export function PrinceHotelAccessMap() {
  return (
    <div style={{
      margin: 'auto',
      position: "relative",
      overflow: "hidden",
      width: "90%",
      paddingTop: "56.25%",
    }}>
      {/* https://web-camp.io/magazine/archives/85020 */}
      <iframe
        loading='lazy'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.305915739231!2d141.338251011725!3d43.056033171016395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2991b4fc6b2f%3A0x17cb73040e27758d!2z5pyt5bmM44OX44Oq44Oz44K544Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1710949162503!5m2!1sja!2sjp'
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}
