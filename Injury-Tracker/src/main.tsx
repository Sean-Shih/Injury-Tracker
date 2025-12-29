import './styles.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header>
      <h1>Injury Tracker</h1>
      <p id="header-text">Use this tracker to track your favourite NBA players' statuses and see who is eligible for the postseason awards.</p>
    </header>
    <div>
      <p>Players goes here</p>
    </div>
`