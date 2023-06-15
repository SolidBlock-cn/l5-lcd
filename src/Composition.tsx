import { StationItem } from './StationItem';
import { markArrivals, markNextTimes } from './Markers';
import './styles.css';
import { Img, staticFile, useCurrentFrame } from 'remotion';

const zhnames = ['中医药大学', '白沙六路', '光霞', '张家湾', '烽火村', '八铺街', '复兴路', '彭刘杨', '司门口黄鹤楼', '昙华林武胜门', '积玉桥', '三层楼', '三角路', '徐家棚', '杨园铁四院', '余家头', '科普公园', '建设二路', '和平公园', '红钢城', '青宜居', '工人村', '武钢', '厂前', '武汉站东广场']
const ennames = ['Hubei University of Chinese Medicine', 'Bai_sha 6th Road', 'Guang_xia', 'Zhang_jia_wan', 'Feng_huo_cun', 'Ba_pu_jie', 'Fu_xing Road', 'Peng_liu_yang', 'Simenkou & Yellow Crane Tower', 'Tan_hua_lin & Wu_sheng_men', 'Ji_yu_qiao', 'San_ceng_lou', "San_jiao Road", 'Xu_jia_peng', 'Yangyuan & Tiesiyuan', 'Yu_jia_tou', 'Ke_pu Park', 'Jian_she 2nd Road', 'He_ping Park', 'Hong_gang_cheng', 'Qing_yi_ju', 'Gong_ren_cun', 'Wu_gang', 'Chang_qian', 'East Square of Wuhan Railway Station']

const zhTransfers: Record<string, string> = {
	'复兴路': '可换乘4号线',
	'积玉桥': '可换乘2号线',
	'徐家棚': '可换乘7号线、8号线',
	'武汉站东广场': '可出站转乘4号线'
}
const enTransfers: Record<string, string> = {
	'复兴路': 'transfer to Line 4',
	'积玉桥': "transfer to Line 2",
	'徐家棚': 'transfer to Line 7 and Line 8',
	'武汉站东广场': 'transfer to Line 4'
}

const rightSide: Set<string> = new Set([
	'中医药大学',
	'白沙六路',
	'光霞',
	'张家湾'
])

if (zhnames.length !== ennames.length) {
	throw Error('not equal')
}

