export const StationItem: React.FC<{ id: number, zhname: string, enname: string, currentStation: number, timeSince: number, currentFrame : number }> = ({ id, zhname, enname, currentStation, timeSince, currentFrame }) => {
  let markType: string;
  let transferString: string | null = null;
  if (zhname == '复兴路') {
    transferString = '4'
  } else if (zhname == '积玉桥') {
    transferString = '2'
  } else if (zhname == '徐家棚') {
    if (currentFrame % 90 < 45) {
      transferString = '7'
    } else {
      transferString = '8'
    }
  }
  if (currentStation == id) {
    markType = 'station-mark-current'
  } else if (currentStation < id) {
    markType = 'station-mark-future'
  } else {
    markType = 'station-mark-past'
  }
  if (transferString != null) {
    markType += ' station-mark-transfer station-mark-transfer-' + transferString
  }

  const opacityBoundary = Math.min((timeSince % 150) / 90, 1)
  const opacityBoundaryZh = opacityBoundary * zhname.length
  const opacityBoundaryEn = opacityBoundary * enname.length

  return (
    <div key={id} id={"station-entry-" + id}>
      <div className="station-mark-container">
        <div className={"station-mark " + markType}>
          {transferString != null ? <span className="station-mark-transfer-string" style={{
            scale: "" + (0.6 + 0.4 * (currentFrame % 45) / 45)
          }}>{transferString}</span> : <></>}
        </div>
      </div>
      <div className="station-text">
        <div className={"zhname zhname-length-" + zhname.length}>
          {/* currentStation !== id ? zhname : */zhname.split('').map((char, i) => {
            let opacity: number;
            if (currentStation !== id) {
              opacity = 1
            } else if (i < Math.floor(opacityBoundaryZh)) {
              opacity = 1;
            } else if (i > opacityBoundaryZh) {
              opacity = 0;
            } else {
              opacity = opacityBoundaryZh % 1;
            }
            return <><span key={i} style={{ opacity: opacity, display: 'inline-block', scale: String(1 + 0.2 * Math.max(0, 0.7 - opacity)) }}>{char}</span></>
          })}
        </div>
        <div className="enname">
          {currentStation !== id ? enname : enname.split('').map((char, i) => {
            let opacity: number;
            if (i < Math.floor(opacityBoundaryEn)) {
              opacity = 1;
            } else if (i > opacityBoundaryEn) {
              opacity = 0;
            } else {
              opacity = opacityBoundaryEn % 1;
            }
            return <span key={i} style={{ opacity: opacity }}>{char}</span>
          })}
        </div></div>
    </div>
  );
}