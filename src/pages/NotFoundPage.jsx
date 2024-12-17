import "../styles/PageNotFound.css"

export default function NotFoundPage() {
  const fooled = Math.random() < 0.1
  return (
    <div>
      <div className="container">
        <div className="context">
          <h1>啊哦！你来到了内容的荒原</h1>
          <a href={fooled ? "https://www.bilibili.com/video/BV1GJ411x7h7"  : "/"}>让我们帮助您</a>
        </div>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}