export const MyComposition = () => {
	let arrivedStation = -1;
	let isArrived = true;
	let lastArrivalFrame = 0;
	let nextArrivalFrame = 0;
	let lastChangeFrame = 0;
	const currentFrame = useCurrentFrame();
	for (let i = 0; i < markArrivals.length; i++) {
		const markArrivalTime = markArrivals[i]
		if (currentFrame >= markArrivalTime) {
			lastArrivalFrame = markArrivalTime
			nextArrivalFrame = markArrivals[i + 1]
			arrivedStation = i
			isArrived = true
		} else {
			break
		}
	}
	lastChangeFrame = lastArrivalFrame

	if (arrivedStation === -1) {
		throw new Error("Arrived station cannot be " + arrivedStation + ", currentFrame = " + currentFrame)
	}

	for (let i = 0; i < markNextTimes.length; i++) {
		const markNextTime = markNextTimes[i]
		if (lastArrivalFrame <= markNextTime && markNextTime < currentFrame && currentFrame < nextArrivalFrame) {
			isArrived = false;
			lastChangeFrame = markNextTime;
			break
		}
	}
	const timeSince = currentFrame - lastChangeFrame;
	const currentStation = isArrived ? arrivedStation : arrivedStation + 1;
	let summaryContent: JSX.Element;
	let summaryClass: string;
	const zhname: string = zhnames[currentStation];
	const splitTransfer = currentStation === 24;
	if (splitTransfer ? timeSince % 270 >= 270 : timeSince % 180 >= 180) {
		// 此部分不显示，仅在代码中保留
		summaryContent = <>武汉轨道交通5号线 开往：武汉站东广场</>
		summaryClass = 'summary-destination'
	} else if (splitTransfer ? timeSince % 270 < 90 : timeSince % 180 < 90) {
		const transfer = zhTransfers[zhname]
		summaryContent = <>{(isArrived ? zhname + "到了" : "下一站：" + zhname) + (transfer ? "，" + transfer : '')} </>
		summaryClass = 'summary-zh'
	} else if (splitTransfer) {
		if (timeSince % 270 < 180) {
			summaryContent = <>{(isArrived ? "We are arriving at " + ennames[currentStation].replaceAll('_', '') : "The next station is " + ennames[currentStation].replaceAll('_', ''))}</>
		} else {
			summaryContent = <>{enTransfers[zhname]}</>
		}
		summaryClass = 'summary-en'
	} else {
		const transfer = enTransfers[zhname]
		summaryContent = <>{(isArrived ? "We are arriving at " + ennames[currentStation].replaceAll('_', '') : "The next station is " + ennames[currentStation].replaceAll('_', '')) + (transfer ? ', ' + transfer : '')}</>
		summaryClass = 'summary-en'
	}
	const overview = () => {
		const stationElements: JSX.Element[] = []

		for (let i = 0; i < zhnames.length; i++) {
			stationElements.push((
				<StationItem
					id={i}
					zhname={zhnames[i]}
					enname={ennames[i].replaceAll('_', ' ')}
					currentStation={currentStation}
					timeSince={timeSince}
					currentFrame={currentFrame}
				/>))
		}

		const startHighlight = isArrived ? currentStation + 1 : currentStation;
		const period = zhnames.length - startHighlight + 1;
		const highlightUntil = startHighlight + Math.floor((timeSince % (period * 10)) / 10)

		const arrowElements: JSX.Element[] = []
		for (let i = 0; i < zhnames.length; i++) {
			const highlight = startHighlight <= i && i < highlightUntil ? ' arrow-element-highlight' : ''
			arrowElements.push((
				<div className={'arrow-element' + highlight} id={'arrow-' + i} key={i}>
					<Img src={staticFile(highlight ? 'arrow_highlight.svg' : 'arrow.svg')} />
				</div>
			))
		}

		const isRightSide = rightSide.has(zhname)

		return (
			<main id='main-lcd'>
				<div className='line' />
				<header id="header">
					<span id='summary' className={summaryClass}
					><div
						style={{
							overflow: 'hidden',
							width: Math.min(1500, 30 * (timeSince % 90))
						}}>{summaryContent}</div></span>
					<span id='doorside' className={'doorside-' + (isRightSide ? 'opposite' : 'this')}>
						<div id='door-icon'>
							{(() => {
								if (isRightSide)
									return <Img src={staticFile('door-close.svg')} />
								else
									return <Img src={staticFile('door-open-' + (Math.floor(timeSince % 90 / 30) + 1) + '.svg')} />
							}
							)()}
						</div>
						<div style={{ fontSize: "80%", letterSpacing: '0.5em' }}>
							{isRightSide?'对':'本'}侧开门
						</div><div style={{ fontSize: "40%" }}>
							Doors will open on {isRightSide ? 'the opposite' : 'this'} side
						</div>
					</span>
				</header>
				<div id='stations-left' className='station-list station-list-horizontal'>
					{stationElements.slice(0, 3)}
				</div>
				<div id='stations-bottom' className='station-list station-list-vertical'>
					{stationElements.slice(3, stationElements.length - 3)}
				</div>
				<div id='stations-right' className='station-list station-list-horizontal'>
					{stationElements.slice(stationElements.length - 3)}
				</div>
				<div id='arrow-container-left' className='arrow-container'>
					{arrowElements.slice(1, 3)}
				</div>
				<div id='arrow-container-left-bottom' className='arrow-container'>
					{arrowElements[3]}
				</div>
				<div id='arrow-container-bottom' className='arrow-container'>
					{arrowElements.slice(4, 22)}
				</div>
				<div id='arrow-container-right-bottom' className='arrow-container'>
					{arrowElements[22]}
				</div>
				<div id='arrow-container-right' className='arrow-container'>
					{arrowElements.slice(23, 25)}
				</div>
			</main>
		)
	};
	return overview();
};
