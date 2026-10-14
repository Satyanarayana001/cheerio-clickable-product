import React, { useState } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Bell, BookOpen, Check, CheckCircle2,
  ChevronDown, ChevronRight, CircleHelp, Clock3, Compass, Home, Info, Layers3,
  LineChart, LockKeyhole, Menu, MessageCircle, MousePointer2, MoreHorizontal,
  Send, Settings2, ShieldCheck, Sparkles, Target, Workflow, X, Eye, EyeOff
} from "lucide-react";

const campaigns = [
  { id: "demo", name: "October demo class invite", date: "Oct 12, 2026", audience: "1,240 contacts", delivered: "96.8%", read: "71.4%", clicks: 184 },
  { id: "weekend", name: "Weekend batch reminder", date: "Oct 09, 2026", audience: "860 contacts", delivered: "98.1%", read: "76.2%", clicks: 231 },
  { id: "course", name: "New course announcement", date: "Oct 06, 2026", audience: "2,105 contacts", delivered: "95.9%", read: "64.8%", clicks: 312 }
];
const defaultMessage = "Still interested in joining a demo class? Reply here and our team will help you find a suitable batch.";

function Brand() {
  return <div className="brand"><span className="brand-mark">c.</span><span>cheerio<span className="coral">.</span></span><span className="brand-caption">WORKSPACE</span></div>;
}
function Login({ onLogin }) {
  const [email, setEmail] = useState("arjun@northstaracademy.in");
  const [password, setPassword] = useState("northstar-demo");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  function submit(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) { setError("Enter an email address and password to continue."); return; }
    setError("");
    onLogin();
  }
  return <div className="login-page">
    <div className="login-left">
      <div className="login-brand"><Brand /></div>
      <div className="login-story">
        <div className="eyebrow">A BETTER WAY TO KEEP THE CONVERSATION GOING</div>
        <h1>Make every<br/>message <em>matter.</em></h1>
        <p>Campaigns start conversations. Thoughtful follow-ups help them continue.</p>
        <div className="login-illustration" aria-hidden="true">
          <div className="illustration-ring ring-a"></div><div className="illustration-ring ring-b"></div>
          <div className="illustration-card card-campaign"><span className="illustration-icon"><Send size={16}/></span><div><b>Campaign sent</b><small>October demo class invite</small></div><CheckCircle2 size={16} className="ill-check"/></div>
          <div className="illustration-connector"></div>
          <div className="illustration-card card-follow"><span className="illustration-icon coral-icon"><MessageCircle size={16}/></span><div><b>Keep the conversation going</b><small>Follow up with the right people</small></div></div>
        </div>
      </div>
      <div className="login-footnote">A product concept for Cheerio · Demo workspace</div>
    </div>
    <div className="login-right">
      <form className="login-form" onSubmit={submit}>
        <div className="mobile-login-brand"><Brand /></div>
        <span className="eyebrow">WELCOME BACK</span>
        <h2>Sign in to your workspace.</h2>
        <p className="login-subtitle">Continue managing your customer conversations.</p>
        <label htmlFor="email">Work email</label>
        <input id="email" type="email" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com"/>
        <label htmlFor="password">Password</label>
        <div className="password-wrap"><input id="password" type={showPassword ? "text" : "password"} autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password"/><button type="button" className="password-toggle" onClick={() => setShowPassword(v => !v)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={16}/> : <Eye size={16}/>}</button></div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="login-options"><label className="remember"><input type="checkbox" defaultChecked/> <span>Remember me</span></label><button type="button" className="text-link" onClick={() => setError("This demo does not send password-reset emails.")}>Forgot password?</button></div>
        <button className="button-primary login-submit" type="submit">Sign in <ArrowRight size={16}/></button>
        <div className="login-divider"><span>DEMO ACCESS</span></div>
        <div className="demo-credentials"><LockKeyhole size={15}/><span>Demo credentials are prefilled. Sign in opens a local prototype, not a real account.</span></div>
        <p className="login-terms">By continuing, you agree to the workspace terms and privacy policy.</p>
      </form>
    </div>
  </div>;
}
function Sidebar({ page, setPage, open, close }) {
  const groups = [
    { name: "WORKSPACE", items: [{ id:"overview", label:"Overview", icon:Home }, { id:"campaigns", label:"Campaigns", icon:Send }, { id:"contacts", label:"Contacts", icon:Layers3 }, { id:"automations", label:"Automations", icon:Workflow }] },
    { name: "INSIGHTS", items: [{ id:"analytics", label:"Analytics", icon:LineChart }, { id:"guide", label:"Feature guide", icon:Compass, badge:"NEW" }] }
  ];
  return <>
    {open && <button className="scrim" aria-label="Close menu" onClick={close}/>}
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="sidebar-top"><Brand/><button className="icon-button close-sidebar" onClick={close} aria-label="Close menu"><X size={18}/></button></div>
      <div className="workspace-select"><div className="workspace-symbol">N</div><div className="workspace-meta"><b>Northstar Academy</b><small>Growth workspace</small></div><ChevronDown size={15}/></div>
      {groups.map(group => <div className="nav-group" key={group.name}><div className="nav-heading">{group.name}</div>{group.items.map(item => {const Icon=item.icon; return <button key={item.id} className={`nav-item ${page===item.id ? "selected" : ""}`} onClick={() => {setPage(item.id);close();}}><Icon size={17}/><span>{item.label}</span>{item.badge && <small className="nav-new">{item.badge}</small>}</button>})}</div>)}
      <div className="sidebar-lower"><div className="guide-card"><div className="guide-card-icon"><BookOpen size={16}/></div><b>Get more from Cheerio</b><p>Discover a useful next step for your campaigns.</p><button onClick={() => {setPage("guide");close();}}>Explore the guide <ArrowUpRight size={14}/></button></div><button className="nav-item"><Settings2 size={17}/><span>Settings</span></button><button className="nav-item"><CircleHelp size={17}/><span>Help & support</span></button><div className="profile"><div className="profile-avatar">AS</div><div><b>Arjun Sharma</b><small>Workspace admin</small></div><MoreHorizontal size={18}/></div></div>
    </aside>
  </>;
}
function Topbar({ title, onMenu, onLogout }) {
  return <header className="topbar"><button className="icon-button mobile-menu" onClick={onMenu} aria-label="Open menu"><Menu size={19}/></button><div className="crumb">Northstar Academy <ChevronRight size={13}/><b>{title}</b></div><div className="topbar-actions"><button className="help-link"><CircleHelp size={16}/> Help centre</button><button className="icon-button bell" aria-label="Notifications"><Bell size={18}/><i/></button><button className="top-avatar" onClick={onLogout} title="Sign out">AS</button></div></header>;
}
function PageHeader({ eyebrow, title, subtitle, action }) {
  return <div className="page-heading"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>{action && <div className="page-action">{action}</div>}</div>;
}
function Stat({ label, value, note, icon:Icon, trend }) {
  return <div className="stat"><div className="stat-head"><span>{label}</span><span className="stat-icon"><Icon size={16}/></span></div><strong>{value}</strong><div className="stat-note">{trend && <b><ArrowUpRight size={12}/>{trend}</b>}{note}</div></div>;
}
function Recommendation({ onStart, onDismiss }) {
  return <section className="recommendation"><div className="recommendation-art"><div className="orbit orbit-1"/><div className="orbit orbit-2"/><div className="recommendation-symbol"><Workflow size={25}/></div><div className="art-chip chip-a"><MousePointer2 size={15}/></div><div className="art-chip chip-b"><Clock3 size={15}/></div><div className="art-chip chip-c"><MessageCircle size={15}/></div><span className="art-note">A useful next step<br/>for your team.</span></div><div className="recommendation-copy"><div className="rec-kicker"><Sparkles size={14}/> YOUR NEXT BEST STEP <span>FEATURE TIP · 01</span></div><h2>Some people saw your campaign.<br/><em>What happens next?</em></h2><p>Your reports show who clicked. A follow-up workflow can help you reach people who didn't — without checking every contact manually.</p><div className="recommendation-reason"><Info size={15}/><span>Suggested because you’ve sent campaigns recently and haven’t set up a follow-up workflow in this demo.</span></div><div className="recommendation-actions"><button className="button-primary" onClick={onStart}>Build a follow-up workflow <ArrowRight size={16}/></button><button className="button-text" onClick={onDismiss}>Not right now</button></div></div><div className="rec-counter">01 <span>/ 03</span></div></section>;
}
function CampaignTable({ compact=false }) {
  return <div className="table-scroll"><table><thead><tr><th>Campaign</th><th>Sent</th><th>Delivered</th><th>Read rate</th><th>Link clicks</th><th></th></tr></thead><tbody>{campaigns.slice(0,compact?2:3).map((c,i)=><tr key={c.id}><td><div className="campaign-title"><i className={`campaign-dot dot-${i}`}/><div><b>{c.name}</b><small>WhatsApp · {c.audience}</small></div></div></td><td>{c.date}</td><td><span className="delivery-pill">{c.delivered}</span></td><td>{c.read}</td><td><b>{c.clicks}</b></td><td><button className="table-more" aria-label={`More options for ${c.name}`}><MoreHorizontal size={17}/></button></td></tr>)}</tbody></table></div>;
}
function Overview({ setPage, onStart, onDismiss, dismissed }) {
  return <div className="content"><PageHeader eyebrow="TUESDAY, 14 OCTOBER 2026" title="Good morning, Arjun." subtitle="Here's how your customer conversations are doing." action={<button className="button-secondary" onClick={()=>setPage("campaigns")}>All campaigns <ArrowRight size={14}/></button>}/><div className="stats-grid"><Stat label="Messages delivered" value="4,206" note="Across 3 recent campaigns" icon={Send} trend="4.8%"/><Stat label="Read rate" value="70.6%" note="Average across campaigns" icon={BookOpen} trend="2.1%"/><Stat label="Link clicks" value="727" note="People who showed interest" icon={MousePointer2} trend="8.3%"/><Stat label="Active workflows" value="0" note="Room to automate" icon={Workflow}/></div>{!dismissed && <Recommendation onStart={onStart} onDismiss={onDismiss}/>}<section className="section"><div className="section-heading"><div><div className="eyebrow">RECENT ACTIVITY</div><h2>Your latest campaigns</h2></div><button className="button-text" onClick={()=>setPage("campaigns")}>View all campaigns <ArrowRight size={14}/></button></div><CampaignTable compact/></section><div className="bottom-grid"><div className="tip-box"><span className="tip-icon"><Target size={18}/></span><div><div className="eyebrow">A QUICK TIP</div><h3>Campaigns are the first step, not the last.</h3><p>Use a follow-up workflow to keep the conversation going with contacts who haven't clicked yet.</p></div><button className="tip-open" onClick={onStart} aria-label="Explore follow-up workflow"><ArrowUpRight size={18}/></button></div><div className="activity-box"><div className="activity-heading"><h3>Workspace activity</h3><MoreHorizontal size={18}/></div><div className="activity-item"><i/><div><b>Campaign sent</b><p>October demo class invite</p><small>Oct 12 · 10:30 AM</small></div></div><div className="activity-item"><i className="gold"/><div><b>Contacts imported</b><p>October leads · 142 contacts</p><small>Oct 10 · 4:15 PM</small></div></div></div></div><div className="demo-disclaimer"><Info size={14}/> Illustrative campaign data · This is a local product concept, not a live Cheerio account.</div></div>;
}
function CampaignsPage({ setPage }) {
  return <div className="content"><PageHeader eyebrow="CAMPAIGNS" title="Every message has a story." subtitle="Review performance, then decide what to do next." action={<button className="button-primary" onClick={()=>setPage("guide")}>Explore next steps <ArrowRight size={15}/></button>}/><div className="campaign-summary"><div><span className="eyebrow">LAST 30 DAYS</span><b>3 campaigns</b><small>WhatsApp · 4,205 contacts reached</small></div><div><strong>70.6%</strong><small>Average read rate</small></div><div><strong>727</strong><small>Total link clicks</small></div></div><section className="section"><div className="section-heading"><div><div className="eyebrow">CAMPAIGN HISTORY</div><h2>Recent campaigns</h2></div><span className="sent-label"><i/> All campaigns sent</span></div><CampaignTable/></section><div className="inline-tip"><Info size={18}/><div><b>What about the people who didn't click?</b><p>Analytics help you see the opportunity. A follow-up workflow can help you act on it.</p></div><button className="button-secondary" onClick={()=>setPage("guide")}>See suggested workflow <ArrowRight size={14}/></button></div><div className="demo-disclaimer"><Info size={14}/> Illustrative campaign data.</div></div>;
}
function GuidePage({ setPage }) {
  return <div className="content"><PageHeader eyebrow="FEATURE GUIDE · RECOMMENDED FOR YOU" title="Turn campaign results into a next step." subtitle="You already send campaigns. Here's a practical way to follow up with people who didn't click, without manually checking every contact."/><div className="guide-panel"><div className="guide-index">01</div><div className="guide-body"><div className="rec-kicker"><Workflow size={14}/> PROPOSED WORKFLOW</div><h2>Follow up with recipients who didn't click</h2><p>Start when a campaign is sent. Wait for a set period, check whether each recipient clicked the tracked link, then send a relevant follow-up to those who didn't.</p><div className="guide-tags"><span><Clock3 size={14}/> About 3 minutes to configure</span><span><ShieldCheck size={14}/> Review before enabling</span></div><button className="button-primary" onClick={()=>setPage("setup")}>Set up this workflow <ArrowRight size={16}/></button></div><div className="mini-flow"><MiniNode icon={Send} title="Campaign sent" sub="Trigger"/><div className="mini-line"/><MiniNode icon={Clock3} title="Wait 3 days" sub="Delay"/><div className="mini-line"/><MiniNode icon={MousePointer2} title="Link not clicked" sub="Condition"/><div className="mini-line"/><MiniNode icon={MessageCircle} title="Send follow-up" sub="Action"/></div></div><div className="guide-note"><Info size={16}/><p><b>Why this recommendation?</b> This demo workspace has recent campaigns and no active workflows. The recommendation is optional and appears when it becomes relevant.</p></div><div className="demo-disclaimer"><Info size={14}/> Proposed product experience. It does not connect to Cheerio or send messages.</div></div>;
}
function MiniNode({ icon:Icon, title, sub }) { return <div className="mini-node"><span><Icon size={15}/></span><div><b>{title}</b><small>{sub}</small></div></div>; }

