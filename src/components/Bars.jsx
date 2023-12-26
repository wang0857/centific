export function Bars({data}) {
    const maximum = 30
    const height = `${data.value / maximum * 300}px`
    const style = {
        height: height
    }

    console.log(style)

    return (
        <div className="bar-container">
            <div className="bar-tag">{data.value}</div>
            <div className="bar" style={style}></div>
        </div>
    )
}