import React, { useState } from "react"
import ShowRank from "./ShowRank"
import Modal from "./Modal"
import * as styles from "../styles/admin.module.css"

export default function Admin({ Name, Rank, Desc }) {
  const [Active, setActive] = useState(false)
  const HandleClick = () => {
    setActive(Active ? false : true)
  }
  return (
    <div
      role="button"
      tabIndex="-1"
      onKeyDown={HandleClick}
      onClick={HandleClick}
      className={styles.col}
    >
      <img src={"https://minotar.net/armor/bust/" + Name + "/128.png"} alt="" />
      <h4>{Name}</h4>
      <ShowRank rank={Rank} />
      <Modal active={Active} title={Name} text={Desc} />
    </div>
  )
}
