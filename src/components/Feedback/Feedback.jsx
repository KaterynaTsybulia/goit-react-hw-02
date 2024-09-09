
export default function Feedback({values, total, positiveFeedback}) {
    return(
        <ul>
            <li> Good: {values.good} </li>
            <li> Neutral: {values.neutral} </li>
            <li> Bad: {values.bad} </li>
            <li> Total: {total} </li>
            <li> Positive: {positiveFeedback}% </li>
        </ul>
    )
}