function Stepper({ step }) {
  return (
    <div className="stepper">
      {["Choose campaign", "Set conditions", "Review workflow"].map(
        (name, i) => (
          <React.Fragment key={name}>
            <div
              className={`step ${
                step === i + 1 ? "current" : step > i + 1 ? "done" : ""
              }`}
            >
              <span>
                {step > i + 1 ? <Check size={13} /> : `0${i + 1}`}
              </span>
              {name}
            </div>
            {i < 2 && <div className="step-rule" />}
          </React.Fragment>
        )
      )}
    </div>
  );
}

function FlowNode({ number, icon:Icon, title, sub, active }) { return <div className={`flow-node ${active?"flow-active":""}`}><small>{number}</small><span className="flow-icon"><Icon size={16}/></span><div><b>{title}</b><p>{sub}</p></div><ChevronRight size={15}/></div>; }
function SetupPage({ onBack, onComplete }) {
  const [step,setStep] = useState(1);
  const [campaign,setCampaign] = useState(campaigns[0].name);
  const [delay,setDelay] = useState("3 days");
  const [condition,setCondition] = useState("not-clicked");
  const [action,setAction] = useState("WhatsApp follow-up");
  const [message,setMessage] = useState(defaultMessage);
  const [error,setError] = useState("");
  function next() { if(step===2 && action==="WhatsApp follow-up" && !message.trim()){setError("Add a follow-up message before continuing.");return;} setError("");setStep(s=>Math.min(3,s+1)); }
  return <div className="content setup-page"><button className="back-link" onClick={onBack}><ArrowLeft size={15}/> Back to overview</button><PageHeader eyebrow="WORKFLOW SETUP · DEMO" title="Build your follow-up." subtitle="A simple way to reach people who may still be interested."/><Stepper step={step}/><div className="setup-grid"><section className="setup-panel">
    {step===1&&<><div className="panel-step">STEP 01 <span>THE STARTING POINT</span></div><h2>Which campaign should start this?</h2><p className="panel-intro">Choose a sent campaign with a tracked link. This workflow will use it as its starting point.</p><label className="field-label" htmlFor="campaign">Campaign</label><div className="select-field"><select id="campaign" value={campaign} onChange={e=>setCampaign(e.target.value)}>{campaigns.map(c=><option key={c.id}>{c.name}</option>)}</select><ChevronDown size={15}/></div><div className="campaign-selected"><span><Send size={17}/></span><div><b>{campaign}</b><small>WhatsApp · Sent campaign · Demo tracking status</small></div><CheckCircle2 size={17}/></div><div className="field-hint"><Info size={15}/> A live product should confirm link tracking is available before continuing.</div><div className="panel-footer"><small>STEP 1 OF 3</small><button className="button-primary" onClick={next}>Continue <ArrowRight size={15}/></button></div></>}
    {step===2&&<><div className="panel-step">STEP 02 <span>THE FOLLOW-UP RULE</span></div><h2>When should we follow up?</h2><p className="panel-intro">Give people time to respond. Then check campaign activity before sending anything.</p><label className="field-label" htmlFor="delay">Wait before checking</label><div className="select-field"><select id="delay" value={delay} onChange={e=>setDelay(e.target.value)}>{["1 day","2 days","3 days","5 days","7 days"].map(x=><option key={x}>{x}</option>)}</select><ChevronDown size={15}/></div><label className="field-label spaced">Continue only when the recipient</label><div className="radio-stack">{[{id:"not-clicked",title:"Has not clicked the campaign link",desc:"Follow up with people who may need a reminder."},{id:"clicked",title:"Has clicked the campaign link",desc:"Use a different journey for engaged contacts."}].map(opt=><button type="button" key={opt.id} className={`radio-choice ${condition===opt.id?"checked":""}`} onClick={()=>setCondition(opt.id)}><span className="radio-dot">{condition===opt.id&&<i/>}</span><span><b>{opt.title}</b><small>{opt.desc}</small></span></button>)}</div><label className="field-label spaced" htmlFor="action">Follow-up action</label><div className="select-field"><select id="action" value={action} onChange={e=>setAction(e.target.value)}><option value="WhatsApp follow-up">Send a WhatsApp follow-up</option><option value="Admissions team task">Create a task for the admissions team</option><option value="Follow-up segment">Add contact to a follow-up segment</option></select><ChevronDown size={15}/></div>{action==="WhatsApp follow-up"&&<><label className="field-label spaced" htmlFor="message">Message preview</label><textarea id="message" rows={3} value={message} onChange={e=>setMessage(e.target.value)}/>{error&&<p className="form-error">{error}</p>}</>}<div className="field-hint"><ShieldCheck size={15}/> In a live product, verify consent, template approval and audience rules.</div><div className="panel-footer"><button className="button-text" onClick={()=>setStep(1)}><ArrowLeft size={14}/> Previous</button><button className="button-primary" onClick={next}>Review workflow <ArrowRight size={15}/></button></div></>}
    {step===3&&<><div className="panel-step">STEP 03 <span>CHECK BEFORE YOU FINISH</span></div><h2>Does this look right?</h2><p className="panel-intro">Review the configuration before it would be enabled. Nothing is sent from this prototype.</p><div className="review-rows"><div><small>Starting campaign</small><b>{campaign}</b><button onClick={()=>setStep(1)}>Edit</button></div><div><small>Wait period</small><b>{delay}</b><button onClick={()=>setStep(2)}>Edit</button></div><div><small>Recipient condition</small><b>{condition==="not-clicked"?"Link has not been clicked":"Link has been clicked"}</b><button onClick={()=>setStep(2)}>Edit</button></div><div><small>Action</small><b>{action==="WhatsApp follow-up"?"Send a WhatsApp follow-up":action==="Admissions team task"?"Create an admissions team task":"Add to follow-up segment"}</b><button onClick={()=>setStep(2)}>Edit</button></div></div>{action==="WhatsApp follow-up"&&<div className="message-summary"><small>MESSAGE PREVIEW</small><p>{message}</p></div>}<div className="field-hint"><Info size={15}/> In production, validate permissions, plan access, template status and audience eligibility.</div><div className="panel-footer"><button className="button-text" onClick={()=>setStep(2)}><ArrowLeft size={14}/> Previous</button><button className="button-primary" onClick={()=>onComplete({campaign,delay,condition:condition==="not-clicked"?"has not clicked":"has clicked",action,message})}>Finish demo setup <Check size={15}/></button></div></>}
  </section><aside className="workflow-preview"><div className="preview-heading"><div><div className="eyebrow">WORKFLOW PREVIEW</div><h3>Campaign follow-up</h3></div><span className="draft-pill">DRAFT</span></div><p className="preview-sub">A live summary of the steps you configure here.</p><div className="flow-stack"><FlowNode number="01" icon={Send} title="Campaign sent" sub={campaign} active={step===1}/><div className="flow-link"/><FlowNode number="02" icon={Clock3} title={`Wait ${delay}`} sub="Give recipients time to respond" active={step===2}/><div className="flow-link"/><FlowNode number="03" icon={MousePointer2} title={condition==="not-clicked"?"Link not clicked":"Link clicked"} sub="Check tracked campaign activity" active={step===2}/><div className="flow-link"/><FlowNode number="04" icon={action==="WhatsApp follow-up"?MessageCircle:action==="Admissions team task"?CheckCircle2:Layers3} title={action==="WhatsApp follow-up"?"Send WhatsApp follow-up":action==="Admissions team task"?"Create admissions team task":"Add to follow-up segment"} sub="Next action" active={step===3}/></div><div className="preview-warning"><ShieldCheck size={16}/><div><b>Review before enabling</b><p>Check message consent, timing and audience rules in the live product.</p></div></div><div className="preview-bottom"><b>◉ DEMO MODE</b><span>Local changes only</span></div></aside></div></div>;
}
function CompletePage({ details, onHome, onAgain }) {
  return <div className="content complete-page"><div className="complete-icon"><Check size={28}/></div><div className="eyebrow">PROTOTYPE COMPLETE</div><h1>Your workflow is ready<br/><em>for a real review.</em></h1><p className="complete-intro">You've mapped a follow-up journey for <b>{details.campaign}</b>. In a live Cheerio account, you would validate the configuration and enable it after approval.</p><div className="complete-card"><div className="complete-card-title"><Workflow size={18}/><b>Campaign follow-up</b><span className="draft-pill">NOT ENABLED</span></div><div className="complete-flow"><span><Send size={14}/> Campaign sent</span><ArrowRight size={13}/><span><Clock3 size={14}/> {details.delay}</span><ArrowRight size={13}/><span><MousePointer2 size={14}/> {details.condition}</span></div><div className="complete-action"><small>THEN</small><b>{details.action}</b></div></div><div className="complete-note"><Info size={17}/><p><b>What happens next in the real product?</b><br/>A live implementation should validate tracking, permissions, template approval and eligible contacts. This prototype saves no configuration and sends no messages.</p></div><div className="complete-buttons"><button className="button-primary" onClick={onHome}>Return to overview <ArrowRight size={15}/></button><button className="button-secondary" onClick={onAgain}>Try another workflow</button></div></div>;
}
function SimplePage({ page, setPage }) {
  const content = {
    contacts:{eyebrow:"CONTACTS",title:"Know who you’re talking to.",sub:"Your contact list is where customer context starts.",body:"For this concept, the next useful step is connecting campaign engagement to a relevant follow-up."},
    analytics:{eyebrow:"ANALYTICS",title:"Measure the conversation.",sub:"Delivery, reads, clicks and replies are useful signals.",body:"The proposed next step turns one of those signals — no link click — into an actionable follow-up."},
    automations:{eyebrow:"AUTOMATIONS",title:"Make repeat work easier.",sub:"Workflow automation connects a trigger, condition and action.",body:"Explore one practical example: follow up with recipients who didn't click a tracked campaign link."}
  }[page];
  return <div className="content"><PageHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.sub}/><div className="simple-panel"><Workflow size={24}/><h2>A practical next step</h2><p>{content.body}</p><button className="button-primary" onClick={()=>setPage("guide")}>Explore follow-up workflow <ArrowRight size={15}/></button></div><div className="demo-disclaimer"><Info size={14}/> Illustrative content for this prototype.</div></div>;
}
export default function App() {
  const [authenticated,setAuthenticated]=useState(false);
  const [page,setPage]=useState("overview");
  const [mobileOpen,setMobileOpen]=useState(false);
  const [dismissed,setDismissed]=useState(false);
  const [details,setDetails]=useState(null);
  const titles={overview:"Overview",campaigns:"Campaigns",contacts:"Contacts",automations:"Automations",analytics:"Analytics",guide:"Feature guide",setup:"Workflow setup",complete:"Workflow review"};
  const logout=()=>{setAuthenticated(false);setPage("overview");setDetails(null);};
  const complete=data=>{setDetails(data);setPage("complete");window.scrollTo({top:0,behavior:"smooth"});};
  const home=()=>{setPage("overview");setDismissed(false);window.scrollTo({top:0,behavior:"smooth"});};
  if(!authenticated)return <Login onLogin={()=>setAuthenticated(true)}/>;
  return <div className="app-shell"><Sidebar page={page} setPage={setPage} open={mobileOpen} close={()=>setMobileOpen(false)}/><main className="main"><Topbar title={titles[page]||"Overview"} onMenu={()=>setMobileOpen(true)} onLogout={logout}/>{page==="overview"&&<Overview setPage={setPage} onStart={()=>setPage("setup")} onDismiss={()=>setDismissed(true)} dismissed={dismissed}/ >}{page==="campaigns"&&<CampaignsPage setPage={setPage}/ >}{page==="guide"&&<GuidePage setPage={setPage}/ >}{page==="setup"&&<SetupPage onBack={()=>setPage("overview")} onComplete={complete}/ >}{page==="complete"&&details&&<CompletePage details={details} onHome={home} onAgain={()=>setPage("setup")}/ >}{["contacts","analytics","automations"].includes(page)&&<SimplePage page={page} setPage={setPage}/ >}<footer className="app-footer"><span>© 2026 Cheerio · Product concept</span><span>Thoughtful conversations, by design.</span></footer></main></div>;
}
