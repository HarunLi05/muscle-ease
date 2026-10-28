const $ = (selector) => document.querySelector(selector);
const source = {
  neck: ['NHS · 温和柔韧练习', 'https://www.nhs.uk/live-well/exercise/flexibility-exercises/'],
  shoulder: ['AAOS · 肩部活动练习', 'https://www.orthoinfo.org/recovery/rotator-cuff-and-shoulder-conditioning-program/'],
  hip: ['AAOS · 髋部肌肉练习', 'https://www.orthoinfo.org/recovery/hip-conditioning-program/'],
  knee: ['AAOS · 腿部肌肉练习', 'https://www.orthoinfo.org/recovery/knee-conditioning-program/'],
  spine: ['AAOS · 背部活动练习', 'https://www.orthoinfo.org/recovery/spine-conditioning-program/'],
  chest: ['NHS · 坐姿活动练习', 'https://www.nhs.uk/live-well/exercise/sitting-exercises/'],
  breathing: ['NHS · 放松呼吸', 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/'],
  wrist: ['NHS · 前臂与手腕活动', 'https://services.eastcheshire.nhs.uk/physiotherapy/self-help/elbow-and-wrist-pain-physiotherapy']
};
const exercise = (title, dose, seconds, art, steps, tip) => ({title,dose,seconds,art,steps,tip});
const muscles = {
  traps: {name:'斜方肌',en:'TRAPEZIUS',area:'肩颈 · 上背',short:'肩颈',views:['front','back'],desc:'从后颈延伸到肩膀与上背，帮助肩胛骨活动。先让肩膀沉下来，试试温和的活动。',habit:'长时间低头、耸肩或维持同一姿势后，可能感觉紧绷。',sources:['neck'],exercises:[
    exercise('温和侧颈伸展','每侧 5 秒 · 各 3 次',5,'neck',['坐直，双肩放松，头慢慢向一侧倾斜，感受另一侧颈部的轻微牵拉。','保持 5 秒后回正；左右交替，各做 3 次。'],'不拉拽头部，不耸肩'),
    exercise('缓慢绕肩','前后各 5 圈 · 约 30 秒',30,'shoulder',['手臂自然垂下，肩膀缓慢向前、向上、向后、向下画圈。','做 5 圈后换方向，全程保持自然呼吸。'],'小幅度、慢慢转动')
  ]},
  deltoid: {name:'三角肌',en:'DELTOID',area:'肩部',short:'肩部',views:['front','back'],desc:'包裹在肩部外侧，参与抬起与移动手臂。放松时，先从轻柔的肩部活动开始。',habit:'提重物或重复抬臂之后，肩部肌肉可能感到疲劳。',sources:['shoulder'],exercises:[
    exercise('横臂轻拉伸','每侧 30 秒 · 各 2 次',30,'cross',['一只手臂横放胸前，另一只手扶住上臂，缓慢向身体靠近。','保持肩膀下沉，感到肩后侧轻微牵拉即可，然后换边。'],'扶上臂，不压肘关节'),
    exercise('手臂小幅摆动','每侧约 30 秒',30,'pendulum',['一手扶稳桌面，身体略微前倾，让另一只手臂自然垂下。','放松手臂，轻轻前后摆动，再做小幅度画圈。'],'摆动轻柔，不主动甩臂')
  ]},
  chest: {name:'胸大肌',en:'PECTORALIS MAJOR',area:'胸部',short:'胸部',views:['front'],desc:'位于胸前，帮助手臂向前与向内活动。用舒展的坐姿，感受胸前空间慢慢打开。',habit:'伏案或含胸维持较久时，胸前可能有紧缩感。',sources:['chest'],exercises:[
    exercise('坐姿舒胸','保持 5–10 秒 · 做 5 次',10,'chest',['坐在稳固的椅子上，双脚踩地，手臂向身体两侧轻轻打开。','肩膀往后、往下放松，胸前稍微展开；避免挺腰。'],'只到舒适的轻拉伸位置'),
    exercise('肩胛轻轻后收','慢做 5 次 · 约 30 秒',30,'shoulder',['手臂自然垂下，肩膀放低，轻轻让两侧肩胛骨向后靠近。','短暂停留，再完全放松，避免用力夹紧。'],'不用力抬胸或憋气')
  ]},
  biceps: {name:'肱二头肌',en:'BICEPS BRACHII',area:'上臂前侧',short:'上臂',views:['front'],desc:'位于上臂前侧，参与屈肘与旋转前臂。先放下手里的东西，缓慢活动手臂。',habit:'拎东西、抱物或反复弯曲手肘后，可能出现疲劳感。',sources:['shoulder'],exercises:[
    exercise('舒适范围内屈伸','慢做 5–8 次 · 约 30 秒',30,'arm',['手臂放在身体两侧，掌心朝前，缓慢弯曲再伸直手肘。','在舒适范围内往返活动，不要把手肘用力锁死。'],'先卸下负重再活动'),
    exercise('手臂下垂放松','自然呼吸 · 30 秒',30,'pendulum',['坐稳或站稳，让手臂自然下垂，双肩放松。','轻轻活动手指，感受上臂不再持续用力。'],'适合短暂休息时做')
  ]},
  triceps: {name:'肱三头肌',en:'TRICEPS BRACHII',area:'上臂后侧',short:'上臂后侧',views:['back'],desc:'位于上臂后侧，帮助伸直手肘。先卸下负重，让手臂在舒适范围内缓慢活动。',habit:'推举、俯卧撑或反复推物之后，上臂后侧可能感觉疲劳。',sources:['shoulder'],exercises:[
    exercise('温和屈肘伸展','每侧 10 秒 · 各 2 次',10,'arm',['一侧手臂抬到舒适的位置，弯曲手肘，让手靠近同侧肩后方。','另一只手轻扶上臂，保持肩膀放松，出现轻微牵拉感即可。'],'抬臂不适就跳过，不压肘'),
    exercise('轻柔屈伸手肘','慢做 5–8 次 · 约 30 秒',30,'arm',['手臂放在身体两侧，缓慢弯曲手肘，再慢慢伸直。','全程不负重，避免突然伸直或锁死手肘。'],'用舒适范围活动')
  ]},
  forearm: {name:'前臂肌群',en:'FOREARM MUSCLES',area:'前臂',short:'前臂',views:['front','back'],desc:'帮助你握持物品、活动手腕与手指。放松握力，用轻柔的手腕活动给前臂休息。',habit:'长时间打字、使用鼠标或紧握物品后，可能感觉发紧。',sources:['wrist'],exercises:[
    exercise('前臂掌侧轻伸展','每侧 10 秒 · 各 2 次',10,'wrist',['手臂向前，肘部微弯，掌心向上。另一只手轻扶手指，使手腕缓慢后伸。','出现轻微拉伸感即可，保持后放松并换边。'],'不猛掰手指，不追求角度'),
    exercise('前臂背侧轻伸展','每侧 10 秒 · 各 2 次',10,'wristDown',['手臂向前，掌心朝下。另一只手轻扶手背，让手腕缓慢向下弯曲。','肩膀保持放松，感受前臂背侧轻微牵拉，再换边。'],'出现麻刺感立即停止')
  ]},
  abs: {name:'腹部肌群',en:'ABDOMINAL MUSCLES',area:'腹部',short:'腹部',views:['front'],desc:'参与躯干稳定和呼吸。这里从放松呼吸开始，减少不必要的持续收腹用力。',habit:'持续绷紧腹部、训练或紧张之后，可能需要短暂休息。',sources:['breathing'],exercises:[
    exercise('自然腹式呼吸','慢慢呼吸 · 60 秒',60,'breath',['坐稳或仰卧，一只手放在腹部。鼻子轻轻吸气，感受腹部自然起伏。','慢慢呼气，放松腹部；不追求深度，也不用力把肚子鼓起。'],'不憋气，不刻意过度深呼吸'),
    exercise('仰卧屈膝休息','舒适放松 · 60 秒',60,'rest',['仰卧在平整舒适的垫子上，膝盖弯曲，双脚平放。','手臂自然摆放，放松下颌、肩膀与腹部，保持自然呼吸。'],'这是放松休息，不是腹痛处理')
  ]},
  lats: {name:'背阔肌',en:'LATISSIMUS DORSI',area:'背部两侧',short:'背部两侧',views:['back'],desc:'位于背部两侧，帮助手臂向下、向后活动。缓慢伸展，感受侧背部的轻微拉伸。',habit:'划船、下拉或重复用力拉物之后，侧背部可能感觉紧绷。',sources:['spine'],exercises:[
    exercise('扶桌向后坐','保持 15 秒 · 做 2 次',15,'table',['双手扶稳桌面，双脚站稳，膝盖微弯。','臀部缓慢向后移动，身体前倾，手臂轻轻延伸；不向下压肩。'],'桌子需稳固，腰背保持舒适'),
    exercise('温和站姿侧伸','每侧 10 秒 · 各 2 次',10,'side',['双脚与髋同宽，一只手轻抬过头，身体缓慢向对侧倾斜。','保持朝向正前方，感觉侧背部轻微牵拉即可，回正后换边。'],'不转腰，不强行抬臂')
  ]},
  lowerback: {name:'腰背肌群',en:'LOWER BACK MUSCLES',area:'腰部两侧',short:'腰背',views:['back'],desc:'位于腰部两侧，帮助维持躯干姿势。用小幅度活动和休息，减少长时间维持同一姿势。',habit:'久坐、久站或反复搬物之后，腰部肌肉可能感觉疲劳。',sources:['spine','neck'],exercises:[
    exercise('仰卧抱单膝','每侧 15 秒 · 各 2 次',15,'knee',['仰卧、双膝弯曲，一条腿保持放松。双手扶住另一侧大腿后方。','将这条腿轻轻靠近胸部，腰背保持舒适，再换边。'],'不压膝，不抬头硬拉'),
    exercise('站姿轻侧屈','每侧 2 秒 · 各 3 次',2,'side',['双脚与髋同宽，一只手沿大腿外侧缓慢下滑，身体轻微侧弯。','停留 2 秒后回正，左右交替，不追求弯得更低。'],'只做小幅度舒适活动')
  ]},
  glutes: {name:'臀部肌群',en:'GLUTEAL MUSCLES',area:'臀部',short:'臀部',views:['back'],desc:'位于臀部，参与站立、行走与髋部稳定。轻柔活动髋部，给久坐的身体一点变化。',habit:'久坐或爬坡、深蹲之后，臀部可能有紧绷感。',sources:['hip'],exercises:[
    exercise('仰卧四字伸展','每侧 30 秒 · 各 2 次',30,'figure4',['仰卧屈膝，一侧脚踝轻放到另一侧大腿上，形成“四”字。','双手扶住支撑腿的大腿后侧，轻轻靠近身体，感受臀部牵拉。'],'不推压膝盖，髋部保持舒适'),
    exercise('仰卧抱膝放松','每侧 15 秒 · 各 2 次',15,'knee',['仰卧屈膝，双手扶住一侧大腿后方。','轻轻将大腿靠近胸前，感到臀部轻微牵拉后停留，再换边。'],'肩膀放松，不屏住呼吸')
  ]},
  quads: {name:'股四头肌',en:'QUADRICEPS',area:'大腿前侧',short:'大腿前侧',views:['front'],desc:'位于大腿前侧，帮助伸直膝盖。拉伸时扶稳支撑物，让身体保持平衡。',habit:'上下楼、骑行、跑步或深蹲之后，大腿前侧可能发紧。',sources:['knee'],exercises:[
    exercise('扶稳站姿拉伸','每侧 30 秒 · 各 2 次',30,'quad',['一手扶稳墙面或椅背，另一手轻握同侧脚踝，脚跟缓慢靠近臀部。','两膝保持靠近，站立腿微弯，躯干直立，然后换边。'],'够不到脚踝就跳过，不强拉'),
    exercise('站起慢走休息','轻松走动 · 60 秒',60,'walk',['从坐姿缓慢起身，在平坦、安全的地方轻松走动。','步幅自然，让大腿从持续用力或静止状态中休息。'],'急性拉伤后不做此跟练')
  ]},
  hamstrings: {name:'腘绳肌',en:'HAMSTRINGS',area:'大腿后侧',short:'大腿后侧',views:['back'],desc:'位于大腿后侧，参与屈膝与髋部伸展。轻拉即可，避免强行摸脚尖或弹震。',habit:'久坐、跑步或髋部训练之后，大腿后侧可能感觉紧绷。',sources:['hip'],exercises:[
    exercise('仰卧抬腿伸展','每侧 30 秒 · 各 2 次',30,'hamstring',['仰卧、双膝弯曲。抬起一条腿，双手扶住大腿后侧。','慢慢伸直这条腿，膝盖可微弯；出现轻拉伸感后保持，再换边。'],'不勾头，不强行伸直膝盖'),
    exercise('仰卧交替屈伸','每侧 5 次 · 约 30 秒',30,'knee',['仰卧屈膝，一条腿轻抬，双手扶住大腿后方。','在舒适范围里，缓慢伸膝、再弯曲；不做弹震。'],'保持轻松，不追求幅度')
  ]},
  calves: {name:'小腿肌群',en:'CALF MUSCLES',area:'小腿后侧',short:'小腿',views:['front','back'],desc:'主要包括腓肠肌与比目鱼肌，参与蹬地与站立。拉伸时脚跟落地，缓慢移动重心。',habit:'久站、走路或跑步之后，小腿可能感觉发紧。',sources:['knee'],exercises:[
    exercise('扶墙小腿伸展','每侧 30 秒 · 各 2 次',30,'calf',['双手扶墙，双脚前后站立，后腿伸直，脚尖朝前、脚跟贴地。','前膝轻弯，身体慢慢前移，感受后腿小腿的牵拉，再换边。'],'后脚跟贴地，不向外撇脚'),
    exercise('屈膝小腿伸展','每侧 30 秒 · 各 2 次',30,'calfBent',['保持扶墙前后站姿，后脚脚跟继续贴地。','后膝轻轻弯曲，重心缓慢前移，感觉小腿下部轻微拉伸即可。'],'幅度可以很小，别弹震')
  ]}
};

const art = {
 neck:'<path d="M35 21c-8 1-11 7-12 15m21-16c9 1 12 7 13 17M27 28l-3 24m28-24 3 24M32 31v22h14V30"/><ellipse cx="39" cy="13" rx="7" ry="9" transform="rotate(20 39 13)"/><path class="accent" d="M22 8q-7 5-5 14m-3-4 3 4 4-3"/>',
 shoulder:'<circle cx="39" cy="12" r="7"/><path d="M34 22h11l8 8 3 20M34 22l-10 8-3 20M30 29l1 25h15l2-25"/><path class="accent" d="M14 29a8 8 0 1 1 5-12m-4-1 4 1-1 4M59 29a8 8 0 1 0-5-12"/>',
 cross:'<circle cx="39" cy="12" r="7"/><path d="M30 25l-1 29h19l-1-29M30 25l24 8-4 5-25-7M46 44l-10-7 5-11"/><path class="accent" d="M22 22h-7m4-3-4 3 4 3"/>',
 pendulum:'<path d="M51 25h17m-5 0v30M25 31l20-12 12 8 8-1M31 28l2 26M26 32l-6 23m12-17 12 17"/><circle cx="54" cy="12" r="6"/><path class="accent" d="M25 48q8 8 16 0m-3-2 3 2-2 3"/>',
 chest:'<circle cx="39" cy="12" r="7"/><path d="M33 23h12l2 24H30l3-24M31 27l-13 9-8-9M47 27l12 9 8-9M32 47l-2 10m16-10 2 10"/><path class="accent" d="M30 31h-9m4-4-4 4 4 4M48 31h9m-4-4 4 4-4 4"/>',
 arm:'<circle cx="39" cy="12" r="7"/><path d="M32 23h14l2 32H30l2-32M31 27l-10 17 3 13M48 27l10 17 7-13"/><path class="accent" d="M59 20q10 3 10 11m-3-3 3 3 3-3"/>',
 wrist:'<path d="m9 41 29-5 9-6 14 1m-23 5 8 6 17-1M47 30l3-7 4 1-1 8m-4 3 11 2M11 46l28-4"/><path class="accent" d="M57 18q10 4 11 14m-3-3 3 3 3-3"/>',
 wristDown:'<path d="m9 29 27 4 12 4 13 2m-25-6 8 13 11 5 4-3-10-7m-38-7 26 3m18 6 5 1"/><path class="accent" d="M62 25q9 7 5 17m-3-3 3 3 4-2"/>',
 breath:'<circle cx="39" cy="12" r="7"/><path d="M32 23h14l3 31H29l3-31M31 27l-8 14 12 4m13-18 8 14-12 4M32 54l-6 8m20-8 6 8"/><path class="accent" d="M36 40h6m-3-3v6M16 33l-5-3m50 3 5-3"/>',
 rest:'<circle cx="13" cy="43" r="6"/><path d="M20 46h24l10-18 12 24h6M44 46l12-11 11 17M7 57h65M24 45l11 6h10"/><path class="accent" d="M30 36q4-5 8 0"/>',
 table:'<path d="M49 27h24m-5 0v29M16 44l16-17h21M19 41l-5 17m7-17 5 17"/><circle cx="41" cy="22" r="5"/><path class="accent" d="M36 37h-8m3-3-3 3 3 3"/>',
 side:'<circle cx="35" cy="15" r="7"/><path d="M30 25l15-3 9 26H35l-5-23M33 28l-9 18m20-24-4-16-14-2M37 48l-4 14m17-14 7 14"/><path class="accent" d="M53 10q12 6 13 17m-4-3 4 3 3-4"/>',
 knee:'<circle cx="12" cy="47" r="6"/><path d="M20 49h22l13-22 12 20h7M29 49l18-13 9 13M26 46l8-12 15-1M7 59h67"/><path class="accent" d="M61 22h-9m4-3-4 3 4 3"/>',
 figure4:'<circle cx="12" cy="48" r="6"/><path d="M19 50h23l14-24 13 24h6M39 50l12-14 13 6-13 3M24 47l13-12 13 1M7 60h69"/><path class="accent" d="M56 20h-9m4-3-4 3 4 3"/>',
 quad:'<circle cx="38" cy="11" r="6"/><path d="M32 21h12l2 23H31l1-23M33 25l-14 5H8m35-5 8 13-9 8M35 44v18m7-18 12 4-7-13M9 26v36"/><path class="accent" d="M60 40q3 8-3 14m-1-4 1 4 4-1"/>',
 walk:'<circle cx="41" cy="10" r="6"/><path d="m37 21 10 2-3 22-11-1 4-23M37 25l-12 9-8-4m29-3 8 8 11-4M35 44l-5 17H19m23-16 13 11 7 5"/><path class="accent" d="M51 13h14m-4-4 4 4-4 4"/>',
 hamstring:'<circle cx="11" cy="49" r="6"/><path d="M18 51h27l17-17 9 18h6M39 50l1-26 8-16M26 48l3-16 12-2M5 62h71"/><path class="accent" d="M55 16q7 8 3 16m-3-3 3 3 4-3"/>',
 calf:'<path d="M64 7v56M51 24l-19 4-9 21-13 9m22-30 11 18 15 12M37 29l16-11 10 1M41 23l13-7 9-4"/><circle cx="42" cy="14" r="6"/><path class="accent" d="M16 44l-6 2m4-4-4 4 5 2"/>',
 calfBent:'<path d="M64 7v56M51 24l-18 5-10 16-2 13H10m23-29 11 17 14 12M37 29l16-11 10 1M41 23l13-7 9-4"/><circle cx="42" cy="14" r="6"/><path class="accent" d="M16 39l-6 2m4-4-4 4 5 2"/>'
};
function drawing(type){return `<svg viewBox="0 0 80 72" aria-hidden="true">${art[type]||art.shoulder}</svg>`;}

// Anatomical regions are intentionally simplified for point selection.
// Each pair shares a region ID; these are educational regions, not a diagnostic map.
const frontParts = [
 ['traps','M204 114Q198 134 171 143L188 153 217 137Z','M205 126 190 142m14-9-8 11'],
 ['deltoid','M169 146Q146 146 142 177L154 197Q170 188 180 161Z','M165 150q-15 14-15 34m19-31-12 32m16-25-8 24'],
 ['chest','M183 154 216 147 217 207Q197 220 169 202L163 188Z','M178 161 212 175m-39-6 40 11m-43-3 43 11m-43-3 43 11m-42-3 40 10'],
 ['biceps','M149 193Q140 198 133 224L125 264Q137 275 149 250L160 207Z','M149 204 135 252m18-40-14 37m7-41-11 27'],
 ['forearm','M124 265Q114 287 109 319L101 361 116 363 133 309 138 277Z','M124 280 108 348m20-61-13 54m17-52-10 40'],
 ['abs','M200 216Q207 213 217 216L216 242 202 242Z','M204 222h10m-10 7h10m-10 7h10'],
 ['abs','M202 246 216 246 216 270 203 270Z','M205 252h9m-9 7h9m-9 7h9'],
 ['abs','M203 274 216 274 216 303 207 316 202 298Z','M205 281h9m-8 7h8m-7 7h7'],
 ['abs','M174 214 195 219 198 291 192 318 181 298Z','M179 227 193 240m-12-2 13 13m-11-2 12 13m-10-2 11 13m-9-1 9 12'],
 ['quads','M177 346Q163 370 169 409L178 484 192 513 202 488 204 409 198 367Z','M179 365 187 481m-12-96 9 86m6-102 4 111m-18-80 9 86'],
 ['quads','M205 370 216 394 213 460 208 500 198 520 196 494 204 433Z','M209 399 204 480m7-62-6 64'],
 ['quads','M173 351 188 362 213 462 207 470 183 405Z','M181 368 207 454'],
 ['calves','M184 544 199 542 205 579 201 636 196 677 187 680 189 626Z','M190 554 195 615m-5-44 3 53m-2 8-1 34'],
 ['calves','M179 551 185 563 186 629 181 663 178 620Z','M181 574v43']
];
const backParts = [
 ['traps','M207 112 218 117 218 251Q203 217 183 196L164 155Q181 138 204 133Z','M207 129 176 153m33-15-29 23m31-15-26 25m28-13-23 23m25-9-19 24m19-8-10 21'],
 ['deltoid','M161 150Q140 159 141 185L151 203 172 186 182 164Z','M159 157q-15 18-10 33m15-29-8 27m14-22-8 22'],
 ['triceps','M149 202 164 191 156 229 143 263 126 265 134 226Z','M151 211 135 253m21-41-13 38'],
 ['forearm','M125 269 139 273 128 316 115 363 101 359 111 314Z','M125 280 108 347m5-3 17-58m-12 53 15-44'],
 ['lats','M173 192 194 227 217 254 202 289 184 313 177 270 163 219Z','M170 212 209 254m-39-31 36 37m-33-25 30 33m-27-20 25 30m-22-17 19 28'],
 ['lowerback','M203 279 216 263 216 332 198 349 187 321Z','M210 279 205 330m-1-34-7 36m-4-12 12-25'],
 ['glutes','M182 332Q193 348 215 340L216 385Q197 422 171 397 161 371 182 332Z','M184 343q-16 31 19 47m-15-43q-15 26 19 39m-14-35q-7 20 17 31m-7-26 8 17'],
 ['hamstrings','M171 405Q183 417 196 413L199 465 193 518 183 525 175 474Z','M179 421 188 503m-12-65 8 64m4-78 5 67'],
 ['hamstrings','M202 407 215 392 212 473 204 523 195 527 201 473Z','M207 419 204 493m4-53-5 69'],
 ['calves','M185 539Q170 549 174 585L185 621 195 611 199 576 195 544Z','M183 548 186 605m1-56 3 50m-11-43 3 38'],
 ['calves','M199 540 209 556 207 586 197 620 190 618 197 577Z','M203 552 199 600'],
 ['calves','M186 624 196 622 195 669 189 689 184 682Z','M190 631 189 677']
];
const frontLabels = [['traps','肩颈',49,155,185,145],['chest','胸部',48,220,180,187],['forearm','前臂',34,315,119,305],['quads','大腿前侧',39,456,186,446],['deltoid','肩部',330,180,157,170],['biceps','上臂',342,249,144,234],['abs','腹部',334,305,205,267],['calves','小腿',332,600,194,575]];
const backLabels = [['traps','肩颈',49,160,191,166],['lats','背部两侧',35,257,185,242],['glutes','臀部',48,375,184,369],['hamstrings','大腿后侧',34,470,187,455],['deltoid','肩部',334,185,158,172],['forearm','前臂',340,307,121,301],['lowerback','腰背',332,321,205,311],['calves','小腿',332,590,186,574]];
let view = 'front';
let selected = 'traps';
const baseBody = 'M205 116 205 130Q191 138 168 143 149 147 141 168L129 218 118 270 109 308 100 360 97 376 90 389 89 408Q90 413 93 408L98 397 98 420Q100 425 103 420L105 398 108 420Q111 424 112 419L112 397 116 413Q120 416 120 411L117 387 119 369 140 310 146 277 163 231 174 207 181 263 180 307 171 343Q161 371 167 410L177 489 181 520 176 558 177 612 183 673 181 698 174 717Q173 724 185 725L208 725Q216 723 214 716L206 694 204 671 211 600 208 551 214 501 219 444 220 411 221 444 226 501 232 551 229 600 236 671 234 694 226 716Q224 723 232 725L255 725Q267 724 266 717L259 698 257 673 263 612 264 558 259 520 263 489 273 410Q279 371 269 343L260 307 259 263 266 207 277 231 294 277 300 310 321 369 323 387 320 411Q320 416 324 413L328 397 328 419Q329 424 332 420L335 398 337 420Q340 425 342 420L342 397 347 408Q350 413 351 408L350 389 343 376 340 360 331 308 322 270 311 218 299 168Q291 147 272 143 249 138 235 130L235 116Z';
function buildMap(){
 const mirror = 'translate(440 0) scale(-1 1)';
 const parts = (view==='front'?frontParts:backParts).map(([id,d,fibers])=>[false,true].map(flipped=>`<g ${flipped?`transform="${mirror}"`:''}><path class="muscle ${id===selected?'selected':''}" data-muscle="${id}" d="${d}" tabindex="-1"><title>${muscles[id].name}</title></path><path class="fibers" d="${fibers}"/></g>`).join('')).join('');
 const labels=(view==='front'?frontLabels:backLabels).map(([id,label,x,y,tx,ty])=>{const right=x>220;const targetX=right?440-tx:tx;const endX=right?x-10:x+label.length*14+8;return `<g class="anatomy-label ${selected===id?'selected':''}" style="pointer-events:none"><path d="M${targetX} ${ty}L${right?x-30:x+label.length*14+20} ${y-4}H${endX}"/><circle cx="${targetX}" cy="${ty}" r="2"/></g><g class="anatomy-label ${selected===id?'selected':''}" data-muscle="${id}" role="button" tabindex="0" aria-label="选择${muscles[id].name}"><rect x="${x-5}" y="${y-17}" width="${label.length*14+10}" height="26" fill="transparent"/><text x="${x}" y="${y}">${label}</text></g>`}).join('');
 $('#body-map').innerHTML=`<svg viewBox="0 0 440 770" role="group" aria-label="可点击的人体${view==='front'?'正面':'背面'}肌肉示意图"><defs><linearGradient id="muscle-fill" x1="0" x2="1" y1="0" y2=".6"><stop stop-color="#e5d8c9"/><stop offset=".5" stop-color="#d7c3ad"/><stop offset="1" stop-color="#ecdfcf"/></linearGradient><linearGradient id="active-fill" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#e8b29b"/><stop offset=".55" stop-color="#d9947d"/><stop offset="1" stop-color="#ecc0a9"/></linearGradient><linearGradient id="skin-fill"><stop stop-color="#f0e9dd"/><stop offset=".5" stop-color="#f7f1e7"/><stop offset="1" stop-color="#e9dfcf"/></linearGradient></defs><ellipse cx="220" cy="739" rx="65" ry="7" fill="#e9ecde" opacity=".6"/><path d="${baseBody}" fill="url(#skin-fill)" stroke="#cfc8b8" stroke-width="1.1"/><path d="M193 67Q194 34 220 33 246 34 247 67L244 93Q235 118 220 122 205 118 196 93Z" fill="url(#skin-fill)" stroke="#ccc5b7" stroke-width="1"/>${view==='front'?'<path d="m211 74-7 1m25-1 7 1m-17 4-2 12 6 2m-10 11q6 3 13 0M196 78l-3-4v13l5 5m46-14 3-4v13l-5 5" fill="none" stroke="#d1c5b4" stroke-width=".8"/>':'<path d="M201 91q19 10 38 0m-19 9v16" fill="none" stroke="#d1c5b4" stroke-width=".8"/>'}${parts}<g stroke="#cfc4b3" stroke-width=".8" fill="none" opacity=".8"><path d="M220 139v195M180 526q10 8 22 0m36 0q12 8 22 0M187 693l21 6m24 0 21-6M101 366l16 4m206 0 16-4"/>${view==='front'?'<path d="M204 328q16 8 32 0M178 335l35 24m14 0 35-24M214 325h12"/>':'<path d="M220 340v56M176 400q24 19 44-6 20 25 44 6"/>'}</g>${labels}</svg>`;
 $('#view-indicator').textContent=view==='front'?'ANTERIOR · 正面':'POSTERIOR · 背面';
 $('#muscle-chips').innerHTML=Object.entries(muscles).filter(([,m])=>m.views.includes(view)).map(([id,m])=>`<button class="muscle-chip" data-muscle="${id}" aria-pressed="${selected===id}">${m.short}</button>`).join('');
 $('#front-button').setAttribute('aria-pressed',view==='front');$('#back-button').setAttribute('aria-pressed',view==='back');
}
const playIcon='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.7c0-.5.6-.8 1-.5l8 5.3a.6.6 0 0 1 0 1l-8 5.3c-.4.3-1 0-1-.5Z"/></svg>';
function buildGuide(){
 const m=muscles[selected];
 $('#guide-content').innerHTML=`<div class="guide-eyebrow"><span class="step-label">02 / 给它一点放松</span><span class="area-tag">${m.area}</span></div><div class="muscle-header"><h2 id="muscle-name">${m.name}</h2><span class="latin">${m.en}</span><p class="muscle-description">${m.desc}</p><div class="habit-note"><span>◌</span><span>${m.habit}</span></div></div><div class="exercise-heading"><h3>试试这两个动作</h3><span>温和 · 无需器械</span></div>${m.exercises.map((e,i)=>`<article class="exercise-card"><div class="exercise-card-top"><div class="exercise-art">${drawing(e.art)}</div><div><div class="exercise-num">MOVEMENT 0${i+1}</div><h4 class="exercise-title">${e.title}</h4><span class="exercise-dose">${e.dose}</span></div></div><ol class="exercise-steps">${e.steps.map(s=>`<li>${s}</li>`).join('')}</ol><div class="exercise-card-bottom"><span class="exercise-tip">${e.tip}</span><button class="start-button" data-exercise="${i}" aria-label="开始${e.title}，计时${e.seconds}秒">${playIcon}开始 ${e.seconds} 秒</button></div></article>`).join('')}<div class="care-note"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 9v5m0-8v1"/></svg><div><strong>轻微拉伸感就够了</strong>用于日常肌肉紧绷的放松参考。出现锐痛、麻木或疼痛加重就停止；受伤后或持续疼痛，请先咨询专业人员。</div></div>`;
}
function selectMuscle(id){if(!muscles[id])return;const active=document.activeElement;const focusClass=active?.classList.contains('muscle-chip')?'.muscle-chip':active?.classList.contains('anatomy-label')?'.anatomy-label':null;selected=id;buildMap();buildGuide();if(focusClass)document.querySelector(`${focusClass}[data-muscle="${id}"]`)?.focus();if(window.matchMedia('(max-width: 800px)').matches)document.querySelector('.guide-panel').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
function switchView(next){if(view===next)return;view=next;if(!muscles[selected].views.includes(next))selected=next==='back'?'traps':'chest';buildMap();buildGuide();}
document.addEventListener('click',event=>{const target=event.target.closest('[data-muscle]');if(target)selectMuscle(target.dataset.muscle);const action=event.target.closest('[data-exercise]');if(action)startTimer(muscles[selected].exercises[Number(action.dataset.exercise)]);});
document.addEventListener('keydown',event=>{const target=event.target.closest('.anatomy-label');if(target&&(event.key==='Enter'||event.key===' ')){event.preventDefault();selectMuscle(target.dataset.muscle);const next=document.querySelector(`.anatomy-label[data-muscle="${target.dataset.muscle}"]`);next?.focus();}});
$('#front-button').addEventListener('click',()=>switchView('front'));$('#back-button').addEventListener('click',()=>switchView('back'));
function showInfo(type){
 const m=muscles[selected];
 $('#dialog-content').innerHTML=type==='about'?'<h2>点一点，松一松。</h2><ol><li>在人体图上点击肌肉，或点击图下方的部位名称。</li><li>切换正面、背面，找到身体另一侧的肌肉。</li><li>阅读右侧步骤，点击“开始”开启单次动作计时。计时结束后，按说明换边或重复。</li></ol><p>只做到舒适的轻微拉伸，不弹震、不硬拉。动作示意用来辅助理解，具体姿势请以文字步骤为准。</p><p class="dialog-small">这是浅层肌肉区域的简化示意。页面提供日常放松参考，不根据位置判断疼痛病因，也不提供个体化康复处方。</p>':`<h2>动作参考与适用范围</h2><p>当前区域：${m.name}。动作说明为便于日常使用而整理的温和活动建议；次数和时长可根据舒适度减少，不需要完成全部动作。</p><p>参考阅读：</p><ul>${(m.sources.length?m.sources:Object.keys(source)).map(key=>`<li><a href="${source[key][1]}" target="_blank" rel="noopener noreferrer">${source[key][0]} ↗</a></li>`).join('')}</ul><p class="dialog-small">不用于急性损伤、术后康复或不明原因的疼痛。疼痛持续、加重或伴随麻木、无力时，请先咨询医生或物理治疗师。资料链接供阅读参考，不代表相关机构对本网页的认可。</p>`;
 $('#info-dialog').showModal();
}
$('#about-button').addEventListener('click',()=>showInfo('about'));$('#sources-button').addEventListener('click',()=>showInfo('sources'));$('#close-dialog').addEventListener('click',()=>$('#info-dialog').close());$('#info-dialog').addEventListener('click',event=>{if(event.target===$('#info-dialog')){const box=event.target.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)event.target.close();}});
let timerInterval=null,timerRemaining=0,timerDeadline=0,timerPaused=false,timerDone=false;
function updateTimer(){
 if(!timerPaused&&!timerDone)timerRemaining=Math.max(0,Math.ceil((timerDeadline-Date.now())/1000));
 $('#timer-display').textContent=`${String(Math.floor(timerRemaining/60)).padStart(2,'0')}:${String(timerRemaining%60).padStart(2,'0')}`;
 if(timerRemaining===0&&!timerDone){timerDone=true;clearInterval(timerInterval);$('#timer-status').textContent='这一组完成了';$('#timer-caption').textContent='慢慢回位，按动作说明换边或休息';$('#pause-timer').textContent='↻';$('#pause-timer').setAttribute('aria-label','再做一组');}
}
let currentExercise=null;
function startTimer(e){clearInterval(timerInterval);currentExercise=e;timerRemaining=e.seconds;timerDeadline=Date.now()+e.seconds*1000;timerPaused=false;timerDone=false;$('#timer-dock').hidden=false;$('#timer-title').textContent=e.title;$('#timer-status').textContent='正在放松 · 单次计时';$('#timer-caption').textContent='自然呼吸，不要憋气';$('#pause-timer').textContent='Ⅱ';$('#pause-timer').setAttribute('aria-label','暂停计时');updateTimer();timerInterval=setInterval(updateTimer,200);}
$('#pause-timer').addEventListener('click',()=>{if(timerDone){startTimer(currentExercise);return;}if(!timerPaused)updateTimer();timerPaused=!timerPaused;if(!timerPaused)timerDeadline=Date.now()+timerRemaining*1000;$('#pause-timer').textContent=timerPaused?'▷':'Ⅱ';$('#pause-timer').setAttribute('aria-label',timerPaused?'继续计时':'暂停计时');$('#timer-status').textContent=timerPaused?'已暂停':'正在放松 · 单次计时';});
$('#close-timer').addEventListener('click',()=>{clearInterval(timerInterval);$('#timer-dock').hidden=true;});
buildMap();buildGuide();
