let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let zak = 'Zak Ruvalcaba'
let sally = 'Sally Smithers'
let aaron = 'Aaron D. Tyres'
let dan = 'Dan Danger'
const element = (
    <ul style={{ 'color': 'blue', 'fontSize': '24px' }}>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{robin}</li>
        <li>{zak}</li>
        <li>{sally}</li>
        <li>{aaron}</li>
        <li>{dan}</li>
    </ul>
)

ReactDOM.render(element, document.getElementById('content'))
