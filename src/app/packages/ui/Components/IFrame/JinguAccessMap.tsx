export function JinguAccessMap() {
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
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.3867437549493!2d141.30521787671623!3d43.05433297113688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29dcc4f0a893%3A0xec8de2355b66d708!2z5YyX5rW36YGT56We5a6u!5e0!3m2!1sja!2sjp!4v1710775231922!5m2!1sja!2sjp'
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
