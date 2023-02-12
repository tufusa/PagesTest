var h=Object.defineProperty;var u=(a,t,e)=>t in a?h(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var n=(a,t,e)=>(u(a,typeof t!="symbol"?t+"":t,e),e);import{R as c,j as r,a as s,r as o,c as l}from"./index-552142d5.js";class g extends c.Component{constructor(e){super(e);n(this,"Image",e=>s("img",{src:e.path,className:"quizImage fadein"}));n(this,"Input",()=>{const[e,i]=o.useState(""),m=o.createRef(),d=p=>{p.currentTarget.blur(),m.current.blur(),this.Judge(e,()=>{i("")})};return r("div",{className:"input",children:[s("input",{value:e,onChange:p=>{i(p.target.value)},readOnly:this.state.isCleared,spellCheck:"false",ref:m}),s("button",{onClick:d,children:"OK"})]})});n(this,"Judge",(e,i)=>{this.state.isCleared||(this.props.info.answers.includes(e)?(this.props.onClear(),this.setState({isCleared:!0})):i())});n(this,"Description",()=>{const e=o.createRef(),i=()=>e.current.scrollIntoView({behavior:"smooth",block:"start"});return c.useEffect(()=>{i()},[]),r("div",{className:"description",ref:e,children:[s("img",{src:this.props.info.descPath}),r("div",{className:"text",children:[s("h2",{className:"title",children:this.props.info.name}),s("p",{children:this.props.info.description})]})]})});this.state={isCleared:!1}}render(){return r("div",{className:"quiz",children:[s(this.Image,{path:this.props.info.path}),s(this.Input,{}),this.state.isCleared&&s(this.Description,{})]})}}const f=[{path:"../images/q1.png",answers:["たかつがわ","タカツガワ"],name:"高津川",descPath:"../images/q1_desc.png",description:"益田市を縦断するように流れる一級河川。全国の一級河川で唯一ダムがない。清流として知られ、国土交通省が毎年発表する「水質が最も良好な河川」に過去5回以上選出されている。鮎。"},{path:"../images/kamoshima.png",answers:["かもしま","カモシマ"],name:"鴨島",descPath:"../images/masuda_start.png",description:"かつて存在したと云われる島。柿本人麻呂の終焉地であると伝えられている。"},{path:"../images/hikimi.png",answers:["ひきみ","ヒキミ"],name:"匹見町",descPath:"../images/masuda_start.png",description:"匹見峡。滝。温泉。たぬき。過疎発祥の地。"},{path:"../images/manpukuji.png",answers:["まんぷくじ","マンプクジ"],name:"萬福寺",descPath:"../images/masuda_start.png",description:"時宗の寺院。国指定重要文化財。庭園は雪舟四大庭園の一つ。益田市は雪舟の没地でもある。"},{path:"../images/hatimitsu.png",answers:["はちみつ","ハチミツ"],name:"空港はちみつ",descPath:"../images/masuda_start.png",description:"益田市の萩・石見空港では「萩・石見空港ミツバチプロジェクト」と称して養蜂が行われており、そのブランドが空港ハチミツ。人気。百花蜜。"},{path:"../images/kakinoki.png",answers:["かきのき","カキノキ"],name:"ダイニングカフェ柿の木",descPath:"../images/masuda_start.png",description:"持石海岸沿いに立つレストラン。テラス席からは日本海が一望でき、稀にイルカが見えることも。メニューやドリンク、スイーツも豊富で、大変美味しい。何を頼んでも間違いない。"},{path:"../images/grandtoit.png",answers:["ぐらんとわ","グラントワ"],name:"グラントワ",descPath:"../images/masuda_start.png",description:'正式名称は島根芸術文化センター。島根県立石見美術館と島根県立いわみ芸術劇場が合体した施設であり、美術館と劇場が同じ建物内にある。愛称のグラントワ("Grand toit")はフランス語で広い屋根という意味であり、大きな切妻屋根や、外壁までもが石州瓦で覆われていることに由来する。'},{path:"../images/kakinomoto.png",answers:["かきのもと","カキノモト"],name:"柿本神社",descPath:"../images/masuda_start.png",description:"柿本人麻呂を祀る神社。人麻呂が鴨島で没した際に、その霊を祀るために造営されたと伝わる。その後鴨島は沈没するが御神体は対岸に流れ着き、改めて現在の場所に再建されたと云われている。柿本人麻呂の誕生を祝って毎年陰暦の8月1日に八朔祭という祭りが催され、その際神事として行われる流鏑馬でも有名である。"},{path:"../images/iwamikagura.png",answers:["いわみかぐら","イワミカグラ"],name:"石見神楽 / 石見かぐら",descPath:"../images/masuda_start.png",description:"伝統神事。または、VTuber。"}];class k extends c.Component{constructor(t){super(t),this.state={clear:0}}render(){return s("div",{className:"Game",children:f.slice(0,this.state.clear+1).map((t,e)=>s(g,{info:t,onClear:()=>{this.setState({clear:this.state.clear+1})}},e))})}}l.createRoot(document.getElementById("root")).render(s(c.StrictMode,{children:s(k,{})}));
